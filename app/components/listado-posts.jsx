import { Link } from "@remix-run/react"
import Post from "./post"

function ListadoPosts({posts}) {
  return (
    <>
      <h2 className="heading">Blog</h2>

      <div className="blog">
        {posts.map( post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>

      {posts.length === 3 && (
        <div className="centrar-der">
          <Link to='/blog' className="enlace">Ver más posts</Link>
        </div>
      )}
    </>
  )
}

export default ListadoPosts