import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    numberOfOrders: number;
    paidOrders: number;
    notPaidOrders: number;
    numberOfClients: number;
    numberOfProducts: number;
    productsWithInventory: number;
    lowInventory: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'Example' })
}