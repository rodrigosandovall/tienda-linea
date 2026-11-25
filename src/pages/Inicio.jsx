import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const traer = async () => {
      try {
        const respuesta = await fetch("https://dummyjson.com/products");
        const data = await respuesta.json();
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

  if (error) {
    return <p>{error}</p>;
  }
  if (cargando) {
    return <p>Cargando datos</p>;
  }
  {
    return productos.map((producto) => (
      <ProductCard
        key={producto.id}
        titulo={producto.title}
        precio={producto.price}
        descripcion={producto.description}
        imagen={producto.thumbnail}
        rating={producto.rating}
      />
    ));
  }
};
export default Inicio;
