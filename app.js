const express = require('express');
const app = express();

const PORT = 3000;

require('./config/db')

app.use(express.json())

const user = require('./routes/user.routes');

app.use(user);

app.get('/', (req,res)=>{
    res.json({status : 200, message : 'Hii R u there..!'})
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}` )
})