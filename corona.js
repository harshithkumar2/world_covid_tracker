var active = document.getElementById('tablee');
var btn = document.getElementById('refresh');
window.onload =   function livee() {

    fetch("https://corona.lmao.ninja/v2/countries")
      .then(response => response.json())
      .then((data) =>{
      //  console.log(data);
        data.forEach((result) => {
          var active = document.getElementById('tablee');
          var row = active.insertRow()
          var cel1 = row.insertCell()
          var cel2 = row.insertCell()
          var cel3 = row.insertCell()
          var cel4 = row.insertCell()
          var cel5 = row.insertCell()
          var cel6 = row.insertCell()
          var cel7 = row.insertCell()
          var cel8 = row.insertCell()
          var cel9 = row.insertCell()
          var cel10 = row.insertCell()
          var cel11 = row.insertCell()
          cel1.innerHTML = result.country
          cel2.innerHTML = result.population
          cel3.innerHTML = result.cases+ "       " +     "(" + "⇧" +    +result.todayCases + ")"
          cel4.innerHTML = result.active
          cel5.innerHTML = result.deaths  + "       " +     "(" + "⇧" +    +result.todayDeaths + ")"
          cel6.innerHTML = result.recovered+ "       " +     "(" + "⇧" +    +result.todayRecovered + ")"
          cel7.innerHTML = result.todayCases
          cel8.innerHTML = result.todayDeaths
          cel9.innerHTML = result.todayRecovered
          cel10.innerHTML = result.tests
          cel11.innerHTML = result.continent
        });

      });

  }

  btn.addEventListener('click', () =>{
    location.reload();
  });
