const ProductCard = ({ titulo, precio, descripcion, imagen, raiting }) => {
  return (
    <article>
      <h2> {titulo} </h2>
      <p> {precio} </p>
      <p> {descripcion} </p>
      <img src={imagen} alt={titulo}></img>
      <p> {raiting} </p>
    </article>
  );
};

export default ProductCard;
