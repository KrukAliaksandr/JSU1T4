/* eslint-disable no-console */
/* eslint-disable indent */
// import { XMLHttpRequest as xml } from "xmlhttprequest";
const rp = require("request-promise-native");

const uri = "http://services.groupkt.com/country/get/all";
const country = "Afganistan";
const isResultAJsonOjbect = true;

let options = {
  uri: uri,
  json: isResultAJsonOjbect 
};

function findCountryFromRestResponse(options){
rp(options)
  .then(function (repos) {
      findCountryByName(repos.RestResponse.result,country);
  })
  .catch(function (error) {
  console.log(error.message);
  });
}

function findCountryByName(responseResult,country){
  console.log(responseResult.find((country)=>
  {
    return country.name;
  }));
}
findCountryFromRestResponse(options);