const express = require('express');
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA(1).json");
const fs = require('fs');
const { useReducer } = require('react');
app.use(express.urlencoded({extended:false}));

app.get('/users',(req,res)=>{
    return res.json(users);
})

// app.get("/api/users/:id", (req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id)
//     return res.json(user);
// })


app.get("/api/users/:email", (req,res)=>{
    const email = (req.params.email);
    const user = users.find((user)=> user.email===email);
    return res.json(user)
});


// app.get("/api/users/:first_name", (req,res)=>{
//     const first_name = (req.params.first_name.toLowerCase())
//     const user = users.find((user => user.first_name.toLowerCase()=== first_name));
//     return res.json(user);
// });


// app.post('/api/users/', (req,res)=>{
//     const body = req.body;
//     console.log(body);
//     users.push({...body,id:users.length + 1});
//     fs.writeFile('./MOCK_DATA(1).json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"success",id:users.length})
//     })
// })

app.put("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json({message:"Succesful"})
});

app.delete("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json({message: "Succesfully deleted"})
});

app.listen(PORT, ()=>{
    console.log(`Server is running in http://localhost:${PORT}`);
})