const shakespeareApi = 'https://api.graph.cool/simple/v1/shakespeare';

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  //The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
  body: JSON.stringify({})
};
