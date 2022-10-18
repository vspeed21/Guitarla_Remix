import { useLoaderData } from '@remix-run/react';
import ListadoPosts from '~/components/listado-posts';

import Post from '~/components/post';
import { getPosts } from '~/models/posts.server';
import styles from '~/styles/blog.css'

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return{
    title: 'GuitarLA | Blog'
  }
}

function blog() {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default blog