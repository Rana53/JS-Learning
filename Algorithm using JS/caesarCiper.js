var message = "Aa MessAG XyZ";
var encMessage = '';
var lg = console.log;
// data encryption operation
var encryption = (data, key) => {
  var value;
  for(let i = 0; i < data.length; i++){
    if(data.charAt(i) >= 'A' && data.charAt(i) <= 'Z') {
      value = (data.charCodeAt(i) - 65 + key ) % 26;
      value += 65;
    } 
    else if(data.charAt(i) >= 'a' && data.charAt(i) <= 'z') {
      value = (data.charCodeAt(i) - 97 + key ) % 26;
      value += 97;
    } else {
      value = data.charCodeAt(i);
    }
    encMessage += String.fromCharCode(value);
  }
  lg('Encoded message : ' + encMessage);
}

lg('Original message : ' + message);
encryption(message.toString(),2);