import { Link } from "react-router-dom";

function Guitarra({guitarra}) {
  const {nombre, precio, descripcion, imagen, url} = guitarra;

  return (
    <div className="guitarra">
      <img className="" src={imagen.data.attributes.url} alt={`imagen guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link
          className="enlace"
          to={`/guitarra/${url}`}
        >Ver Guitarra</Link>
      </div>
    </div>
  )
}

export default Guitarra