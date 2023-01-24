var api_url = `https://ophim1.com/phim/cong-tuoc-tu-than-va-co-hau`;
fetch(api_url) 
    .then (function(response) {
        return response.json();
    })
    .then (function (content){ 
        console.log(content.episodes[0].server_data[0].filename)
    })