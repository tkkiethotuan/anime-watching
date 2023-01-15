// check mobile or pc
var isMobile = false
var widthSize = window.matchMedia("(max-width:1023px)")
if (widthSize.matches) {
    console.log("Mobile")
    var isMobile = true
}
else {
    console.log("PC")
    var isMobile = false
}


// your name
function your_name()
{
    var tap = 'full'
    var getLink = `https://1080.hdphimonline.com/share/4d6b3e38b952600251ee92fe603170ff`
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(".movie-screen")

    if (isMobile == false) {
        getBtn[0].className = `btn btn-success .btn-controller-${tap} active`
        getMovieScreen[0].setAttribute("src", getLink)
    }
    else if (isMobile == true) {
        getBtn[1].className = `btn btn-success .btn-controller-${tap} active`
        getMovieScreen[1].setAttribute("src", getLink)
    }
    
}

// that nghiep chuyen sinh

var api_that_nghiep_chuyen_sinh = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-06-09T07:42:10.000Z"},"_id":"62a1a4527a956fb5db03006b","name":"Thất Nghiệp Chuyển Sinh 1 - Part 1","origin_name":"Mushoku Tensei: Jobless Reincarnation","content":"<p>Một vụ tai nạn ô tô đã cướp đi sinh mạng của một thanh niên 34 tuổi thất nghiệp. Khi tỉnh dậy lần nữa, anh bị sốc khi biết mình đã xuyên không sang một thế giới khác và chiếm hữu trong tay một vị chủ nhân trẻ tuổi cao quý tên là Rudius. Trước cơ hội được Thần Định mệnh trao cho mình, người đàn ông thề rằng anh ta phải thể hiện một số khả năng thực sự để có một cuộc sống tốt đẹp trong cuộc sống này. Tuy nhiên, dù Rudius có quyết tâm cao như vậy nhưng bản chất của Uncle Slacker vẫn không ít lần bị phơi bày.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/that-nghiep-chuyen-sinh-1-part-1-thumb.jpg","poster_url":"http://img.ophim1.cc/uploads/movies/that-nghiep-chuyen-sinh-1-part-1-poster.jpg","is_copyright":"off","sub_docquyen":"off","chieurap":false,"trailer_url":"","time":"24 phút/tập","episode_current":"Hoàn Tất (24/24)","episode_total":"24 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"that-nghiep-chuyen-sinh-1-part-1","year":2021,"actor":[""],"director":[""],"category":[{"name":"Hài Hước"},{"name":"Viễn Tưởng"},{"name":"Phiêu Lưu"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}]},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"01","slug":"01","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-01","link_embed":"https://aa.nguonphimmoi.com/share/0d1f9ed41c577b9ad97ebe248806ca70","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17621_8a3cdb75/index.m3u8"},{"name":"02","slug":"02","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-02","link_embed":"https://aa.nguonphimmoi.com/share/6a62253c673325a7be239b84a9f879d2","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17622_61dde29a/index.m3u8"},{"name":"03","slug":"03","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-03","link_embed":"https://aa.nguonphimmoi.com/share/616996895f8fbde61cf176ee9e7aecfd","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17623_f90e286a/index.m3u8"},{"name":"04","slug":"04","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-04","link_embed":"https://aa.nguonphimmoi.com/share/840e533271f836f24bfa8d33ddb87211","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17624_e327b351/index.m3u8"},{"name":"05","slug":"05","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-05","link_embed":"https://aa.nguonphimmoi.com/share/2cd2e570d324ece8ff21b15d1fbe3db3","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17625_6ed990aa/index.m3u8"},{"name":"06","slug":"06","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-06","link_embed":"https://aa.nguonphimmoi.com/share/5c9d54bf8c2ade6c7ad0bafd578e5f09","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17626_26dc9619/index.m3u8"},{"name":"07","slug":"07","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-07","link_embed":"https://aa.nguonphimmoi.com/share/57696f4c6d8a92b1eb18308677a59ca2","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17627_b475f9dc/index.m3u8"},{"name":"08","slug":"08","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-08","link_embed":"https://aa.nguonphimmoi.com/share/60aaa4b2fc3fcf6a41c454149ab76592","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17628_6b161e6d/index.m3u8"},{"name":"09","slug":"09","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-09","link_embed":"https://aa.nguonphimmoi.com/share/b497033de877534e7f783d78c2b78fb6","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17629_d0c81f27/index.m3u8"},{"name":"10","slug":"10","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-10","link_embed":"https://aa.nguonphimmoi.com/share/1789250aaf0335d750de2acf2faa707d","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17630_973a3433/index.m3u8"},{"name":"11","slug":"11","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-11","link_embed":"https://aa.nguonphimmoi.com/share/3e33f40836bd425bbdf92b71cc707cee","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17631_5b108cc8/index.m3u8"},{"name":"12","slug":"12","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-12","link_embed":"https://aa.nguonphimmoi.com/share/ac29e4f3b0ca96436d431a0ae7746ce7","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17632_061ee642/index.m3u8"},{"name":"13","slug":"13","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-13","link_embed":"https://aa.nguonphimmoi.com/share/ef58947dc33e8fc85af0f246352112f7","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17633_3adfe586/index.m3u8"},{"name":"14","slug":"14","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-14","link_embed":"https://aa.nguonphimmoi.com/share/a2ec35c98a4e9f66f3fb3416a1995762","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17634_e1d88079/index.m3u8"},{"name":"15","slug":"15","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-15","link_embed":"https://aa.nguonphimmoi.com/share/8e9122fa7ac8483b423d3c591d9972a1","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17635_f9a5aeb3/index.m3u8"},{"name":"16","slug":"16","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-16","link_embed":"https://aa.nguonphimmoi.com/share/5460f9517da5575f9b99baca6b56628e","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17636_3742deb6/index.m3u8"},{"name":"17","slug":"17","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-17","link_embed":"https://aa.nguonphimmoi.com/share/01991b6bec4ceacaf9fd8748b7fa0698","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17637_e45ac783/index.m3u8"},{"name":"18","slug":"18","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-18","link_embed":"https://aa.nguonphimmoi.com/share/4ab35559cc92240547c18e228f234484","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17638_800f59e3/index.m3u8"},{"name":"19","slug":"19","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-19","link_embed":"https://aa.nguonphimmoi.com/share/87d2df31d91c857ffb1a3d5caf45f766","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17639_c0d3fb26/index.m3u8"},{"name":"20","slug":"20","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-20","link_embed":"https://aa.nguonphimmoi.com/share/06dea2c13dd7f20a509f3d4d411c2591","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17640_d32e138f/index.m3u8"},{"name":"21","slug":"21","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-21","link_embed":"https://aa.nguonphimmoi.com/share/e49d6912cc703f6e84c19a3a58492b9f","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17641_2f8a941c/index.m3u8"},{"name":"22","slug":"22","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-22","link_embed":"https://aa.nguonphimmoi.com/share/21476eebfe7a3e15bee9713c94b8a6c4","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17642_f03dbbe0/index.m3u8"},{"name":"23","slug":"23","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-23","link_embed":"https://aa.nguonphimmoi.com/share/0e9f1b15c7f9b9f6a72a4e9a51b35862","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17643_a25cfcae/index.m3u8"},{"name":"24","slug":"24","filename":"Mushoku-Tensei-Jobless-Reincarnation-tap-24","link_embed":"https://aa.nguonphimmoi.com/share/66b8d6392a59b5ce703c28340d8b3565","link_m3u8":"https://aa.nguonphimmoi.com/20220608/17644_6f09c049/index.m3u8"}]}]}`

var api_that_nghiep_chuyen_sinh_parse = JSON.parse(api_that_nghiep_chuyen_sinh)

function that_nghiep_chuyen_sinh_p1_t1()
{
    var tap = 1;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t2()
{
    var tap = 2;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t3()
{
    var tap = 3;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t4()
{
    var tap = 4;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t5()
{
    var tap = 5;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t6()
{
    var tap = 6;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t7()
{
    var tap = 7;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t8()
{
    var tap = 8;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t9()
{
    var tap = 9;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t10()
{
    var tap = 10;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t11()
{
    var tap = 11;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t12()
{
    var tap = 12;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t13()
{
    var tap = 13;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t14()
{
    var tap = 14;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t15()
{
    var tap = 15;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t16()
{
    var tap = 16;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t17()
{
    var tap = 17;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t18()
{
    var tap = 18;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t19()
{
    var tap = 19;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t20()
{
    var tap = 20;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t21()
{
    var tap = 21;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t22()
{
    var tap = 22;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t23()
{
    var tap = 23;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function that_nghiep_chuyen_sinh_p1_t24()
{
    var tap = 24;
    var getTap = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].name
    var getLink = api_that_nghiep_chuyen_sinh_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// nang noi loan x chang tho may

var api_nang_noi_loan_x_chang_tho_may = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-05-15T21:14:40.000Z"},"_id":"62557c83b89e109508092341","name":"Nàng Nổi Loạn X Chàng Thợ May","origin_name":"My Dress-Up Darling, Sono Kisekae Ningyou wa Koi wo Suru","content":"<p>Gojou Wakana là một cậu trai 15 tuổi, bị sang chấn tâm lí trong quá khứ do niềm đam mê của mình. Sự cố đó đã khiến cậu trở thành một người ẩn dật xã hội. Cho đến một ngày, cậu đã gặp phải Kitagawa Marin, một cô nàng cá tính hòa đồng, hoàn toàn trái ngược với cậu. Với niềm đam mê cosplay của nàng, liệu cậu có kham nổi công chúa sexy này chăng?</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/nang-noi-loan-x-chang-tho-may-thumb.jpg","is_copyright":"off","trailer_url":"https://www.youtube.com/watch?v=hbtyjcPaGp4","time":"25 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"nang-noi-loan-x-chang-tho-may","year":2022,"actor":[""],"director":[""],"category":[{"name":"Tình Cảm"},{"name":"Hài Hước"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/nang-noi-loan-x-chang-tho-may-poster.jpg","sub_docquyen":"off"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 1 - Có người sống trong thế giới đối lập với tôi","link_embed":"https://aa.nguonphimmoi.com/share/253d812cbfbb77c03b910f9897e9487d","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10095_429a2c08/index.m3u8"},{"name":"2","slug":"2","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 2 - Làm ngay và luôn nhỉ?","link_embed":"https://aa.nguonphimmoi.com/share/ee4117572afbc0cf760f70714af0ec52","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10096_95861f35/index.m3u8"},{"name":"3","slug":"3","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 3 - Vậy, cặp bồ luôn ha?","link_embed":"https://aa.nguonphimmoi.com/share/23b702c4c421ddb2d023fee968c0d839","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10097_bae76406/index.m3u8"},{"name":"4","slug":"4","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 4 - Cái này, của cô ấy chăng?","link_embed":"https://aa.nguonphimmoi.com/share/c876914f82ce54cb533b186afd41166e","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10098_c860f81b/index.m3u8"},{"name":"5","slug":"5","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 5 - Vì đây là bó ngực tốt nhất trong này còn gì?","link_embed":"https://aa.nguonphimmoi.com/share/995ca733e3657ff9f5f3c823d73371e1","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10099_ae1f30da/index.m3u8"},{"name":"6","slug":"6","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 6 - Ma!?","link_embed":"https://aa.nguonphimmoi.com/share/ac2d43ef3f26cc74de242202e822ecb0","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10100_5cd271b9/index.m3u8"},{"name":"7","slug":"7","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 7 - Bồ bịch hẹn hò ở nhà đã ghê!","link_embed":"https://aa.nguonphimmoi.com/share/6dfc35c47756e962ef055d1049f1f8ec","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10101_2ff7a8ee/index.m3u8"},{"name":"8","slug":"8","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 8 - Ngược sáng, đề xuất đó!","link_embed":"https://aa.nguonphimmoi.com/share/696b0709b9a2d7d9e2c25b71476ec255","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10102_15ffa0ac/index.m3u8"},{"name":"9","slug":"9","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 9 - Vì xem ảnh xong, xảy ra nhiều chuyện lắm!","link_embed":"https://aa.nguonphimmoi.com/share/f53eb4122d5e2ce81a12093f8f9ce922","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10103_70973b20/index.m3u8"},{"name":"10","slug":"10","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 10 - Bất kì ai cũng có nhiều chuyện","link_embed":"https://aa.nguonphimmoi.com/share/abf0931987f2f8eb7a8d26f2c21fe172","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10104_b8f50310/index.m3u8"},{"name":"11","slug":"11","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 11 - Cháu hiện giờ đang ở khách sạn tình yêu","link_embed":"https://aa.nguonphimmoi.com/share/4c0a7bdd46ceb88d497eec5de360328e","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10105_01723323/index.m3u8"},{"name":"12","slug":"12","filename":"Nàng Nổi Loạn X Chàng Thợ May Tập 12 - Nàng búp bê thử đồ biết yêu","link_embed":"https://aa.nguonphimmoi.com/share/74105d373a71b517ed650caabb9c2cb8","link_m3u8":"https://aa.nguonphimmoi.com/20220412/10106_267ae33b/index.m3u8"}]}]}`

var api_nang_noi_loan_x_chang_tho_may_parse = JSON.parse(api_nang_noi_loan_x_chang_tho_may)

function nang_noi_loan_x_chang_tho_may_p1_t1()
{
    var tap = 1;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t2()
{
    var tap = 2;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t3()
{
    var tap = 3;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t4()
{
    var tap = 4;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t5()
{
    var tap = 5;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t6()
{
    var tap = 6;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t7()
{
    var tap = 7;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t8()
{
    var tap = 8;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t9()
{
    var tap = 9;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t10()
{
    var tap = 10;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t11()
{
    var tap = 11;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function nang_noi_loan_x_chang_tho_may_p1_t12()
{
    var tap = 12;
    var getTap = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].name
    var getLink = api_nang_noi_loan_x_chang_tho_may_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// Kaguya-sama wa Kokurasetai: Ultra Romantic

var api_kaguya_sama_wa_kokurasetai_ultra_romantic = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-07-02T02:48:49.000Z"},"_id":"6267c717489068f643a25c8a","name":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic","origin_name":"Kaguya-sama wa Kokurasetai: Tensai-tachi no Ren'ai Zunousen - Ultra Romantic","content":"<p>Tiếp nối mùa 2, câu chuyện xoay quanh tình yêu giữa Shinomiya Kaguya và Shirogane Miyuki và những người xung quanh. Cuộc đấu trí để ép đối phương tỏ tình giữa hai thiên tài mang tới những giây phút lãng mạng và vài hiểu lầm hài hước.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/kaguya-sama-cuoc-chien-to-tinh-ultra-romantic-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=63EGIGCxhYI","time":"25 phút/tập","episode_current":"Hoàn Tất (13/13)","episode_total":"13 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"kaguya-sama-cuoc-chien-to-tinh-ultra-romantic","year":2022,"actor":[""],"director":[""],"category":[{"name":"Hài Hước"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/kaguya-sama-cuoc-chien-to-tinh-ultra-romantic-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 1 - Iino Miko muốn được thư giãn. Kaguya-sama không nhận ra. Fujiwara Chika muốn chiến đấu.","link_embed":"https://hd.1080phim.com/share/672cf3025399742b1a047c8dc6b1e992","link_m3u8":"https://hd.1080phim.com/20220426/8615_88cdfd01/index.m3u8"},{"name":"2","slug":"2","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 2 - Shirogane muốn giảng hòa - Kaguya-sama muốn đưa hội trưởng ra - Kaguya-sama muốn cản trở","link_embed":"https://hd.1080phim.com/share/64517d8435994992e682b3e4aa0a0661","link_m3u8":"https://hd.1080phim.com/20220426/8621_59463c2c/index.m3u8"},{"name":"3","slug":"3","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 3 - Kashiwagi Nagisa muốn định tội - Shijou Maki muốn làm gì đó - Shirogane muốn được tin tưởng","link_embed":"https://hd.1080phim.com/share/ea4b47f29f0030a6162b40662ff91c70","link_m3u8":"https://hd.1080phim.com/20220426/8616_cd06dc87/index.m3u8"},{"name":"4","slug":"4","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 4 - Thử thách khó khăn của Kaguya-sama, vỏ ốc của chim én (Phần một) - Ishigami muốn đáp lại - Fujiwara","link_embed":"https://kd.hd-bophim.com/share/70431e77d378d760c3c5456519f06efe","link_m3u8":"https://kd.hd-bophim.com/20220506/11059_3586d75b/index.m3u8"},{"name":"5","slug":"5","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 5 - Fujiwara Chika muốn khắc ghi - Hayasaka Ai muốn trò chuyện - Shijou Maki muốn dựa dẫm","link_embed":"https://kd.hd-bophim.com/share/37c691988cb0a6f0fdc8cc41f6ede4f1","link_m3u8":"https://kd.hd-bophim.com/20220506/11060_03e44b3d/index.m3u8"},{"name":"6","slug":"6","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 6 - Hội học sinh muốn tiến bước - Shirogane Miyuki muốn khiến đối phương tỏ tình 2 - Shirogane Miyuki mu","link_embed":"https://kd.hd-bophim.com/share/7818e42b0e7cbc2af4feed7bcfb238d4","link_m3u8":"https://kd.hd-bophim.com/20220514/11896_8c2c48ba/index.m3u8"},{"name":"7","slug":"7","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 7 - Iino Miko không để ai yêu 1 - Muốn kể về lễ hội văn hóa - Shirogane Miyuki muốn thổi phồng","link_embed":"https://kd.hd-bophim.com/share/35fcfa9e4c022b77e94c0c09a10690c8","link_m3u8":"https://kd.hd-bophim.com/20220521/12297_9d6fa5a1/index.m3u8"},{"name":"8","slug":"8","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 8 - Shirogane Kei muốn khoe khoang - Chuyện về Shinomiya Kaguya 2 - Kaguya-sama muốn tỏ tình","link_embed":"https://kd.hd-bophim.com/share/0d3350e2519bca2aa09823ebbfd3d5ed","link_m3u8":"https://kd.hd-bophim.com/20220527/12905_25846785/index.m3u8"},{"name":"9","slug":"9","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 9 - Mùa xuân của học sinh năm nhất - Lễ hội văn hóa của Kaguya-sama - Lễ hội văn hóa của Ishigami Yuu","link_embed":"https://kd.hd-bophim.com/share/065982e894fcde21153454b2ea4b2a8a","link_m3u8":"https://kd.hd-bophim.com/20220604/13431_9e140630/index.m3u8"},{"name":"10","slug":"10","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 10 - Maihara Kozue muốn chơi đùa - Fujiwara Chika muốn phá đám - Lễ hội văn hóa của Shirogane Miyuki","link_embed":"https://kd.hd-bophim.com/share/4132e96a90534adcb9ecdc09e73d10d7","link_m3u8":"https://kd.hd-bophim.com/20220610/13933_0217ea29/index.m3u8"},{"name":"11","slug":"11","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 11 - Shirogane Miyuki muốn khiến đối phương tỏ tình 4 - Koyasu Tsubame muốn từ chối - Shirogane Miyuki mu","link_embed":"https://kd.hd-bophim.com/share/544a66d5696a6e07b69dc8df98d6f825","link_m3u8":"https://kd.hd-bophim.com/20220617/14828_8b64855f/index.m3u8"},{"name":"12","slug":"12","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 12 - Kaguya-sama muốn tỏ tình 2 - Kaguya-sama muốn tỏ tình 3 - Hai lời tỏ tình - Phần đầu","link_embed":"https://kd.hd-bophim.com/share/5ff37811dd20fbf31dc7b9abf72a9754","link_m3u8":"https://kd.hd-bophim.com/20220625/15652_bdb1c76f/index.m3u8"},{"name":"13","slug":"13","filename":"Kaguya-sama: Cuộc Chiến Tỏ Tình - Ultra Romantic Tập 13 - Hai lời tỏ tình - Phần sau - Shuuchiin đêm lễ hội","link_embed":"https://kd.hd-bophim.com/share/118cb34246732bc8a609b09ab8221c4d","link_m3u8":"https://kd.hd-bophim.com/20220625/15653_5f7bf598/index.m3u8"}]}]}`
var api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse = JSON.parse(api_kaguya_sama_wa_kokurasetai_ultra_romantic)

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t1()
{
    var tap = 1;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t2()
{
    var tap = 2;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t3()
{
    var tap = 3;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t4()
{
    var tap = 4;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t5()
{
    var tap = 5;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t6()
{
    var tap = 6;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t7()
{
    var tap = 7;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t8()
{
    var tap = 8;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t9()
{
    var tap = 9;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t10()
{
    var tap = 10;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t11()
{
    var tap = 11;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t12()
{
    var tap = 12;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function kaguya_sama_wa_kokurasetai_ultra_romantic_p1_t13()
{
    var tap = 13;
    var getTap = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].name
    var getLink = api_kaguya_sama_wa_kokurasetai_ultra_romantic_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// hiep si xuong tren duong du hanh den the gioi khac - m005

var m005_api = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-11-10T20:54:45.000Z"},"_id":"625af497941a26e421dc0d57","name":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác","origin_name":"Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu, Skeleton Knight in Another World","content":"<p>Khi vừa tỉnh dậy, Arc thấy mình đang ở một thế giới khác cùng với ngoại hình giống như nhân vật game mà anh ta đang dùng. Diện mạo của anh ấy lúc này là một hiệp sĩ xương khoác lên bộ giáp trụ trắng sáng. Nếu cơ thể bị bại lộ, rất có thể mọi người sẽ xem anh như quái vật mất, cho nên Arc quyết định sẽ du hành và che giấu cơ thể của mình. Dù vậy, anh ấy cũng không phải loại người có thể bỏ qua những điều thị phi xảy ra ngay trước mắt. Cuộc du hành ở thế giới khác, ta tới đây!</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/hiep-si-xuong-tren-duong-du-hanh-den-the-gioi-khac-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=bKceV3riiL8","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"hiep-si-xuong-tren-duong-du-hanh-den-the-gioi-khac","year":2022,"actor":[""],"director":[""],"category":[{"name":"Hài Hước"},{"name":"Phiêu Lưu"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/hiep-si-xuong-tren-duong-du-hanh-den-the-gioi-khac-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 1 - Hiệp sĩ lang thang du hành khắp thế gianTập 1","link_embed":"https://hd.hdbophim.com/share/4490759a6b69ecb7c170d8e1476be569","link_m3u8":"https://hd.hdbophim.com/20221110/25692_2788df4b/index.m3u8"},{"name":"2","slug":"2","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 2 - Công việc đầu tiên - Lời thỉnh cầu từ thiếu nữ và sự tiếp cận của cái bóng","link_embed":"https://hd.1080phim.com/share/b207f5c56605a9d1a22e1e134fe95ba9","link_m3u8":"https://hd.1080phim.com/20220416/4185_1eacf648/index.m3u8"},{"name":"3","slug":"3","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 3 - Nàng Elf dũng cảm vì đồng bào","link_embed":"https://hd.1080phim.com/share/8576a5108a045a711b0927e2408d4b34","link_m3u8":"https://hd.1080phim.com/20220427/9236_b355f480/index.m3u8"},{"name":"4","slug":"4","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 4 - Xâm nhập nơi buôn bán nô lệ, truy tìm cái ác tồn tại trên thế giới","link_embed":"https://hd.1080phim.com/share/b8f36d2dffddf18ae2ff15d71c9eb62d","link_m3u8":"https://hd.1080phim.com/20220429/9850_f3df2186/index.m3u8"},{"name":"5","slug":"5","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 5 - Bí mật sáng tỏ và mối liên kết được hình thành","link_embed":"https://kd.hd-bophim.com/share/b0a4fed42fc9723fc5ef166da6e25614","link_m3u8":"https://kd.hd-bophim.com/20220505/11005_119212bc/index.m3u8"},{"name":"6","slug":"6","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 6 - Cảm nhận sự tăm tối của dị giới tại vùng đất Elf","link_embed":"https://kd.hd-bophim.com/share/f1a706591e15f81814fac5184b29e7b5","link_m3u8":"https://kd.hd-bophim.com/20220513/11675_954fcbd4/index.m3u8"},{"name":"7","slug":"7","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 7 - Kỳ tích đến với cô công chúa hay mộng mơ","link_embed":"https://kd.hd-bophim.com/share/2fc4a68635c26db1019047965180ce1b","link_m3u8":"https://kd.hd-bophim.com/20220520/12234_d5fa649e/index.m3u8"},{"name":"8","slug":"8","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 8 - Cùng chiến đấu! Trải qua đêm tối cùng bằng hữu Người Thú","link_embed":"https://kd.hd-bophim.com/share/410a0338f4f2038cfa92723d64c52900","link_m3u8":"https://kd.hd-bophim.com/20220527/12817_4dd5d087/index.m3u8"},{"name":"9","slug":"9","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 9 - Vương đô lay chuyển và lời hứa của người con gái","link_embed":"https://kd.hd-bophim.com/share/eb61c2b1b1bf5d25c86da9fceef54538","link_m3u8":"https://kd.hd-bophim.com/20220602/13247_1093a848/index.m3u8"},{"name":"10","slug":"10","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 10 - Ánh sáng hi vọng tới ngày mai tìm thấy tại sa mạc","link_embed":"https://kd.hd-bophim.com/share/a84f33ae6490fe0c1335b1b5180d92fa","link_m3u8":"https://kd.hd-bophim.com/20220609/13798_70af8a36/index.m3u8"},{"name":"11","slug":"11","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 11 - Tiếng cười man rợ trong bóng đêm từ kẻ sử dụng ma thú của man tộc","link_embed":"https://kd.hd-bophim.com/share/60430f4a984aa0a534e027339a7580a7","link_m3u8":"https://kd.hd-bophim.com/20220617/14738_d515eee5/index.m3u8"},{"name":"12","slug":"12","filename":"Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác Tập 12 - Chém bỏ cái ác tại dị giới","link_embed":"https://kd.hd-bophim.com/share/358164500fe22f226f1f07cac73a8288","link_m3u8":"https://kd.hd-bophim.com/20220623/15367_4aa045e8/index.m3u8"}]}]}`
var m005_api_parse = JSON.parse(m005_api)

function m005_p1_t1()
{
    var tap = 1;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t2()
{
    var tap = 2;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t3()
{
    var tap = 3;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t4()
{
    var tap = 4;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t5()
{
    var tap = 5;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t6()
{
    var tap = 6;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t7()
{
    var tap = 7;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t8()
{
    var tap = 8;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t9()
{
    var tap = 9;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t10()
{
    var tap = 10;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t11()
{
    var tap = 11;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m005_p1_t12()
{
    var tap = 12;
    var getTap = m005_api_parse.episodes[0].server_data[tap-1].name
    var getLink = m005_api_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// date a live IV

var api_m006 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-07-02T02:49:05.000Z"},"_id":"6266b4a1489068f643a209bb","name":"Date A Live IV","origin_name":"デート・ア・ライブ　4期","content":"<p>Phần 4 của loạt anime Date A Live. Tinh linh thứ chín (thực ra là thứ hai) Honjou Nia sở hữu một cuốn sách (hay cũng chính là thiên sứ của cô) tên Rasiel cho phép cô có được thông tin về bất cứ điều gì từng xảy ra trên thế giới, bất kể địa điểm hay thời gian. Nhờ khả năng này, Nia khám phá ra sự thật về nguồn gốc của chính mình, cũng như biết được mọi thứ về những người cô gặp, kể cả động cơ hay ác ý bên trong họ. Mất niềm tin vào nhân loại, Nia rơi vào tình yêu với thế giới manga và trò chơi điện tử. Cô trở thành mangaka, tự cô lập bản thân, giấu mình sau một lớp mặt nạ và vờ như mọi người chỉ là NPC trong một trò chơi. Cô đã bị DEM phát hiện ra là Tinh linh và cử Ellen Mira Mathers đến bắt sống.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/date-a-live-iv-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=uSXCh3Ha1UY","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"date-a-live-iv","year":2022,"actor":[""],"director":[""],"category":[{"name":"Hành Động"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/date-a-live-iv-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Date A Live IV Tập 1 - Đừng vội. Đây là bẫy của tinh linh","link_embed":"https://kd.hd-bophim.com/share/e17a5a399de92e1d01a56c50afb2a68e","link_m3u8":"https://kd.hd-bophim.com/20220424/9632_c5fe990b/index.m3u8"},{"name":"2","slug":"2","filename":"Date A Live IV Tập 2 - Tốt lắm, đến giờ của 2D rồi","link_embed":"https://kd.hd-bophim.com/share/8ea284a28ff5a7e227709c23200d5e11","link_m3u8":"https://kd.hd-bophim.com/20220424/9633_31696a33/index.m3u8"},{"name":"3","slug":"3","filename":"Date A Live IV Tập 3 - Của bạn là của tôi","link_embed":"https://kd.hd-bophim.com/share/ebe922af8d4560c73368a88eeac07d16","link_m3u8":"https://kd.hd-bophim.com/20220424/9634_51d4f097/index.m3u8"},{"name":"4","slug":"4","filename":"Date A Live IV Tập 4 - Tinh linh của bầu trời","link_embed":"https://hd.1080phim.com/share/fef98f01e3e52383bec61a7136d4ecb9","link_m3u8":"https://hd.1080phim.com/20220501/10425_3b64b133/index.m3u8"},{"name":"5","slug":"5","filename":"Date A Live IV Tập 5 - Truyện cổ tích","link_embed":"https://kd.hd-bophim.com/share/ddd65013f9f3507850f6bd4b5a68f901","link_m3u8":"https://kd.hd-bophim.com/20220506/11058_72ee9efb/index.m3u8"},{"name":"6","slug":"6","filename":"Date A Live IV Tập 6 - Trái tim được mở khoá","link_embed":"https://kd.hd-bophim.com/share/3a97a9a154f2f62638393446815456fd","link_m3u8":"https://kd.hd-bophim.com/20220513/11732_5bb63ea6/index.m3u8"},{"name":"7","slug":"7","filename":"Date A Live IV Tập 7 - Kí ức bị đóng kín","link_embed":"https://kd.hd-bophim.com/share/f1e03cc77d4bbd6bc2cf358dbcb7ed00","link_m3u8":"https://kd.hd-bophim.com/20220521/12295_938c12c9/index.m3u8"},{"name":"8","slug":"8","filename":"Date A Live IV Tập 8 - Khóa và kiếm","link_embed":"https://kd.hd-bophim.com/share/ef0e27f5a8bf73583a680da7f20ef5e9","link_m3u8":"https://kd.hd-bophim.com/20220527/12904_59551d43/index.m3u8"},{"name":"9","slug":"9","filename":"Date A Live IV Tập 9 - Sự cám dỗ của ác mộng","link_embed":"https://kd.hd-bophim.com/share/e2e1cbe72ab1192e395c35295763982a","link_m3u8":"https://kd.hd-bophim.com/20220603/13380_d538dcaf/index.m3u8"},{"name":"10","slug":"10","filename":"Date A Live IV Tập 10 - Thời khắc của thiếu nữ","link_embed":"https://kd.hd-bophim.com/share/f29e862f7307c4eb635b0bb98fdbaf60","link_m3u8":"https://kd.hd-bophim.com/20220610/13932_60efdf0b/index.m3u8"},{"name":"11","slug":"11","filename":"Date A Live IV Tập 11 - Tội lỗi trong quá khứ","link_embed":"https://kd.hd-bophim.com/share/fb50ef2594daff9dd6322cbb5489bcbc","link_m3u8":"https://kd.hd-bophim.com/20220617/14827_a42f07e2/index.m3u8"},{"name":"12","slug":"12","filename":"Date A Live IV Tập 12 - Vòng luân hồi của sự cứu rỗi","link_embed":"https://kd.hd-bophim.com/share/d4f457bca5d92483c063b48d7a33b36b","link_m3u8":"https://kd.hd-bophim.com/20220624/15503_d4ca8dc6/index.m3u8"}]}]}`
var api_m006_parse = JSON.parse(api_m006)

function m006_p4_t1()
{
    var tap = 1;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t2()
{
    var tap = 2;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t3()
{
    var tap = 3;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t4()
{
    var tap = 4;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t5()
{
    var tap = 5;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t6()
{
    var tap = 6;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t7()
{
    var tap = 7;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t8()
{
    var tap = 8;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t9()
{
    var tap = 9;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t10()
{
    var tap = 10;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t11()
{
    var tap = 11;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m006_p4_t12()
{
    var tap = 12;
    var getTap = api_m006_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m006_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// komi nu than so giao tiep (m007)
var api_m007 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-07-13T16:30:57.000Z"},"_id":"62666417489068f643a1c243","name":"Komi không thể giao tiếp","origin_name":"Komi Can't Communicate","content":"<p>Ở ngôi trường cấp ba toàn những nhân vật đặc biệt, Tadano giúp cô bạn cùng lớp nhút nhát và khó hòa nhập Komi đạt được mục tiêu kết bạn với 100 người.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/komi-khong-the-giao-tiep-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=tLdLTSnmnoA","time":"24phút/tập","episode_current":"Hoàn Tất (24/24)","episode_total":"24 tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"komi-khong-the-giao-tiep","year":2021,"actor":["Koga Aoi"," Kajiwara Gakuto"," Murakawa Rie"," Hidaka Rina"," Okubo Rumi"," Fujii Yukiyo"," Ami Maeshima"," Kenji Akabane"," Sato Yuga"," Ono Kensho"," Sarah Emi Bridcutt"," Enoki Junya"," Uchida Maaya"," Hidaka Noriko"],"director":[""],"category":[{"name":"Hài Hước"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/komi-khong-the-giao-tiep-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Komi không thể giao tiếp_S01E01_Chỉ là, mình ước mình có thể nói","link_embed":"https://aa.nguonphimmoi.com/share/b219918ba61d50f59ffcac4f2dda83f1","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12562_5778d40a/index.m3u8"},{"name":"2","slug":"2","filename":"Komi không thể giao tiếp_S01E02_Chỉ là một người bạn thời thơ ấu thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/01067f6f4ec8b1a0843daccb97664995","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12563_04ed6216/index.m3u8"},{"name":"3","slug":"3","filename":"Komi không thể giao tiếp_S01E03_Chỉ là nỗi sợ sân khấu thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/7953041d78ecdbc6884430078a6ffdfd","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12564_719e870d/index.m3u8"},{"name":"4","slug":"4","filename":"Komi không thể giao tiếp_S01E04_Chỉ là cuộc kiểm tra thể chất thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/03be645beeedece0dae5d302675f1609","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12565_b77e2a08/index.m3u8"},{"name":"5","slug":"5","filename":"Komi không thể giao tiếp_S01E05_Chỉ là bộ đồng phục mùa hè của mình thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/f6e8de88807006538cd9be5fd3ba51c1","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12566_9116a124/index.m3u8"},{"name":"6","slug":"6","filename":"Komi không thể giao tiếp_S01E06_Chỉ là một trò đùa thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/81e4fe932e45bbbc10cfce7ffb67162e","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12567_50e083a4/index.m3u8"},{"name":"7","slug":"7","filename":"Komi không thể giao tiếp_S01E07_Chỉ là bể bơi thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/57fab836f21e4a2a4a74ad5f8aa8f819","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12568_42a78554/index.m3u8"},{"name":"8","slug":"8","filename":"Komi không thể giao tiếp_S01E08_Chỉ là lễ hội Obon thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/850a40f2ba21fec8567a3769263d1c5c","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12569_9db35706/index.m3u8"},{"name":"9","slug":"9","filename":"Komi không thể giao tiếp_S01E09_Chỉ là một đứa nhóc vùng quê thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/0b115042dd978264d92d419b6c8a1450","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12570_42e6ce19/index.m3u8"},{"name":"10","slug":"10","filename":"Komi không thể giao tiếp_S01E10_Chỉ là ngày hội thể thao thôi_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/a0715b3d3eeed8446fc3bf227c1e4b83","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12571_5fcb8580/index.m3u8"},{"name":"11","slug":"11","filename":"Komi không thể giao tiếp_S01E11_Chỉ là kế hoạch cho lễ hội văn hóa_ Và một số điều khác","link_embed":"https://aa.nguonphimmoi.com/share/4cba8b40e26654975d5ed2256eeba2e2","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12572_ca6aff8b/index.m3u8"},{"name":"12","slug":"12","filename":"Komi không thể giao tiếp_S01E12_Chỉ là lễ hội văn hóa thôi","link_embed":"https://aa.nguonphimmoi.com/share/9cbe38ee91368cef7c0f22de9c3461e3","link_m3u8":"https://aa.nguonphimmoi.com/20220425/12573_4420d40c/index.m3u8"},{"name":"13","slug":"13","filename":"Komi không thể giao tiếp_S01E13_Tập 13","link_embed":"https://1080.hdphimonline.com/share/f05a5279ad8f888dda342a7c6e458658","link_m3u8":"https://1080.hdphimonline.com/20220427/20580_4dab58c8/index.m3u8"},{"name":"14","slug":"14","filename":"Komi không thể giao tiếp_S01E14_It_s just a typhoon_ Plus more","link_embed":"https://kd.hd-bophim.com/share/9697361bd81c04fb4ea891d63104a5a3","link_m3u8":"https://kd.hd-bophim.com/20220504/10844_a9125ad1/index.m3u8"},{"name":"15","slug":"15","filename":"Komi không thể giao tiếp_S01E15_Chỉ là cảm xúc_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/94629eb2f9a4d7f9309239c4bcb96f0c","link_m3u8":"https://kd.hd-bophim.com/20220511/11572_bdd47b30/index.m3u8"},{"name":"16","slug":"16","filename":"Komi không thể giao tiếp_S01E16_Chỉ là Giáng sinh_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/00bbd6beace7365b27a913db75fddce9","link_m3u8":"https://kd.hd-bophim.com/20220524/12498_ccdd96d6/index.m3u8"},{"name":"17","slug":"17","filename":"Komi không thể giao tiếp_S01E17_Chỉ là người tuyết_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/fcf059b3a04a642eca4c21bd3fa5e9e3","link_m3u8":"https://kd.hd-bophim.com/20220525/12679_4396feb6/index.m3u8"},{"name":"18","slug":"18","filename":"Komi không thể giao tiếp_S01E18_Chỉ là dịp Tết_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/4d85374a75c3ff7c040df577395ff7f9","link_m3u8":"https://kd.hd-bophim.com/20220601/13107_95b7ea69/index.m3u8"},{"name":"19","slug":"19","filename":"Komi không thể giao tiếp_S01E19_Chỉ là hiểu lầm_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/ccbaefcc48cd5f8ec9309165ea694eb2","link_m3u8":"https://kd.hd-bophim.com/20220608/13700_a7c11287/index.m3u8"},{"name":"20","slug":"20","filename":"Komi Can_t Communicate_S01E20_It_s just the school field trip","link_embed":"https://kd.hd-bophim.com/share/14e676072a5b15381b6f7f33c3528215","link_m3u8":"https://kd.hd-bophim.com/20220615/14478_29517339/index.m3u8"},{"name":"21","slug":"21","filename":"Komi không thể giao tiếp_S01E21_Chỉ còn 2 ngày tới chuyến đi","link_embed":"https://kd.hd-bophim.com/share/25e646de1d14a0538e631e7f3605eb12","link_m3u8":"https://kd.hd-bophim.com/20220622/15193_a650d5cd/index.m3u8"},{"name":"22","slug":"22","filename":"Komi không thể giao tiếp_S01E22_Chỉ là ngày Valentine","link_embed":"https://kd.hd-bophim.com/share/f3c4db61e5087d3c0b6b7ef7209075f0","link_m3u8":"https://kd.hd-bophim.com/20220629/16273_1b4fc50d/index.m3u8"},{"name":"23","slug":"23","filename":"Komi không thể giao tiếp_S01E23_Chỉ là quần tất rách_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/0af07e9885819ecb85897611e758433b","link_m3u8":"https://kd.hd-bophim.com/20220706/17474_0b7e12e7/index.m3u8"},{"name":"24","slug":"24","filename":"Komi không thể giao tiếp_S01E24_Chỉ là ngày Valentine Trắng_ Và còn…","link_embed":"https://kd.hd-bophim.com/share/77e86f5489a21d225ec448dce1fec3a7","link_m3u8":"https://kd.hd-bophim.com/20220713/18130_208e7805/index.m3u8"}]}]}`
var api_m007_parse = JSON.parse(api_m007)

function m007_p1_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t13()
{
    // console.log("Hello world")
    var tap = 13;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t14()
{
    // console.log("Hello world")
    var tap = 14;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t15()
{
    // console.log("Hello world")
    var tap = 15;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t16()
{
    // console.log("Hello world")
    var tap = 16;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t17()
{
    // console.log("Hello world")
    var tap = 17;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t18()
{
    // console.log("Hello world")
    var tap = 18;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t19()
{
    // console.log("Hello world")
    var tap = 19;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t20()
{
    // console.log("Hello world")
    var tap = 20;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t21()
{
    // console.log("Hello world")
    var tap = 21;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t22()
{
    // console.log("Hello world")
    var tap = 22;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t23()
{
    // console.log("Hello world")
    var tap = 23;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m007_p1_t24()
{
    // console.log("Hello world")
    var tap = 24;
    var getTap = api_m007_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m007_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// su troi day cua khien hiep si (m008) - p1
var api_m008_p1 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-04-10T13:26:15.000Z"},"_id":"62528d73b89e10950806e894","name":"Sự trỗi dậy của khiên hiệp sĩ (Phần 1)","origin_name":"The Rising of the Shield Hero (Season 1)","content":"<p>Một game thủ được triệu tập bằng ma thuật vào vũ trụ song song, nơi cậu được chọn là một trong bốn anh hùng với vận mệnh giải cứu thế giới khỏi viễn cảnh diệt vong.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/su-troi-day-cua-khien-hiep-si-phan-1-thumb.jpg","is_copyright":"off","trailer_url":"","time":"47phút/tập","episode_current":"Hoàn Tất (25/25)","episode_total":"25 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"su-troi-day-cua-khien-hiep-si-phan-1","year":2019,"actor":["Ishikawa Kaito"," Seto Asami"," Hidaka Rina"," Matsuoka Yoshitsugu"," Takahashi Makoto"," Yamaya Yoshitaka"," Hara Natsuko"," Uchida Maaya"," Inoue Kikuko"," Hanazawa Kana"],"director":[""],"category":[{"name":"Hành Động"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":""},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E01_Khiên Hiệp Sĩ","link_embed":"https://vie.haiphim.com/share/5cc3749a6e56ef6d656735dff9176074","link_m3u8":"https://vie.haiphim.com/20220410/6923_4d6ed4e1/index.m3u8"},{"name":"2","slug":"2","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E02_Cô gái nô lệ","link_embed":"https://vie.haiphim.com/share/7ef2f13f0e9d3478d7c36f6483d38a86","link_m3u8":"https://vie.haiphim.com/20220410/6925_ce37d84c/index.m3u8"},{"name":"3","slug":"3","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E03_Làn Sóng Tai Ương","link_embed":"https://vie.haiphim.com/share/4e246a381baf2ce038b3b0f82c7d6fb4","link_m3u8":"https://vie.haiphim.com/20220410/6924_02966c76/index.m3u8"},{"name":"4","slug":"4","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E04_Lời ru bình minh","link_embed":"https://vie.haiphim.com/share/9b8b50fb590c590ffbf1295ce92258dc","link_m3u8":"https://vie.haiphim.com/20220410/6926_0c051f92/index.m3u8"},{"name":"5","slug":"5","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E05_Filo","link_embed":"https://vie.haiphim.com/share/0ad5292c158f3924f8b480367fcbeb94","link_m3u8":"https://vie.haiphim.com/20220410/6927_53a434fc/index.m3u8"},{"name":"6","slug":"6","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E06_Một thành viên mới","link_embed":"https://vie.haiphim.com/share/20c1945eae4b9868cbbfd09675f7d76e","link_m3u8":"https://vie.haiphim.com/20220410/6928_c5d1e2c1/index.m3u8"},{"name":"7","slug":"7","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E07_Vị Cứu Tinh của Thiên Điểu","link_embed":"https://vie.haiphim.com/share/e0308d73972d8dd5e2dd27853106386e","link_m3u8":"https://vie.haiphim.com/20220410/6929_265b5631/index.m3u8"},{"name":"8","slug":"8","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E08_Chiếc khiên bị nguyền","link_embed":"https://vie.haiphim.com/share/2f254e66097fd653a5ca4cfdb33be358","link_m3u8":"https://vie.haiphim.com/20220410/6930_ec23706c/index.m3u8"},{"name":"9","slug":"9","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E09_Melty","link_embed":"https://vie.haiphim.com/share/c70341de2c112a6b3496aec1f631dddd","link_m3u8":"https://vie.haiphim.com/20220410/6931_aaa12b03/index.m3u8"},{"name":"10","slug":"10","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E10_Hỗn loạn","link_embed":"https://vie.haiphim.com/share/10ffbba2ec9025b945acc154f3403aec","link_m3u8":"https://vie.haiphim.com/20220410/6934_d78c5b6e/index.m3u8"},{"name":"11","slug":"11","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E11_Làn Sóng thứ hai","link_embed":"https://vie.haiphim.com/share/ef2ee09ea9551de88bc11fd7eeea93b0","link_m3u8":"https://vie.haiphim.com/20220410/6933_b6693cc6/index.m3u8"},{"name":"12","slug":"12","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E12_Người xa lạ mặc đồ đen","link_embed":"https://vie.haiphim.com/share/caaa29eab72b231b0af62fbdff89bfce","link_m3u8":"https://vie.haiphim.com/20220410/6932_7ecbe117/index.m3u8"},{"name":"13","slug":"13","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E13_Quỷ Khiên","link_embed":"https://vie.haiphim.com/share/8963920e8b402154316d8175fa189112","link_m3u8":"https://vie.haiphim.com/20220410/6937_428f5253/index.m3u8"},{"name":"14","slug":"14","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E14_Ký ức không phai","link_embed":"https://vie.haiphim.com/share/4a300d3a0ae99b58b0dfcd3fde526bf5","link_m3u8":"https://vie.haiphim.com/20220410/6936_cc2876e0/index.m3u8"},{"name":"15","slug":"15","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E15_Raphtalia","link_embed":"https://vie.haiphim.com/share/ccce2fab7336b8bc8362d115dec2d5a2","link_m3u8":"https://vie.haiphim.com/20220410/6935_9d96ceb0/index.m3u8"},{"name":"16","slug":"16","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E16_Nữ hoàng Filolial","link_embed":"https://vie.haiphim.com/share/33cf42b38bbcf1dd6ba6b0f0cd005328","link_m3u8":"https://vie.haiphim.com/20220410/6938_2a5979ac/index.m3u8"},{"name":"17","slug":"17","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E17_Lời hứa đã trao","link_embed":"https://vie.haiphim.com/share/f056bfa71038e04a2400266027c169f9","link_m3u8":"https://vie.haiphim.com/20220410/6939_813eff43/index.m3u8"},{"name":"18","slug":"18","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E18_Âm mưu trùng điệp","link_embed":"https://vie.haiphim.com/share/aad64398a969ec3186800d412fa7ab31","link_m3u8":"https://vie.haiphim.com/20220410/6941_4555730b/index.m3u8"},{"name":"19","slug":"19","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E19_Tứ Đại Hiệp Sĩ","link_embed":"https://vie.haiphim.com/share/f75b757d3459c3e93e98ddab7b903938","link_m3u8":"https://vie.haiphim.com/20220410/6940_a702fa7e/index.m3u8"},{"name":"20","slug":"20","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E20_Thiện ác đối đầu","link_embed":"https://vie.haiphim.com/share/6a783b626a6d892a132dc195e5504272","link_m3u8":"https://vie.haiphim.com/20220410/6943_6cb8825a/index.m3u8"},{"name":"21","slug":"21","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E21_Naofumi chiến thắng khải hoàn","link_embed":"https://vie.haiphim.com/share/c236337b043acf93c7df397fdb9082b3","link_m3u8":"https://vie.haiphim.com/20220410/6942_c0f072c9/index.m3u8"},{"name":"22","slug":"22","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E22_Cuộc họp của các hiệp sĩ","link_embed":"https://vie.haiphim.com/share/ba51e6158bcaf80fd0d834950251e693","link_m3u8":"https://vie.haiphim.com/20220410/6944_16260db3/index.m3u8"},{"name":"23","slug":"23","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E23_Đảo Cal Mira","link_embed":"https://vie.haiphim.com/share/a424ded436368e3f9f10da14c23acc85","link_m3u8":"https://vie.haiphim.com/20220410/6947_7c722e42/index.m3u8"},{"name":"24","slug":"24","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E24_Hiệp sĩ từ một thế giới khác","link_embed":"https://vie.haiphim.com/share/0d98b597aa732aea606bde680c3b57d8","link_m3u8":"https://vie.haiphim.com/20220410/6945_543d2394/index.m3u8"},{"name":"25","slug":"25","filename":"Sự trỗi dậy của khiên hiệp sĩ_S01E25_Sự trỗi dậy của Khiên Hiệp Sĩ","link_embed":"https://vie.haiphim.com/share/6ea3f1874b188558fafbab78e8c3a968","link_m3u8":"https://vie.haiphim.com/20220410/6946_1c699af6/index.m3u8"}]}]}`
var api_m008_p1_parse = JSON.parse(api_m008_p1)

function m008_p1_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t13()
{
    // console.log("Hello world")
    var tap = 13;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t14()
{
    // console.log("Hello world")
    var tap = 14;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t15()
{
    // console.log("Hello world")
    var tap = 15;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t16()
{
    // console.log("Hello world")
    var tap = 16;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t17()
{
    // console.log("Hello world")
    var tap = 17;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t18()
{
    // console.log("Hello world")
    var tap = 18;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t19()
{
    // console.log("Hello world")
    var tap = 19;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t20()
{
    // console.log("Hello world")
    var tap = 20;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t21()
{
    // console.log("Hello world")
    var tap = 21;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t22()
{
    // console.log("Hello world")
    var tap = 22;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t23()
{
    // console.log("Hello world")
    var tap = 23;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t24()
{
    // console.log("Hello world")
    var tap = 24;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p1_t25()
{
    // console.log("Hello world")
    var tap = 25;
    var getTap = api_m008_p1_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p1_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// su troi day cua khien hiep si (m008) - p2
var api_m008_p2 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-07-02T02:45:11.000Z"},"_id":"62528da4b89e10950806ef95","name":"Sự trỗi dậy của khiên hiệp sĩ (Phần 2)","origin_name":"The Rising of the Shield Hero (Season 2)","content":"<p>Naofumi và các bạn lên đường đến vương quốc bên cạnh để ngăn mối đe dọa trong truyền thuyết gây ra tai họa chưa từng có đối với thế giới.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/su-troi-day-cua-khien-hiep-si-phan-2-thumb.jpg","is_copyright":"off","trailer_url":"https://www.youtube.com/watch?v=LsCLE7IaILI","time":"47phút/tập","episode_current":"Hoàn Tất (13/13)","episode_total":"13 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"su-troi-day-cua-khien-hiep-si-phan-2","year":2022,"actor":["Ishikawa Kaito"," Seto Asami"," Hidaka Rina"," Matsuoka Yoshitsugu"," Takahashi Makoto"," Yamaya Yoshitaka"," Hara Natsuko"," Uchida Maaya"," Inoue Kikuko"," Hanazawa Kana"],"director":[""],"category":[{"name":"Hành Động"}],"country":[{"name":"Nhật Bản"}],"sub_docquyen":"off","chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/su-troi-day-cua-khien-hiep-si-phan-2-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 1 - Tiếng gầm mới","link_embed":"https://hd.1080phim.com/share/2e5c2cb8d13e8fba78d95211440ba326","link_m3u8":"https://hd.1080phim.com/20220415/3949_2eeba768/index.m3u8"},{"name":"2","slug":"2","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 2 - Dấu chân của Linh Quy","link_embed":"https://hd.1080phim.com/share/bb702465f3c3141263ddd046c9585b27","link_m3u8":"https://hd.1080phim.com/20220415/3950_d23840de/index.m3u8"},{"name":"3","slug":"3","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 3 - Đại địa rung chuyển","link_embed":"https://hd.1080phim.com/share/90b9ec1e25ed6705ac341eb17690d55c","link_m3u8":"https://hd.1080phim.com/20220427/9277_30cc3202/index.m3u8"},{"name":"4","slug":"4","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 4 - Tàn tích trong sương mù","link_embed":"https://hd.1080phim.com/share/fc1c379653b4feca4252b4d078352c4d","link_m3u8":"https://hd.1080phim.com/20220427/9279_01f73aef/index.m3u8"},{"name":"5","slug":"5","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 5 - Ost Horai","link_embed":"https://aa.nguonphimmoi.com/share/5165bb7092845d883f5d8fd52d1f32b5","link_m3u8":"https://aa.nguonphimmoi.com/20220504/14294_9ed728a9/index.m3u8"},{"name":"6","slug":"6","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 6 - Truy đuổi","link_embed":"https://kd.hd-bophim.com/share/498bce62bd2bda584246701fa0166482","link_m3u8":"https://kd.hd-bophim.com/20220512/11595_bb6c6a33/index.m3u8"},{"name":"7","slug":"7","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 7 - Mê cung vô tận","link_embed":"https://aa.nguonphimmoi.com/share/420488825d86613b1c9aa97adc24301b","link_m3u8":"https://aa.nguonphimmoi.com/20220519/16413_99a67337/index.m3u8"},{"name":"8","slug":"8","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 8 - Lời từ biệt của tuyết","link_embed":"https://kd.hd-bophim.com/share/1230a1696bd04bc4a1c1e70bce477b46","link_m3u8":"https://kd.hd-bophim.com/20220525/12727_422893e9/index.m3u8"},{"name":"9","slug":"9","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 9 - Humming Ferry","link_embed":"https://kd.hd-bophim.com/share/a188af0bc920853d3673ab71c5f2a440","link_m3u8":"https://kd.hd-bophim.com/20220601/13183_e42a0c3e/index.m3u8"},{"name":"10","slug":"10","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 10 - Dũng Sĩ Kiếm","link_embed":"https://kd.hd-bophim.com/share/7db181be25ab69447b69a185006d9b03","link_m3u8":"https://kd.hd-bophim.com/20220608/13657_f490dba8/index.m3u8"},{"name":"11","slug":"11","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 11 - Mối liên kết","link_embed":"https://kd.hd-bophim.com/share/e0c5e4ce2af501bca32abadcf9030c6b","link_m3u8":"https://kd.hd-bophim.com/20220616/14661_edde52a1/index.m3u8"},{"name":"12","slug":"12","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 12 - Lý do để chiến đấu","link_embed":"https://kd.hd-bophim.com/share/e339e9f77caa07d6be8acfa2fceb178a","link_m3u8":"https://kd.hd-bophim.com/20220622/15238_f6893646/index.m3u8"},{"name":"13","slug":"13","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 13 - Dâng hoa tưởng nhớ","link_embed":"https://kd.hd-bophim.com/share/83972220c2352bdcf6dbc17c327c1b4a","link_m3u8":"https://kd.hd-bophim.com/20220630/16444_a1ab6f40/index.m3u8"}]},{"server_name":"Vietsub #2","server_data":[{"name":"1","slug":"1","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E01_Tiếng Gầm Mới","link_embed":"https://vie.haiphim.com/share/ff7a2112f8c3e3224ce8e3e26de1d932","link_m3u8":"https://vie.haiphim.com/20220410/6948_8e6f6ed4/index.m3u8"},{"name":"2","slug":"2","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E02_Dấu Chân Linh Quy","link_embed":"https://vie.haiphim.com/share/ca91c5464e73d3066825362c3093a45f","link_m3u8":"https://vie.haiphim.com/20220415/7839_01c543bb/index.m3u8"},{"name":"3","slug":"3","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E03_Mặt Đất Rung Chuyển","link_embed":"https://hd.1080phim.com/share/1ce83e5d4135b07c0b82afffbe2b3436","link_m3u8":"https://hd.1080phim.com/20220421/6459_874a842a/index.m3u8"},{"name":"4","slug":"4","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E04_Đống Đổ Nát Trong Màn Sương","link_embed":"https://aa.nguonphimmoi.com/share/ea87de84e18a339d4efa00144c5b0fe3","link_m3u8":"https://aa.nguonphimmoi.com/20220428/13280_b87a52b7/index.m3u8"},{"name":"5","slug":"5","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E05_Tập 5","link_embed":"https://kd.hd-bophim.com/share/df202fc4b213028833dec15dd526256d","link_m3u8":"https://kd.hd-bophim.com/20220505/10946_ca03d492/index.m3u8"},{"name":"6","slug":"6","filename":"Sự trỗi dậy của khiên hiệp sĩ_S02E06_Truy Đuổi","link_embed":"https://kd.hd-bophim.com/share/7212a6567c8a6c513f33b858d868ff80","link_m3u8":"https://kd.hd-bophim.com/20220512/11597_f9f761f0/index.m3u8"},{"name":"7","slug":"7","filename":"Sự trỗi dậy của Khiên Hiệp Sĩ_S02E07_Tập 7","link_embed":"https://kd.hd-bophim.com/share/87ca4eb840b6f78e3b6d6b418c0fef40","link_m3u8":"https://kd.hd-bophim.com/20220519/12142_a7a569d8/index.m3u8"},{"name":"8","slug":"8","filename":"Sự Vùng Lên Của Dũng Sĩ Khiên Mùa 2 Tập 8 - Lời từ biệt của tuyết","link_embed":"https://kd.hd-bophim.com/share/0a90c1fdd4b06c0822b0cbfae4bb0c06","link_m3u8":"https://kd.hd-bophim.com/20220601/13182_c073ab6d/index.m3u8"}]}]}`
var api_m008_p2_parse = JSON.parse(api_m008_p2)

function m008_p2_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m008_p2_t13()
{
    // console.log("Hello world")
    var tap = 13;
    var getTap = api_m008_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m008_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// tham tu da chet (m009)

var api_m009 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-05-22T03:04:43.000Z"},"_id":"62599b76b89b507b80d8fb14","name":"Thám Tử Đã Chết","origin_name":"Tantei wa Mou Shindeiru, The Detective is Already Dead","content":"<p>Kimizuka Kimihiko là một thỏi nam châm chuyên hút phiền phức. Hết bị bắt gặp ở hiện trường án mạng lại đến vô tình chứng kiến một vụ mua bán ma túy, rắc rối dường như không bao giờ buông tha cho cậu ta. Vì vậy, cũng chẳng có gì ngạc nhiên khi chuyến bay cậu ta đi xảy ra một vụ cướp và cần đến sự có mặt của một thám tử. Thật xui xẻo khi mọi nỗ lực tránh né tai ương của cậu ta đều bị cô nàng xinh đẹp tóc bạch kim với mật danh Siesta phá hoại. Cô ấy tự xưng là thám tử và thản nhiên lôi kéo Kimizuka làm trợ lý cho mình. Vụ án này chính là điểm khởi đầu cho cuộc thám hiểm vòng quanh thế giới mà có mơ cậu ta cũng chẳng dám nghĩ đến. Cả hai cùng liều mạng đánh sập các tổ chức tội phạm, ngăn chặn thảm họa và cứu được hàng nghìn người. Nhưng ba năm sau, cuộc hành trình đã khép lại với cái chết của Siesta. Sau đó, Kimizuka đã tránh trở nên nổi bật trong suốt một năm để có lại được cuộc sống cấp ba bình thường. Tuy nhiên, như số phận đã sắp đặt, một cô gái với vẻ ngoài giống Siesta đến kỳ lạ đã xuất hiện đe dọa sẽ làm đảo lộn những ngày tháng bình yên mà cậu ta đang có.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/tham-tu-da-chet-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=NZq2l2w2zMc","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"tham-tu-da-chet","year":2021,"actor":[""],"director":[""],"category":[{"name":"Hình Sự"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/tham-tu-da-chet-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"Thám Tử Đã Chết Tập 1 - Ở đây có vị nào là thám tử không ạ?","link_embed":"https://hd.1080phim.com/share/254ed7d2de3b23ab10936522dd547b78","link_m3u8":"https://hd.1080phim.com/20220415/4002_fe515afd/index.m3u8"},{"name":"2","slug":"2","filename":"Thám Tử Đã Chết Tập 2 - Tôi vẫn luôn nhớ cho đến tận bây giờ","link_embed":"https://hd.1080phim.com/share/3ce83f544dbe69bb4fb19211fc442c2f","link_m3u8":"https://hd.1080phim.com/20220415/4003_37dde727/index.m3u8"},{"name":"3","slug":"3","filename":"Thám Tử Đã Chết Tập 3 - Yui Nya đỉnh như thế đấy","link_embed":"https://hd.1080phim.com/share/f8eb278a8bce873ef365b45e939da38a","link_m3u8":"https://hd.1080phim.com/20220415/4004_5074a071/index.m3u8"},{"name":"4","slug":"4","filename":"Thám Tử Đã Chết Tập 4 - Thứ mà con mắt đó có thể nhìn được","link_embed":"https://hd.1080phim.com/share/f23b3df742bb9fbf6bbf30a05150ac19","link_m3u8":"https://hd.1080phim.com/20220415/4005_efc4b63f/index.m3u8"},{"name":"5","slug":"5","filename":"Thám Tử Đã Chết Tập 5 - Đó là hướng tới tương lai một năm sau","link_embed":"https://hd.1080phim.com/share/671d8d05d795091118b1344f715307c4","link_m3u8":"https://hd.1080phim.com/20220415/4006_3021fd9c/index.m3u8"},{"name":"6","slug":"6","filename":"Thám Tử Đã Chết Tập 6 - Hồng Liên Ác Ma, Nữ Hoàng Băng Giá","link_embed":"https://hd.1080phim.com/share/21b5680d80f75a616096f2e791affac6","link_m3u8":"https://hd.1080phim.com/20220415/4008_1cf43456/index.m3u8"},{"name":"7","slug":"7","filename":"Thám Tử Đã Chết Tập 7 - Một ngày nào đó, tôi sẽ nhớ lại ngày hôm nay","link_embed":"https://hd.1080phim.com/share/ab8df9f7733db5611fd53748f1db282e","link_m3u8":"https://hd.1080phim.com/20220415/4007_b7a94176/index.m3u8"},{"name":"8","slug":"8","filename":"Thám Tử Đã Chết Tập 8 - Và chúng tôi lại lên đường phiêu lưu một lần nữa","link_embed":"https://hd.1080phim.com/share/cb5f984421c93f1efb42b53a43f83c3a","link_m3u8":"https://hd.1080phim.com/20220415/4009_4124e298/index.m3u8"},{"name":"9","slug":"9","filename":"Thám Tử Đã Chết Tập 9 - SPES","link_embed":"https://hd.1080phim.com/share/6693a7aacb8a2e74c6f5fe91bc39864b","link_m3u8":"https://hd.1080phim.com/20220415/4010_5da26356/index.m3u8"},{"name":"10","slug":"10","filename":"Thám Tử Đã Chết Tập 10 - Vậy nên tôi không thể trở thành thám tử","link_embed":"https://hd.1080phim.com/share/bd3ef5c19067fe179f71c8b86ea4b39b","link_m3u8":"https://hd.1080phim.com/20220415/4012_b4b7aba7/index.m3u8"},{"name":"11","slug":"11","filename":"Thám Tử Đã Chết Tập 11 - Ánh sáng bên trong hy vọng","link_embed":"https://hd.1080phim.com/share/b14680dec683e744ada1f2fe08614086","link_m3u8":"https://hd.1080phim.com/20220415/4011_fcfb05c9/index.m3u8"},{"name":"12","slug":"12","filename":"Thám Tử Đã Chết Tập 12 - Ba năm được ở bên cậu là khoảng thời gian đẹp đẽ nhất","link_embed":"https://hd.1080phim.com/share/fbfe5ba2ce3309f522c335e949435612","link_m3u8":"https://hd.1080phim.com/20220415/4013_fed70402/index.m3u8"}]}]}`
var api_m009_parse = JSON.parse(api_m009)

function m009_p1_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m009_p1_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m009_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m009_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// orient (m010) part 1
var api_m010 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-05-15T03:09:56.000Z"},"_id":"625c2eac941a26e421dc4ece","name":"ORIENT","origin_name":"orient","content":"<p>5 năm trước, Musashi đã hứa với người bạn Kojirou Kanemaki của mình rằng một khi lớn lên, họ sẽ trở thành samurai (Võ Sĩ), thành lập liên minh (Võ Sĩ Đoàn) và thực hiện các nhiệm vụ tiêu diệt quỷ. Nhưng kể từ đó, mọi thứ đã thay đổi. Với việc ma quỷ ngày nay được xã hội ca tụng và tôn thờ, các samurai bị xa lánh và miệt thị. Sợ để lộ ước mơ trở thành samurai, Musashi hòa mình vào giáo điều của thị trấn bằng cách trở thành một thợ mỏ trong khi bí mật đánh bóng kiếm thuật của mình. Trong khi đó, mặc dù là hậu duệ trực tiếp của một samurai, Kojirou từ bỏ lời hứa với người bạn cũ của mình. Tuy nhiên, sau khi cứu Musashi khỏi trải nghiệm cận kề cái chết, quan điểm của anh ấy đã thay đổi. Mặc dù vẫn còn mâu thuẫn, Kojirou bắt đầu một cuộc hành trình với Musashi với hy vọng tìm ra cảm xúc thực sự của mình. Chiến đấu chống lại tất cả các tỷ lệ cược, bộ đôi lao đầu vào thế giới vô danh của những con thú giết người, không biết cuộc sống có gì dành cho họ. Giờ đây, cưỡi ngựa sắt, các anh hùng 15 tuổi lên kế hoạch khôi phục danh tiếng đã bị hoen ố của các samurai và thanh trừng thế giới của quỷ.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/orient-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"https://www.youtube.com/watch?v=gLbwuS1NzL0","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"orient","year":2022,"actor":[""],"director":[""],"category":[{"name":"Phiêu Lưu"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":"http://img.ophim1.cc/uploads/movies/orient-poster.jpg"},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"ORIENT Tập 1 - Musashi và Kojirou","link_embed":"https://hd.1080phim.com/share/d1f44e2f09dc172978a4d3151d11d63e","link_m3u8":"https://hd.1080phim.com/20220417/4409_eecb3e1f/index.m3u8"},{"name":"2","slug":"2","filename":"ORIENT Tập 2 - Niềm kiêu hãnh của Võ Sĩ","link_embed":"https://hd.1080phim.com/share/ea96efc03b9a050d895110db8c4af057","link_m3u8":"https://hd.1080phim.com/20220417/4410_ee7dbc07/index.m3u8"},{"name":"3","slug":"3","filename":"ORIENT Tập 3 - Thế giới bên ngoài","link_embed":"https://hd.1080phim.com/share/e243aa93e6b6e031797f86d0858f5e40","link_m3u8":"https://hd.1080phim.com/20220417/4411_c67f5952/index.m3u8"},{"name":"4","slug":"4","filename":"ORIENT Tập 4 - Đoàn Võ Sĩ Kosameda","link_embed":"https://hd.1080phim.com/share/6cf821bc98b2d343170185bb3de84cc4","link_m3u8":"https://hd.1080phim.com/20220417/4412_464a8ea9/index.m3u8"},{"name":"5","slug":"5","filename":"ORIENT Tập 5 - Chơi đùa với ngày mai","link_embed":"https://hd.1080phim.com/share/aa36c88c27650af3b9868b723ae15dfc","link_m3u8":"https://hd.1080phim.com/20220417/4413_b885b78a/index.m3u8"},{"name":"6","slug":"6","filename":"ORIENT Tập 6 - Trở nên mạnh mẽ hơn","link_embed":"https://hd.1080phim.com/share/9d740bd0f36aaa312c8d504e28c42163","link_m3u8":"https://hd.1080phim.com/20220417/4414_52fc8e08/index.m3u8"},{"name":"7","slug":"7","filename":"ORIENT Tập 7 - Không thể sống trong nước","link_embed":"https://hd.1080phim.com/share/2bf5e202fc973a02f417dc9af000177b","link_m3u8":"https://hd.1080phim.com/20220417/4415_3ff9310d/index.m3u8"},{"name":"8","slug":"8","filename":"ORIENT Tập 8 - Nữ Thần Hắc Diệu","link_embed":"https://hd.1080phim.com/share/1da546f25222c1ee710cf7e2f7a3ff0c","link_m3u8":"https://hd.1080phim.com/20220417/4416_e588c130/index.m3u8"},{"name":"9","slug":"9","filename":"ORIENT Tập 9 - Cách sống của Võ Sĩ","link_embed":"https://hd.1080phim.com/share/dc2208f9bbd11486d5dbbb9218e03017","link_m3u8":"https://hd.1080phim.com/20220417/4417_4f956021/index.m3u8"},{"name":"10","slug":"10","filename":"ORIENT Tập 10 - Sức mạnh của Nữ Thần","link_embed":"https://hd.1080phim.com/share/3bcf6eecb2611212e088d0d91f2ade9c","link_m3u8":"https://hd.1080phim.com/20220417/4418_a48dd01b/index.m3u8"},{"name":"11","slug":"11","filename":"ORIENT Tập 11 - Thứ trú ngụ trong thanh kiếm","link_embed":"https://hd.1080phim.com/share/65a99bb7a3115fdede20da98b08a370f","link_m3u8":"https://hd.1080phim.com/20220417/4419_494c2e4f/index.m3u8"},{"name":"12","slug":"12","filename":"ORIENT Tập 12 - Phía trước con đường","link_embed":"https://hd.1080phim.com/share/fc8fdb29501a6289b7bc8b0bdd8155df","link_m3u8":"https://hd.1080phim.com/20220417/4420_82c26ed0/index.m3u8"}]}]}`
var api_m010_parse = JSON.parse(api_m010)

function m010_p1_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p1_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m010_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// orient (m010) part 2
var api_m010_p2 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-10-10T07:02:40.000Z"},"_id":"62cd7460a862e5da38387293","name":"ORIENT 2","origin_name":"オリエント orient 二期","content":"<p>Tiếp nối phần 1 trên con đường trở thành Võ Sĩ Đoàn mạnh nhất của Musashi, Kojirou và Tsugumi cùng với đó là phát hiện ra vô vàn điều lạ trên thế giới này.</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/orient-2-thumb.jpg","poster_url":"http://img.ophim1.cc/uploads/movies/orient-2-poster.jpg","is_copyright":"off","sub_docquyen":"off","chieurap":false,"trailer_url":"","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"orient-2","year":2022,"actor":[""],"director":[""],"category":[{"name":"Hành Động"},{"name":"Phiêu Lưu"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}]},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"ORIENT 2 Tập 1 - Uesugi Bushidan","link_embed":"https://kd.hd-bophim.com/share/7e132d103ce54fda527e88a13a3d1540","link_m3u8":"https://kd.hd-bophim.com/20220712/18042_36c5156b/index.m3u8"},{"name":"2","slug":"2","filename":"ORIENT 2 Tập 2 - Nỗi nhục nhã trên tàu","link_embed":"https://kd.hd-bophim.com/share/7a6b3e0e06f590735da57d63d5040639","link_m3u8":"https://kd.hd-bophim.com/20220719/18543_5d61ffa9/index.m3u8"},{"name":"3","slug":"3","filename":"ORIENT 2 Gián điệpTập 3","link_embed":"https://kd.hd-bophim.com/share/ad1c145ebcbfebe02e9107405d585cee","link_m3u8":"https://kd.hd-bophim.com/20220726/18985_3a44ee8b/index.m3u8"},{"name":"4","slug":"4","filename":"ORIENT 2 Tập 4 - Chiến Y của Quân ThầnTập 4","link_embed":"https://kd.hd-bophim.com/share/af3632b9be2c1cf9b507427e6fd9e9fe","link_m3u8":"https://kd.hd-bophim.com/20220801/19366_bd7cf2e0/index.m3u8"},{"name":"5","slug":"5","filename":"ORIENT 2 Tập 5 - Ký ức của đáTập 5","link_embed":"https://kd.hd-bophim.com/share/67672910f91ad43a7fee016e838b2989","link_m3u8":"https://kd.hd-bophim.com/20220808/19787_f59d01b4/index.m3u8"},{"name":"6","slug":"6","filename":"ORIENT 2 Tập 6 - Quân Sư đối đầuTập 6","link_embed":"https://kd.hd-bophim.com/share/98edc70f240d534b2f7c016ab67dfd66","link_m3u8":"https://kd.hd-bophim.com/20220816/20194_9b5f2867/index.m3u8"},{"name":"7","slug":"7","filename":"ORIENT 2 Tập 7 - Người được tín nhiệmTập 7","link_embed":"https://1080.hdphimonline.com/share/b2e7ce6a6c4a844bfeb89a765e9bb959","link_m3u8":"https://1080.hdphimonline.com/20220823/35949_f628fa61/index.m3u8"},{"name":"8","slug":"8","filename":"ORIENT 2 Tập 8 - Minh chứng cho sự tồn tạiTập 8","link_embed":"https://1080.hdphimonline.com/share/a19378c33196a8e3f355d78b073a832b","link_m3u8":"https://1080.hdphimonline.com/20220830/36067_ac85c1ef/index.m3u8"},{"name":"9","slug":"9","filename":"ORIENT 2 Tập 9 - Sự tan rã của nhóm ShimazuTập 9","link_embed":"https://1080.hdphimonline.com/share/0e224c6ac0b54b0ba11614d9f25b9ebb","link_m3u8":"https://1080.hdphimonline.com/20220906/36189_59a74746/index.m3u8"},{"name":"10","slug":"10","filename":"ORIENT 2 Tập 10 - Anh trai và em traiTập 10","link_embed":"https://1080.hdphimonline.com/share/ca7ca7ea7912312362a50c3754c1cc2d","link_m3u8":"https://1080.hdphimonline.com/20220912/36357_34e67a4d/index.m3u8"},{"name":"11","slug":"11","filename":"ORIENT 2 Tập 11 - Đại Kiếm của Nữ Thần KurokiTập 11","link_embed":"https://1080.hdphimonline.com/share/c53751f3f59c8e925ee05c45509dc8a7","link_m3u8":"https://1080.hdphimonline.com/20220919/36472_f4194a32/index.m3u8"},{"name":"12","slug":"12","filename":"ORIENT 2 Tập 12 - Lời thềTập 12","link_embed":"https://1080.hdphimonline.com/share/cd2641acda3609cf9eeb2ca8b8fd50a7","link_m3u8":"https://1080.hdphimonline.com/20220926/36524_4e80bcb3/index.m3u8"}]}]}`
var api_m010_p2_parse = JSON.parse(api_m010_p2)

function m010_p2_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

function m010_p2_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_m010_p2_parse.episodes[0].server_data[tap-1].name
    var getLink = api_m010_p2_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
    }
}

// one-punch man (m011) part 1
var api_p1_m011 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-04-14T15:19:11.000Z"},"_id":"62583b6fb89b507b80d8b931","name":"One-Punch Man","origin_name":"ワンパンマン","content":"<p>Vì đam mê nên Saitama bắt đầu làm anh hùng, vì quá mạnh nên cậu dễ dàng đánh bại các quái vật chỉ với một cú đấm. Tuy nhiên, sau khi trở thành quá mạnh, Saitama đã trở nên nhàm chán trong những trận chiến của mình. Liệu ngày hôm nay có xuất hiện quái vật khiến cậu thật sự nghiêm túc hay không?</p>","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/one-punch-man-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"","time":"25 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"one-punch-man","year":2015,"actor":[""],"director":[""],"category":[{"name":"Hành Động"},{"name":"Hài Hước"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":""},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"One-Punch Man Tập 1 - Thực Thi Công Lý","link_embed":"https://hd.1080phim.com/share/e97399278d24e6bbf3a2d5e9c8d34262","link_m3u8":"https://hd.1080phim.com/20220414/3803_022f3e24/index.m3u8"},{"name":"2","slug":"2","filename":"One-Punch Man Tập 2 - Người Máy Cô Độc","link_embed":"https://hd.1080phim.com/share/37968ad196a5085f5ed91e58df8c2cef","link_m3u8":"https://hd.1080phim.com/20220414/3804_3255d7fe/index.m3u8"},{"name":"3","slug":"3","filename":"One-Punch Man Tập 3 - Nhà Khoa Học Bị Ám Ảnh","link_embed":"https://hd.1080phim.com/share/98cac9d33aad44bb31800130e8c50b5f","link_m3u8":"https://hd.1080phim.com/20220414/3805_c810cc91/index.m3u8"},{"name":"4","slug":"4","filename":"One-Punch Man Tập 4 - Ninja Thời Hiện Đại","link_embed":"https://hd.1080phim.com/share/5e7264477cf9b6b237a0d254cf0324e2","link_m3u8":"https://hd.1080phim.com/20220414/3806_548daf48/index.m3u8"},{"name":"5","slug":"5","filename":"One-Punch Man Tập 5 - Người Thầy Tối Thượng","link_embed":"https://hd.1080phim.com/share/43a115cbd6f4788924537365be3d6012","link_m3u8":"https://hd.1080phim.com/20220414/3807_b826b6ca/index.m3u8"},{"name":"6","slug":"6","filename":"One-Punch Man Tập 6 - Thành Phố Kinh Hoàng","link_embed":"https://hd.1080phim.com/share/cd8d5260c8131ca7aeea5d41796d1a0a","link_m3u8":"https://hd.1080phim.com/20220414/3808_d30a44ab/index.m3u8"},{"name":"7","slug":"7","filename":"One-Punch Man Tập 7 - Đệ Tử Tối Thượng","link_embed":"https://hd.1080phim.com/share/38ef4b66cb25e92abe4d594acb841471","link_m3u8":"https://hd.1080phim.com/20220414/3809_6ead618b/index.m3u8"},{"name":"8","slug":"8","filename":"One-Punch Man Tập 8 - Vị Vua Của Biển Cả","link_embed":"https://hd.1080phim.com/share/02ae6a786bbf135d3d223cbc0e770b6e","link_m3u8":"https://hd.1080phim.com/20220414/3810_aaa0618b/index.m3u8"},{"name":"9","slug":"9","filename":"One-Punch Man Tập 9 - Công Lý Bất Khuất","link_embed":"https://hd.1080phim.com/share/8068fee5f49946b3a8f85b1007cd40bb","link_m3u8":"https://hd.1080phim.com/20220414/3811_ec911f33/index.m3u8"},{"name":"10","slug":"10","filename":"One-Punch Man Tập 10 - Hiểm Họa Chưa Từng Có","link_embed":"https://hd.1080phim.com/share/40dba662fae60cd3bcceaa76a82d2873","link_m3u8":"https://hd.1080phim.com/20220414/3812_ac068131/index.m3u8"},{"name":"11","slug":"11","filename":"One-Punch Man Tập 11 - Kẻ Thống Trị Vũ Trụ","link_embed":"https://hd.1080phim.com/share/0a49e3c3a03ebde64f85c0bacd8a08e2","link_m3u8":"https://hd.1080phim.com/20220414/3813_5c54c60a/index.m3u8"},{"name":"12","slug":"12","filename":"One-Punch Man Tập 12 - Người Hùng Mạnh Nhất","link_embed":"https://hd.1080phim.com/share/c563c2c394023a07d56ad6b3eb09537a","link_m3u8":"https://hd.1080phim.com/20220414/3814_2aea9fed/index.m3u8"}]}]}`
var api_p1_m011_parse = JSON.parse(api_p1_m011)

function m011_p1_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p1_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_p1_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p1_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p1_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

// one-punch man (m011) part 2
var api_p2_m011 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-04-15T16:13:22.000Z"},"_id":"625999a2b89b507b80d8fa85","name":"One-Punch Man Phần 2","origin_name":"One-Punch (Season 2)","content":"","type":"hoathinh","status":"completed","thumb_url":"http://img.ophim1.cc/uploads/movies/one-punch-man-phan-2-thumb.jpg","is_copyright":"off","sub_docquyen":"off","trailer_url":"","time":"24 phút/tập","episode_current":"Hoàn Tất (12/12)","episode_total":"12 Tập","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"one-punch-man-phan-2","year":2019,"actor":[""],"director":[""],"category":[{"name":"Hành Động"},{"name":"Hài Hước"},{"name":"Bí ẩn"}],"country":[{"name":"Nhật Bản"}],"chieurap":false,"poster_url":""},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"1","slug":"1","filename":"One-Punch Man Phần 2 Tập 1 - Người Hùng Trở Lại","link_embed":"https://hd.1080phim.com/share/394868456436dbe743e4380554c0493a","link_m3u8":"https://hd.1080phim.com/20220415/3937_67c43727/index.m3u8"},{"name":"2","slug":"2","filename":"One-Punch Man Phần 2 Tập 2 - Quái Nhân","link_embed":"https://hd.1080phim.com/share/74c407e263578d03d02c1123aa730b52","link_m3u8":"https://hd.1080phim.com/20220415/3938_917f5f91/index.m3u8"},{"name":"3","slug":"3","filename":"One-Punch Man Phần 2 Tập 3 - Bắt Đầu Đi Săn","link_embed":"https://hd.1080phim.com/share/e5afb0f2dbc6d39b312d7406054cb4c6","link_m3u8":"https://hd.1080phim.com/20220415/3939_cb61983b/index.m3u8"},{"name":"4","slug":"4","filename":"One-Punch Man Phần 2 Tập 4 - Gậy Sắt","link_embed":"https://hd.1080phim.com/share/3fa146219c48a4393aace23e8f353125","link_m3u8":"https://hd.1080phim.com/20220415/3940_bdf476f6/index.m3u8"},{"name":"5","slug":"5","filename":"One-Punch Man Phần 2 Tập 5 - Đại Hội Võ Thuật","link_embed":"https://hd.1080phim.com/share/29e1c59be16c852670e3be302e8c303b","link_m3u8":"https://hd.1080phim.com/20220415/3941_b83899c4/index.m3u8"},{"name":"6","slug":"6","filename":"One-Punch Man Phần 2 Tập 6 - Quái Vật Nổi Dậy","link_embed":"https://hd.1080phim.com/share/ec36e2ba64f11c9e910e0353e0836d81","link_m3u8":"https://hd.1080phim.com/20220415/3942_cb324799/index.m3u8"},{"name":"7","slug":"7","filename":"One-Punch Man Phần 2 Tập 7 - Anh Hùng Lớp S","link_embed":"https://hd.1080phim.com/share/da21bae82c02d1e2b8168d57cd3fbab7","link_m3u8":"https://hd.1080phim.com/20220415/3943_944cefde/index.m3u8"},{"name":"8","slug":"8","filename":"One-Punch Man Phần 2 Tập 8 - Kẻ Mạnh Chinh Chiến","link_embed":"https://hd.1080phim.com/share/f9fe83f1ea3dd2108188fb7bf8aa5b3c","link_m3u8":"https://hd.1080phim.com/20220415/3944_c846c76f/index.m3u8"},{"name":"9","slug":"9","filename":"One-Punch Man Phần 2 Tập 9 - Rắc Rối Lớn Nhất","link_embed":"https://hd.1080phim.com/share/c3810d4a9513b028fc0f2a83cb6d7b50","link_m3u8":"https://hd.1080phim.com/20220415/3945_f0e9f359/index.m3u8"},{"name":"10","slug":"10","filename":"One-Punch Man Phần 2 Tập 10 - Công Lý Bủa Vây","link_embed":"https://hd.1080phim.com/share/71a8b2ffe0b594a5c1b3c28090384fd7","link_m3u8":"https://hd.1080phim.com/20220415/3946_6d6d7e96/index.m3u8"},{"name":"11","slug":"11","filename":"One-Punch Man Phần 2 Tập 11 - Phẩm Cách Của Mỗi Người","link_embed":"https://hd.1080phim.com/share/da4f21d00b1992e0b25f463b722dcc6a","link_m3u8":"https://hd.1080phim.com/20220415/3947_b2301d4b/index.m3u8"},{"name":"12","slug":"12","filename":"One-Punch Man Phần 2 Tập 12 - Dạy Dỗ Môn Đồ","link_embed":"https://hd.1080phim.com/share/6df182582740607da754e4515b70e32d","link_m3u8":"https://hd.1080phim.com/20220415/3948_859e6618/index.m3u8"}]}]}`
var api_p2_m011_parse = JSON.parse(api_p2_m011)

function m011_p2_t1()
{
    // console.log("Hello world")
    var tap = 1;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t2()
{
    // console.log("Hello world")
    var tap = 2;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t3()
{
    // console.log("Hello world")
    var tap = 3;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t4()
{
    // console.log("Hello world")
    var tap = 4;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t5()
{
    // console.log("Hello world")
    var tap = 5;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t6()
{
    // console.log("Hello world")
    var tap = 6;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t7()
{
    // console.log("Hello world")
    var tap = 7;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t8()
{
    // console.log("Hello world")
    var tap = 8;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t9()
{
    // console.log("Hello world")
    var tap = 9;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t10()
{
    // console.log("Hello world")
    var tap = 10;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t11()
{
    // console.log("Hello world")
    var tap = 11;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

function m011_p2_t12()
{
    // console.log("Hello world")
    var tap = 12;
    var getTap = api_p2_m011_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_p2_m011_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_p2_m011_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}

// m012 (5cm/s)
var api_m012 = `{"status":true,"msg":"","movie":{"modified":{"time":"2022-03-01T14:40:28.170Z"},"_id":"621e305c3fb21848d1974ba2","name":"5 Centimet trên giây","origin_name":"5 Centimeters Per Second","content":"<p>Thân thiết nhờ tình yêu đối với sách, hai học sinh lớp 4 từng quấn quít Tonoo Takaki và Shinohara Akari dần xa cách khi gia đình của cả hai chuyển nơi ở.</p>","type":"single","status":"completed","thumb_url":"https://img.hiephanhthienha.com/uploads/movies/5-centimet-tren-giay-thumb.jpg","is_copyright":"off","trailer_url":"","time":"1g 2ph","episode_current":"Full","episode_total":"1","quality":"HD","lang":"Vietsub","notify":"","showtimes":"","slug":"5-centimet-tren-giay","year":2007,"actor":["Mizuhashi Kenji","Kondou Yoshimi","Hanamura Satomi"],"director":[""],"category":[{"name":"Chính kịch"}],"country":[{"name":"Hàn Quốc"}],"chieurap":false,"poster_url":""},"episodes":[{"server_name":"Vietsub #1","server_data":[{"name":"Full","slug":"full","filename":"5 Centimet trên giây","link_embed":"https://kd.hd-bophim.com/share/bf8229696f7a3bb4700cfddef19fa23f","link_m3u8":"https://kd.hd-bophim.com/20220301/174_2e53df0e/index.m3u8"}]}]}`
var api_m01_parse = JSON.parse(api_m012)

function m012() {
    var tap = 1;
    var getTap = api_m01_parse.episodes[0].server_data[tap-1].name
    var getSubName = api_m01_parse.episodes[0].server_data[tap-1].filename
    var getLink = api_m01_parse.episodes[0].server_data[tap-1].link_embed
    var getBtn = document.querySelectorAll(`.btn-controller-${tap}`)
    var getMovieScreen = document.querySelectorAll(`.movie-screen`)
    var getMovieEpisode = document.querySelectorAll(`.movie-episode`)
    var getMovieSubName = document.querySelectorAll('.movie-sub-name')

    if (isMobile == false) {
        getMovieScreen[0].setAttribute("src", getLink)
        getBtn[0].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[0].innerText = getTap
        getMovieSubName[0].innerText = getSubName
    }

    else if (isMobile == true) {
        getMovieScreen[1].setAttribute("src", getLink)
        getBtn[1].className = `btn btn-success btn-controller-${tap} active`
        getMovieEpisode[1].innerText = getTap
        getMovieSubName[1].innerText = getSubName
    }
}