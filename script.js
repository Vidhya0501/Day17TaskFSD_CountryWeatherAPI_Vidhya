//Fetch Countries Data

var div1=document.createElement("div");
div1.setAttribute("class","container");
var head=document.createElement("h1");
head.setAttribute("id","title");
head.setAttribute("class","text-center");
head.innerText="*************** WEATHER APP ***************";
div1.append(head);
const res = fetch("https://restcountries.com/v3.1/all");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
    var city=data1[i].capital;
      const div = document.createElement("div");
      div.innerHTML = `<div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card h-100" style="width: 18rem;">
                <div class="card-header">${data1[i].name.common}</div>
                <img src="${data1[i].flags.png}" class="card-img-top p-2" alt="flag-image">
                    <div class="card-body p-1">
                        
                        <div class="card-text p-1">Capital: ${data1[i].capital}</div>
                        <div class="card-text p-1">Country code: ${data1[i].cca2}</div>
                        <div class="card-text p-1">Latitude: ${data1[i].latlng[0]}</div>
                        <div class="card-text p-1">Longitude: ${data1[i].latlng[1]}</div>
                        
                        <button class="btn btn-primary m-2" onclick="getWeather('${city}')">Click for weather</button>
                        
                    </div>
            </div>
        </div>
        </div>`;
        div1.append(div);
      document.body.append(div1);

    }
    

  });

  //Fetch Weather Details
  function getWeather(city){
       var res1=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be4f74df092fa7f0423a34aa0a384e0f&units=metric`)
    res1.then(data1=>data1.json())
    .then(data2=>{
    console.log(data2);
    alert("*******************"+"\n"+
          "WEATHER DETAILS"+"\n"+
          "*******************"+"\n"+
          "City: "+data2.name+"\n" +
          "Temperature: "+data2.main.temp+" °c"+"\n"+
          "Humidity: "+data2.main.humidity+"%"+"\n"+
          "Wind: "+data2.wind.speed+" km/h");
  })
  }

 