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