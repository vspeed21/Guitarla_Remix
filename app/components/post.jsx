import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

function Post({post}) {
  const {nombre, contenido, imagen, url, updatedAt} = post;

  return (
    <article className="post">
      <img 
        className="imagen" 
        src={imagen.data.attributes.formats.small.url} 
        alt={`imagen blog ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="fecha">{formatearFecha(updatedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link to={`/post/${url}`} className="enlace">Leer más</Link>
      </div>
    </article>
  )
}

export default Post