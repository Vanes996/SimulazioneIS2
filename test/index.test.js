const fetch = require ('node-fetch');
const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:' + PORT;
//const app = express();

const string_square = require('../index')

const teststring = function(string){
   return fetch(SERVER_URL + '/square?string='+string, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
   });
};


test('"1"',()=>{
    return teststring(2)
    .then(res=>{ return res.json()})
    .then(json =>{
      expect(json).toHaveProperty('result');
      expect(typeof json.result).toEqual('number');
      expect(json.result).toBe(1);
    })
});


test('"12"',()=>{
    return teststring(12)
    .then(res=>{ return res.json()})
    .then(json =>{
      expect(json).toHaveProperty('result');
      expect(typeof json.result).toEqual('number');
      expect(json.result).toBe(4);
    })
});
