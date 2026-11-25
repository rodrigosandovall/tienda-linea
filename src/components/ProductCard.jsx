const ProductCard = ({ titulo, precio, descripcion, imagen, rating }) => {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{precio}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={titulo} />
      <p>{rating}</p>
    </article>
  );
};

export default ProductCard;
