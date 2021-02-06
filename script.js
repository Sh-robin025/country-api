
// countries name with landscape view

// fetch("https://restcountries.eu/rest/v2/all")
//     .then(res => res.json())
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
//             const country = data[i];
//             const countries = document.getElementById("countries");
//             const singleCountry = `
//                 <img src="${country.flag}">
//                 <h2>${country.name}</h2>
//                 <h6>${country.capital}</h6>
//                 <button type='button' class='btn btn-outline-primary'> Know More </button>`;
//             const div = document.createElement("div");
//             div.innerHTML = singleCountry;
//             countries.appendChild(div);
//         }
//     })


fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            const countries = document.getElementById("countries");
            const singleCountry = `
                <img src="${country.flag}">
                <h2>${country.name}</h2>
                <h6>${country.capital}</h6>
                <button onclick = "countryDetails('${country.name}')" type='button' class='btn btn-outline-primary'> Know More </button>`;
            const div = document.createElement("div");
            div.innerHTML = singleCountry;
            countries.appendChild(div);
        });
    })

const countryDetails = name => {
    console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const countryDetails = document.getElementById("countryDetail");
            countryDetails.innerHTML = `
                <img src="${data[0].flag}"
            <div>
                <h2>Name : ${data[0].name}</h2>
                <h4>Capital : ${data[0].capital}</h4>
                <h5>Timezone : ${data[0].timezones[0]}</h5>
                <h6>Area: ${data[0].area} sq.feet</h6>
                <h6>Languages : ${data[0].languages[0].name}</h6>
                <h6>Region : ${data[0].region}</h6>
                <h6>Subregion : ${data[0].subregion}</h6>
                <h6>Population : ${data[0].population} Cr.</h6>
                <h6>Borders : ${data[0].borders}</h6>
            </div>`;
            document.getElementById("countries").style.display = "none";
            console.log(data[0]);
        })
}


// countries name with a table

// fetch("https://restcountries.eu/rest/v2/all")
//     .then(res => res.json())
//     .then(data => {
//         let country = ''
//         for (let i = 0; i < data.length; i++) {
//             const result = data[i];
//             country += "<tr>"
//             country += "<td>" + i + "</td>"
//             country += "<td>" + result.name + "</td>"
//             country += "<td><img src=" + result.flag + "></td>"
//             country += "<td>" + result.capital + "</td>"
//             country += "<td>" + result.region + "</td>"
//             country += "<td><button type='button' class='btn btn-outline-primary'>" + "Know  More" + "</button> </td>"
//             country += "</tr>"
//             console.log(result);
//         }
//         document.getElementById("result").innerHTML = country;
//     })
