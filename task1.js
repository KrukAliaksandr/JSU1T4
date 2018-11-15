import { XMLHttpRequest as xml } from "xmlhttprequest";
let xhr = new xml();
xhr.open('GET', 'http://services.groupkt.com/country/get/all', false);
xhr.send();
if (xhr.status != 200) {
  console.log(xhr.status + ': ' + xhr.statusText);
} else {
  console.log(xhr.responseText);
  let js = JSON.parse(xhr.responseText).RestResponse.result
  console.log(js[3])
}