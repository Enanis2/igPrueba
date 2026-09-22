import { Link } from "react-router-dom"

function MiPerfil(props) {
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