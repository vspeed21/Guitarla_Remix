import nosotrosImagen from '-/img/nosotros.jpg';
import styles from '~/styles/nosotros.css'

export function meta() {
  return(
    {
      title: 'GuitarLA | Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: nosotrosImagen,
      as: 'image'
    }
  ]
}

function nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={nosotrosImagen} alt='imagen nosotros'/>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, deserunt. Sequi assumenda dolores vitae doloribus aspernatur libero quaerat neque rerum, ea consequatur minima tenetur accusamus tempore et, illum, labore dolore.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, deserunt. Sequi assumenda dolores vitae doloribus aspernatur libero quaerat neque rerum, ea consequatur minima tenetur accusamus tempore et, illum, labore dolore.</p>
        </div>
      </div>
    </main>
  )
}

export default nosotros