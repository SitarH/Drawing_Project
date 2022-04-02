const express = require('express');

const axios = require('axios')

const PORT = process.env.PORT || 5005;

const server = express();

server.get('/', (req, res) => {
    res.json('hi')
})

// server.get('/data', (req, res) => {
//     const options = {
//         method: 'GET',
//         params: {word: 'bla'},
//         headers: {'Content-Type': 'application/json'}
//       }
    
//       axios.request(options).then((response) =>{
//           res.json(response.data)
//           console.log(response.data)
        
//       }).catch((err) =>{
//           console.error(err)
//       })
// })






server.listen(PORT, ()=> {console.log(`http://localhost:${PORT}`)});


