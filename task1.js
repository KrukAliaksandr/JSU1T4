let xml = require("xmlhttprequest").XMLHttpRequest
let xhr = new xml()

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET','http://services.groupkt.com/country/get/all', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  console.log( xhr.responseText ); // responseText -- текст ответа.
  let js = JSON.parse(xhr.responseText).RestResponse.result
  console.log(js[3])
}