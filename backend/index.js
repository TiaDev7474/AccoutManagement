const express =  require('express')
const cors = require('cors')
const app = express();

app.use(cors({
    origin: 'http://localhost:5173' 
}))

app.use('/api/auth', require('./routes/auth'))
app.listen(8000, () => {
    console.log(`server running at http://localhost:8000`)
})