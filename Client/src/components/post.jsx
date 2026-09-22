import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


function Post(props) {
    const [titulo, setTitulo] = useState("")
    const [content, setContent] = useState("")
    const [response, setResponse] = useState("")

    const postear = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/posteos/post", {
                titulo,
                content,
                usuario: props.Usuario
            })
            setResponse("Posteado!")
            props.mapear()
            e.target.reset()
            // setTitulo("")
            // setContent("")
        } catch (error) {
            console.log({error})
        }
    }

    useEffect(() => {
        if (props.Usuario) {
            props.mapear()
        }
    }, [])

    return (<>
        {props.Usuario?.userName && (
            <div>
                <form onSubmit={postear}>
                    <label>
                        <input type="text" /*value={titulo}*/ required placeholder="Que está pasando?" onChange={ (event) => { setTitulo(event.target.value) } }/>
                        <input type="text" /*value={content}*/ required placeholder="Contenido" onChange={ (event) => { setContent(event.target.value) } }/>
                    </label>
                    <div className="logearseDivButton"><button type="submit" className="logearseButton">POST</button></div>
                </form>
                <ul>
                    {props.posts.map((post) => {
                    return(<li>
                        {post.titulo} :  {post.content}
                    </li>)
                    })}
                </ul>
                Respouesta: {response}
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

export default Post