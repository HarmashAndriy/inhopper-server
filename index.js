const express = require('express')
const connectDB = require('./config/bd')
const cors = require('cors')

const app = express();
connectDB()

app.use(cors({origen: true, credentials: true}))
app.use(express.json({ extended: false }));


const games = require('./routes/api/games')
app.use('/api/games', games)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
   console.log('listening on port ' + PORT)
})