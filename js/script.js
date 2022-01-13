let film_charge = false;
let film_ouvert = false;
let lego_charge = false;
let lego_ouvert = false;
let guitare_charge = false;
let guitare_ouvert = false;

function requeteTitre() {
    if (film_charge && film_ouvert) {
        $("div#reponse-film").hide();
        lego_ouvert = false;
        guitare_ouvert = false;
        film_ouvert = false;
    } else if (film_charge && !film_ouvert) {
        $("div#reponse-film").show();
        $("div#reponse-lego").hide();
        $("div#reponse-guitare").hide();
        lego_ouvert = false;
        guitare_ouvert = false;
        film_ouvert = true;
    } else {
        $(document).ready(function () {
            $.ajax({
                url: "https://apimovies.fr/api/movies/search?search=star wars",
                method: "GET",
                dataType: "json",
            })
                .done(function (response) {
                    let data = response.data;
                    for (i = 7; i <= 12; i++) {
                        console.log(data[i]);
                        let film = document.createElement("p");

                        let titreFilm = document.createElement("h1");
                        titreFilm.textContent = data[i]["title"];
                        film.appendChild(titreFilm);

                        let afficheFilm = document.createElement("img");
                        afficheFilm.src = data[i]["poster"];
                        afficheFilm.innerHTML = "";
                        film.appendChild(afficheFilm);

                        document.getElementById("reponse-film").appendChild(film);
                    }
                })
                .fail(function (error) {
                    alert("Echec de la requête. Infos:" + JSON.stringify(error));
                });
        });
        $("div#reponse-lego").hide();
        $("div#reponse-guitare").hide();
        $("div#reponse-film").show();
        lego_ouvert = false;
        guitare_ouvert = false;
        film_charge = true;
        film_ouvert = true;
    }
}

function requeteLego() {
    if (lego_charge && lego_ouvert) {
        $("div#reponse-lego").hide();
        film_ouvert = false;
        guitare_ouvert = false;
        lego_ouvert = false;
    } else if (lego_charge && !lego_ouvert) {
        $("div#reponse-film").hide();
        $("div#reponse-lego").show();
        $("div#reponse-guitare").hide();
        film_ouvert = false;
        guitare_ouvert = false;
        lego_ouvert = true;
    } else {
        $(document).ready(function () {
            $.ajax({
                url: "https://rebrickable.com/api/v3/lego/sets/?key=b5bb4272b434c0784685233e2c07595b",
                method: "GET",
                dataType: "json",
                key: "b5bb4272b434c0784685233e2c07595b",
            })
                .done(function (response) {
                    let data = response.results;

                    let lego = document.createElement("p");

                    let titreLego = document.createElement("h1");
                    titreLego.textContent = data[58]["name"];
                    lego.appendChild(titreLego);

                    let imageLego = document.createElement("img");
                    imageLego.src = data[58]["set_img_url"];
                    lego.appendChild(imageLego);

                    document.getElementById("reponse-lego").appendChild(lego);
                })
                .fail(function (error) {
                    alert("Echec de la requête. Infos:" + JSON.stringify(error));
                });
        });
        $("div#reponse-film").hide();
        $("div#reponse-guitare").hide();
        $("div#reponse-lego").show();
        film_ouvert = false;
        guitare_ouvert = false;
        lego_charge = true;
        lego_ouvert = true;
    }
}

function requeteGuitare() {
    if (guitare_charge && guitare_ouvert) {
        $("div#reponse-guitare").hide();
        film_ouvert = false;
        lego_ouvert = false;
        guitare_ouvert = false;
    } else if (guitare_charge && !guitare_ouvert) {
        $("div#reponse-film").hide();
        $("div#reponse-lego").hide();
        $("div#reponse-guitare").show();
        film_ouvert = false;
        lego_ouvert = false;
        guitare_ouvert = true;
    } else {
        $(document).ready(function () {
            $.ajax({
                url: "http://www.songsterr.com/a/ra/songs.json?pattern=Clapton",
                method: "GET",
                dataType: "json",
            })
                .done(function (response) {
                    let artiste = document.createElement("h1");
                    artiste.textContent = response[0]["artist"]["name"];
                    document.getElementById("reponse-guitare").appendChild(artiste);
                    $("div#reponse-guitare").css({ "background-image": "url('img/guitare.png')", "background-height": "600px", "height": "600px", "background-max-height": "600px" });

                    for (i = 0; i < 10; i++) {
                        let chanson = document.createElement("p");

                        let titreChanson = document.createElement("li");
                        titreChanson.textContent = response[i]["title"];
                        chanson.appendChild(titreChanson);
                        document.getElementById("reponse-guitare").appendChild(chanson);
                    }
                })
                .fail(function (error) {
                    alert("Echec de la requête. Infos:" + JSON.stringify(error));
                });
        });
        $("div#reponse-film").hide();
        $("div#reponse-lego").hide();
        $("div#reponse-guitare").show();
        film_ouvert = false;
        lego_ouvert = false;
        guitare_charge = true;
        guitare_ouvert = true;
    }
}

$(function () {
    setInterval(function () {
        $(".images").animate({ marginLeft: 0 }, 4000, function () {
            $(this).css({ marginLeft: 0 }).find("img:last").after($(this).find("img:first"));
        })

    }, 3000);
});


