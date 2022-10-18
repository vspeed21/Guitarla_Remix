import { useLoaderData } from "@remix-run/react";

import ListadoGuitarras from "~/components/listado-guitarra";
import ListadoPosts from "~/components/listado-posts";
import { get3Guitarras } from "~/models/guitarra.server"
import { get3Posts } from "~/models/posts.server"
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';
import Curso from "~/components/curso";
import { getCurso } from "~/models/curso.server";

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    get3Guitarras(),
    get3Posts(),
    getCurso(),
  ]);
  
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

export function meta() {

}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    },
  ]
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso.attributes}
      />

      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index