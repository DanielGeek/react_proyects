import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';
import coffeeMug from '../assets/coffee-mug.png';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: coffeeMug
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={ 'Hola Mundo' } />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={ '' } />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
