import './App.css';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dab-product-card';

export const product = {
  id: '1',
  title: 'Coffe Mug - With Image',
  img: './coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={ product }
        initialValues={{
            count: 6,
            maxCount: 10,
        }}
    >
        {
            ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
      </ProductCard>
    </div>
  );
}

export default App;
