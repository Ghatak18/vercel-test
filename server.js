const express = require("express")
const app = express()

app.get("/",(req,res) =>{
    res.json({
        "hellow" : "hellow"
    })
    
})

port = 8000
app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})