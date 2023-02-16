function movie_test() {
    var api_url = `https://ophim1.com/phim/violet-evergarden-hoi-uc-khong-quen`;
    fetch(api_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (content) {
            console.log(content.episodes[0].server_data[0].filename)
            console.log(content.episodes[0].server_data[0].link_embed)
            var get_text = document.querySelector("#text_test")
            get_text.innerText = content.episodes[0].server_data[0].filename
            var get_screen = document.querySelector("iframe")
            get_screen.setAttribute("src", content.episodes[0].server_data[0].link_embed)
        })
    return "movie test"
}
