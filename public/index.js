const app = function(){
  const url = 'https://restcountries.eu/rest/v2/';
  //
  makeRequest(url, requestComplete)
}

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function () {
  if (this.status !== 200) {
    return;
  }
  const jsonString = this.responseText;
  countries = JSON.parse(jsonString)

  populateList(countries)
}

const populateList = function(countries) {
  const ul = document.querySelector('#country-list')
  countries.forEach(function(country) {

    const liName = document.createElement('li')
    liName.innerText = country.name

    const linebreak = document.createElement("br");

    const liCallingCodes = document.createElement('li')
    liCallingCodes.innerText = country.callingCodes


    ul.appendChild(linebreak);

    ul.appendChild(liName);
    ul.appendChild(liCallingCodes);
  })

}

document.addEventListener('DOMContentLoaded', app);
