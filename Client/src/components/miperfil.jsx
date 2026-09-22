import { Link } from "react-router-dom"
import { useEffect } from "react"

function MiPerfil(props) {

    useEffect(()=>{
        if (props.Usuario) {
            props.mapear()
        }
    }, [])

    return (<>
        {props.Usuario?.userName && (
            <div>
                <h3>NOMBRE: {props.Usuario.nombre}</h3>
                <h3>USERNAME: {props.Usuario.userName}</h3>
                <h3>MAIL: {props.Usuario.mail}</h3>
                <p></p>
                {props.Usuario?.userName && (
                    <div><Link to='/posteos'>MisPosts</Link></div>
                )}
                <p></p>
                <ul>
                    {props.posts.map((post) => {
                    return(<li>
                        {post.titulo} :  {post.content}
                    </li>)
                    })}
                </ul>
            </div>
        )}
        {!props.Usuario?.userName && (
            <div>
                <h3>NO ESTÁS LOGEADO</h3>
                <Link to='/login'>LOGEARSE</Link>
            </div>
        )}
    </>)
}

export default MiPerfil