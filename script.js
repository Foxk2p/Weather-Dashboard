document.getElementById('searchWbtn').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('cityInput').value)

  //city weather data:  api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
  // API key:  0f149fa2edb3bffd982cdcae4f76f47f

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById('cityInput').value}&appid=0f149fa2edb3bffd982cdcae4f76f47f`)
    .then(r => r.json())
    .then(wData => {
      console.log(wData)
      let WthrElem = document.createElement('div')
      WthrElem.className = 'card'
      WthrElem.style = 'width: 18rem;'
      WthrElem.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">
                ${wData.city.name}
              </h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Humidity:  ${wData.list[0].main.humidity}
                </li>
              </ul>

            </div>
          `
      // document.getElementById('wData').innerHTML = JSON.stringify(wData.city.name)

      document.getElementById('wData').append(WthrElem)

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

  // : ${ pokemon.stats[0].base_stat }