const shakespeareApi = 'https://api.graph.cool/simple/v1/shakespeare';

let options = ()=> {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  //The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
  body: JSON.stringify({})
};

function randomIt(min,max){
    //The Math.ceil() function returns the smallest integer greater than or equal to a given number.
    //Note: Math.ceil(null) returns integer 0 and does not give a NaN error.
    min=Math.ceil(min);
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    //Note: Math.floor(null) returns 0, not a NaN error.
    max=Math.floor(max);

    return Math.floor(Math.random()*(max-min+1))+min
}
