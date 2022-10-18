import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarra.server'
import styles from '~/styles/guitarras.css';

export async function loader({params}) {
  const {url} = params;
  const guitarra = await getGuitarra(url);

  if(guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    });
  }

  return guitarra;
} 

export function meta({data}) {
  if(!data) {
    return{
      title: 'GuitarLA | Guitarra no encontrada',
    description: 'Guitarras, venta de guitarras, guitarra no encontrada'
    }
  }

  return{
    title: `GuitarLA | Guitarra ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function GuitarraUrl() {

  const guitarra = useLoaderData();

  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;

  return (
    <>
      <main className='contenedor guitarra guitarra-page'>
      <img 
        className='imagen' 
        src={imagen.data.attributes.url} 
        alt={`imagen guitarra ${nombre}`}
      />

      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>
      </main>
    </>
  )
}

export default GuitarraUrl