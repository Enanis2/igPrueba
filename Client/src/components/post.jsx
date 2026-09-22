import { useState } from "react"
import axios from 'axios'


function Post(props) {
    const [titulo, setTitulo] = useState("")
    const [content, setContent] = useState("")
    const [response, setResponse] = useState("")

    const postear = async (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:3000/posteos/post", {
                titulo,
                content,
                usuario: props.Usuario
            })
            setResponse("Posteado!")
        } catch (error) {
            console.log({error})
        }
    }

    return (<>
        {!props.Usuario?.userName && (
            <form onSubmit={postear}>
                <label>
                    <input type="text" required placeholder="Que está pasando?" onChange={ (event) => { setTitulo(event.target.value) } }/>
                    <input type="password" required placeholder="Contenido" onChange={ (event) => { setContent(event.target.value) } }/>
                </label>
                <div className="logearseDivButton"><button type="submit" className="logearseButton">POST</button></div>
            </form>
        )}
    </>)
}

export default Post