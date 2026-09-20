const Express = require('express')
const { sequelize } =  require('./config/bd.js')
const server = Express()
const cors = require('cors')
require('./models/index.js')
const usuarioRoutes = require('./routes/usuarioRoutes.js')
const PORT = 3000


server.use(Express.json())

server.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, autorizacion',
    credentials: true,
}))

// server.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     res.setHeader('Access-Control-Allow-Credentials', 'true')
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200)
//     }
//     next()
// })

server.use("/usuarios", usuarioRoutes)

server.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Conexión exitosa a la Base de Datos");
        console.log("El servidor está ON en el puerto " + PORT);
    } catch (error) {
        console.error("Error al iniciar el servidor o DB:", error);
    }
})