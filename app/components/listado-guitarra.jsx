import { Link } from "@remix-run/react"
import Guitarra from "./guitarra"

function ListadoGuitarras({guitarras}) {
  return (
    <>
      <h2 className="heading">Nuestra colección</h2>

      {guitarras.length && (
        <div className='guitarras-grid'>
          {guitarras.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      )}

      {guitarras.length === 3 && (
        <div className="centrar-der">
          <Link to='tienda' className="enlace mt-3">Ver más</Link>
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras