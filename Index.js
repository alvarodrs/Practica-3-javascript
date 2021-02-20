


var file = []
  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=markets&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "53a4ff5594msh87d2cb70bc4090ep1b6666jsn872e960ad22b",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})

.then(response => {
	return response.json();
})

.then(response => {
    file = response;
    console.log(response);
    updateCartas();
})

.catch(err => {
	console.error(err);
});

function updateCartas()
{
    let html = '';

    file.news.forEach(function(res){ 
        
        html+=  '<div class="col">' +
                    `<div class="card" style="width: 38rem; margin-left:25%; margin-right:20%; margin-top: 2%;">` +
                        `<div class="card-body">`+
                        `<h5 class="card-title">${res.title}</h5>` +
                        `<p class="card-text">${res.publisher}</p>` +
                        `<a href="${res.link}" class="btn btn-primary">Ir a la Noticia</a>`+
                        `</div>`+
                    `</div>`+
                '</div>';
       
    })
    
    document.getElementById("cartas").innerHTML = html;
    return;
}

function buscar()
{
  
    
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${document.getElementById("search-input").value}&region=US`, {
	    "method": "GET",
        "headers": 
        {
            "x-rapidapi-key": "53a4ff5594msh87d2cb70bc4090ep1b6666jsn872e960ad22b",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
	})

    .then(res => {
      return res.json()
    })

    .then(res => {
      console.log(res);
      file = res;
      updateCartas();
    })

    .catch(e => {
      console.error("Error " + e)
    })

   

}