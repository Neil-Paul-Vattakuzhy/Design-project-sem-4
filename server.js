const express = require('express')

const app = express()
 
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html',function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log('recieved')
    }
  });
});



app.post('/login',(req,res)=>{
  res.send('poda naari')
});
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});