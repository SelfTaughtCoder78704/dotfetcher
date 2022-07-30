// const API_KEY = 'your_api_key'
const API_KEY = '6e0f0f23b372cd807eb896f8239e92223f10aad8'
// const DOTNUM = '1595946'
let dotNum = document.getElementById('dotnum')
let submit = document.getElementById('submit')
let form = document.getElementById('form')
// const DemoURL = `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/greyhound?webKey=${API_KEY}`
// const URL = `https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNum}?webKey=${API_KEY}`
// fetch(URL)
//   .then(response => response.json())
//   .then(data => { console.log(data) })
//   .catch(error => { console.log(error) })

let cont = {}

function getTruckInfo(dot, el) {
  const URL = `https://mobile.fmcsa.dot.gov/qc/services/carriers/${dot}?webKey=${API_KEY}`
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      cont = { ...data }
      el.innerHTML = `<div>${data.content.carrier.legalName}</div>`
    })
    .catch(error => { console.log(error) })
}

submit.addEventListener('click', function (e) {
  e.preventDefault()
  dotNum = dotNum.value
  getTruckInfo(dotNum, form)
})


