import {Link} from 'react-router-dom'

function NavBar(props) {

    const unlog = async () => {
        props.stearUsuario(null)
        localStorage.setItem("TOKEN", null)
    }

    return (<>
        <div id="NavBar">            
            <nav>
                {props.Usuario?.userName && (
                    <div>
                        <div>UserName: {props.Usuario.userName}</div>
                        <button id='unlog' onDoubleClick={unlog}>Deslogearse</button>
                    </div>

                )}
                <Link to="/">Home</Link>
                {props.Usuario?.userName && (
                    <div><Link to='/miperfil'>Perfil</Link></div>
                )}
                {props.Usuario?.userName && (
                    <div><Link to='/post'>Postear</Link></div>
                )}
                {!props.Usuario?.userName && (
                    <div><Link to='/registro'>Registrarse</Link></div>
                )}
                {!props.Usuario?.userName && (
                    <div><Link to='/login'>Login</Link></div>
                )}
            </nav>
        </div>
    </>)
}

export default NavBar