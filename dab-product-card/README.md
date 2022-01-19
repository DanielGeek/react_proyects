# dab-product-card

This is a test package to deploy to NPM 

### Daniel Ángel Barreto

## Example
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dab-product-card';
```

```
<ProductCard
    key={ product.id }
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```