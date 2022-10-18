import { useLoaderData } from '@remix-run/react';

import { getGuitarras } from '~/models/guitarra.server'
import styles from '~/styles/guitarras.css';
import ListadoGuitarras from '~/components/listado-guitarra';

export function meta() {
  return{
    title: 'GuitarLA | Tienda',
    description: 'Coleccion de guitarras, Venta de guitarras'
  }
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function tienda() {
  const guitarras = useLoaderData();

  return (
    <main className='contenedor'>
      <ListadoGuitarras
        guitarras={guitarras}
      />

    </main>
  )
}

export default tienda