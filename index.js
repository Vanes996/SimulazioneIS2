const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.get('/square', async(req,res) =>{
    console.log(req.query.string.length**2);
    let result = await string_square(req.query.string);
    res.status(200).json(result);
});

let server = app.listen(3000, () => console.log('Example app listening on port 3000'));


async function string_square(s) {
  if ((typeof(s)) != "string") {
    return {result: -1}
  }
  else{
    let square = s.length**2;
    return {
      result: square
    }
  }
}
