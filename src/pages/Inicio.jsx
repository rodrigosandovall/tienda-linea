import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const traer = async () => {
      try {
        const x = await fetch("https://dummyjson.com/products");
        const data = await x.json();
        setProductos(data.products);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos 😢");
      } finally {
        setCargando(false);
      }
    };
    traer();
  }, []);

  console.log(productos);
  if (error) {
    return <p>{error}</p>;
  }
  if (cargando) {
    return <h1>Cargando datos</h1>;
  } else {
    return productos.map((producto) => (
      <ProductCard
        key={producto.id}
        titulo={producto.title}
        precio={producto.price}
        descripcion={producto.description}
        imagen={producto.thumbnail}
        raiting={producto.rating}
      ></ProductCard>
    ));
  }
};
export default Inicio;
