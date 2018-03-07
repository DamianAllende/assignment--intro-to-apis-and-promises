const request = superagent
const url = "https://restcountries.eu/rest/v2/all"
request
	.get(url)
	.then(function(data){

		let container = document.querySelector(".countries-container")
		let nomPais = data.body
		let pais = ""
		let capital = ""
		let flag = ""
		
		nomPais.forEach(function(element){
			//console.log(element.name)
			let pais = element.name
			let capital = element.capital
			let flag = element.flag
			let country = document.createElement("div")
			country.classList.add("country-card")
			container.appendChild(country)
			let image = document.createElement("img")
			image.classList.add("country-flag")
			image.src = flag
			country.appendChild(image)
			country.appendChild(image)
			let nombre = document.createElement("h4")
			nombre.classList.add("country-name")
			nombre.textContent = pais
			country.appendChild(nombre)
			let capi = document.createElement("p")
			capi.textContent = capital
			capi.classList.add("country-capital")
			country.appendChild(capi)
		})

	})