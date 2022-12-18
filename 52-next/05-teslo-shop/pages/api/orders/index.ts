import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { db } from '../../../database';
import { IOrder } from '../../../interfaces';
import { Product } from '../../../models';

type Data = {
    message: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch ( req.method ) {
      case 'POST':
          return createOrder( req, res );
    
      default:
        return res.status(400).json({ message: 'Bad request' });
    }
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { orderItems, total } = req.body as IOrder;

    // Verify that we have an user
    const session: any = await getSession({ req });
    if ( !session ) {
        return res.status(401).json({ message: 'You must be authenticated to do this' });
    }

    // Create an array with the products that the person wants
    const productsIds = orderItems.map( product => product._id );
    await db.connect();

    const dbProducts = await Product.find({ _id: { $in: productsIds } });

    try {
        
        const subTotal = orderItems.reduce( ( prev, current ) => {
            const currentPrice = dbProducts.find( prod => prod._id === current._id )?.price;
            if ( !currentPrice ) {
                throw new Error('Check the cart again, product does not exist');
            }

            return ( currentPrice * current.quantity ) + prev
        }, 0 );
    } catch (error) {
        
    }

    console.log({ dbProducts });


    return res.status(201).json( req.body );
}

