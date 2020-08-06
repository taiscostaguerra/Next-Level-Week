const proffys = [
    {name: "Diego Fernades",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "899845544",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost:"20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    },
    
    {name: "Daniela Evangelista",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "899845544",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost:"20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
    }

]

const express = require('express')
const server = express()
server.use(express.static("public")) //.use eh config do servidor

.get("/",(req, res) => {
    return res.sendFile(__dirname + "/views/index.html") //dirname eh o diretorio do server
})
.get('/study',(req,res) =>{
    return res.sendFile(__dirname + "/views/study.html")
})
.get('/give-classes',(req,res) =>{
    return res.sendFile(__dirname + "/views/give-classes.html")
})
.get('/',(req,res) =>{
    return res.sendFile(__dirname + "/views/index.html")
})
.listen(5500)
