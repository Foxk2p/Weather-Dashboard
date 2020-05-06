let timer = moment().format('LLLL');
console.log(timer)
document.getElementById('currentDay').innerHTML = `<h6>${timer}</h6>
`

let d0 = moment().add(0, 'days').format('dddd');
console.log(d0)

let d1 = moment().add(1, 'days').format('dddd');
console.log(d1)

let d2 = moment().add(2, 'days').format('dddd');
console.log(d2)

let d3 = moment().add(3, 'days').format('dddd');
console.log(d3)

let d4 = moment().add(4, 'days').format('dddd');
console.log(d4)


document.getElementById('searchWbtn').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('cityInput').value)

  //city weather data:  api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
  // API key:  0f149fa2edb3bffd982cdcae4f76f47f

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById('cityInput').value}&appid=0f149fa2edb3bffd982cdcae4f76f47f`)
    .then(r => r.json())
    .then(wData => {
      console.log(wData)
      let WthrElem = document.createElement('span')
      WthrElem.className = 'card'
      WthrElem.style = 'width: 18rem;'
      WthrElem.innerHTML = `

        <img src="${wData.list[0].weather[0].icon}" class="card-img-top" alt="${wData.city.name}">

    <span class="card-body">
      <h5 class="card-title">
         ${wData.city.name}
      </h5>
      <h6> today: ${d0}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Humidity:  ${wData.list[0].main.humidity}
        </li>
        <li class="list-group-item">
          Condition:  ${wData.list[0].weather[0].main}
        </li>
        <li class="list-group-item">
          Forecast:  ${wData.list[0].weather[0].description}
        </li>
      </ul>
    </span >
      
    <span class="card-body">
      <h5 class="card-title">
         ${wData.city.name}
      </h5>
        <h6> On: ${d1}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Humidity:  ${wData.list[8].main.humidity}
        </li>
        <li class="list-group-item">
          Condition:  ${wData.list[8].weather[0].main}
        </li>
        <li class="list-group-item">
          Forecast:  ${wData.list[8].weather[0].description}
        </li>
      </ul>
    </span >

    <span class="card-body">
      <h5 class="card-title">
         ${wData.city.name}
      </h5>
        <h6> On: ${d2}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Humidity:  ${wData.list[16].main.humidity}
        </li>
        <li class="list-group-item">
          Condition:  ${wData.list[16].weather[0].main}
        </li>
        <li class="list-group-item">
          Forecast:  ${wData.list[16].weather[0].description}
        </li>
      </ul>
    </span >

    <span class="card-body">
      <h5 class="card-title">
         ${wData.city.name}
      </h5>
        <h6> On: ${d3}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Humidity:  ${wData.list[24].main.humidity}
        </li>
        <li class="list-group-item">
          Condition:  ${wData.list[24].weather[0].main}
        </li>
        <li class="list-group-item">
          Forecast:  ${wData.list[24].weather[0].description}
        </li>
      </ul>
    </span >

    <span class="card-body">
      <h5 class="card-title">
         ${wData.city.name}
      </h5>
        <h6> On: ${d4}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Humidity:  ${wData.list[32].main.humidity}
        </li>
        <li class="list-group-item">
          Condition:  ${wData.list[32].weather[0].main}
        </li>
        <li class="list-group-item">
          Forecast:  ${wData.list[32].weather[0].description}
        </li>
      </ul>
    </span >
      `
      // document.getElementById('wData').innerHTML = JSON.stringify(wData.city.name)

      document.getElementById('wDataV').append(WthrElem)

    })
    .catch(e => console.log(e))
})

  // (WthrElem)
  // console.log(wData.city.name)  e.g. of object data drilling

// document.getElementById('wData').append(WthrElem)

  // < div class="card-body" >
  //   <h5 class="card-title">
  //     ${cityInput}
  //   </h5>

  // : ${ pokemon.stats[0].base_stat}