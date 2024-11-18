import express from 'express'


const app = express()

app.get("/",(req,res) => { 
    res.send("All service are ok.")
 })

app.listen(4000, () => {
    console.log("server runniing");
})