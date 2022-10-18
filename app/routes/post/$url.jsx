import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers";
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}) {
  const { url } = params
  const post = await getPost(url);
  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    });
  }

  return post
}

export function meta({data}) {

  if(!data) {
    return{
      title: `GuitarLA | Post no encontrado`,
      description: `Blog, blog de guitarras post no encontrado`
    }
  }

  return{
    title: `GuitarLA | ${data.data[0].attributes.nombre} - blog`,
    description: `Blog, blog de guitarras, blog de musica blog ${data.data[0].attributes.nombre}`
  }
}

function PostUrl() {
  const post = useLoaderData();
  const {nombre, contenido, imagen, updatedAt} = post.data[0].attributes;

  return (
    <article className="contenedor post mt-4">
      <img 
        className="imagen" 
        src={imagen.data.attributes.url} 
        alt={`imagen blog ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="fecha">{formatearFecha(updatedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default PostUrl