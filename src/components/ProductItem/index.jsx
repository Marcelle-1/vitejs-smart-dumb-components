export default function ProductItem({ product }) {
  return (
    <li key={product.id}>
      <p>
        #{product.id} {product.name}
      </p>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
    </li>
  );
}
