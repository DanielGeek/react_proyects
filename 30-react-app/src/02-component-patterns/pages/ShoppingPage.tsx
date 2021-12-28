import { ProductCard } from '../components/ProductCard';
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
        <ProductCard product={ product } />
      </div>
    </div>
  )
}
