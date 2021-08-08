import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'first book',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    price: 10,
    title: 'Second book',
    description: 'This is a 2nd product - amazing!',
  },
  {
    id: 'p3',
    price: 15,
    title: '3rd book',
    description: 'This is a 3rd product - amazing!',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product, index) => (
          <ProductItem
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
