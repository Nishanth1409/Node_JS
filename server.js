const express = require("express");

const app = express();

app.use(express.json());

const PORT = 4000;

const toDoList = ["Nkr", "shubham", "yash", "shubham", "pankaj"]

//Get method
app.get("/todo", (req, res)=>{

  res.status(200).send(toDoList)
  })

  //Post method
  app.post("/todo", (req, res)=>{
    let newname = req.body.name;
    toDoList.push(newname)
    res.status(201).send({
      message: "Data added successfully"
    })
  })

//Delete method
  app.delete("/todo", (req, res)=>{
    const nameToDelete = req.body.name;
    toDoList.find((each, i) => {
      if(each == nameToDelete){
        toDoList.splice(i, 1)
      }
    })
    res.status(202).send({
      message: "Data deleted successfully"
    })
  })

  
//All method
  app.all("/todo", (req, res)=>{
    res.status(405).send({
      message: "Method not allowed"
    })
  })

  app.all("*", (req, res)=>{
    res.status(404).send({
      message: "Page not found"
    })
  })
  
      

  app.listen(PORT, ()=>{
    console.log(`NodeJs server is up and running on port ${PORT}`)
  })



  // http://localhost:4000/todo