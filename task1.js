// import { XMLHttpRequest as xml } from "xmlhttprequest";
let xml = require('xmlhttprequest').XMLHttpRequest;
let xhr = new xml();
xhr.open('GET', 'http://services.groupkt.com/country/get/all', true);
xhr.send();
function getText(){return new Promise((resolve,reject)=>{xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
if (xhr.status != 200) {
  reject(new Errror(xhr.status + ': ' + xhr.statusText));
} else {
  resolve(xhr.responseText);
}
}})};
getText().then((text)=>{
  let js = JSON.parse(text).RestResponse.result
  console.log(js[3])
}).catch()
 
