function requeteTitre() {
  $(document).ready(function () {
    $.ajax({
      url: "https://apimovies.fr/api/movies/search?search=star wars",
      method: "GET",
      dataType: "json",
    })
      .done(function (response) {
        let data = response.data;
        console.log(data);
        for (i = 0; i < data.length; i++) {
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
  document.getElementById("reponse-lego").textContent = "";
  document.getElementById("reponse-guitare").textContent = "";
}

function requeteLego() {
  $(document).ready(function () {
    $.ajax({
      url: "https://rebrickable.com/api/v3/lego/sets/?key=b5bb4272b434c0784685233e2c07595b",
      method: "GET",
      dataType: "json",
      key: "b5bb4272b434c0784685233e2c07595b",
    })
      .done(function (response) {
        let data = response.results;
        console.log(response);

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
  document.getElementById("reponse-film").textContent = "";
  document.getElementById("reponse-guitare").textContent = "";
}

function requeteGuitare() {
  $(document).ready(function () {
    $.ajax({
      url: "http://www.songsterr.com/a/ra/songs.json?pattern=Clapton",
      method: "GET",
      dataType: "json",
    })
      .done(function (response) {
        console.log(response);
        let artiste = document.createElement("h1");
        artiste.textContent = response[0]["artist"]["name"];
        document.getElementById("reponse-guitare").appendChild(artiste);

        for (i = 0; i < response.length; i++) {
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
  document.getElementById("reponse-film").textContent = "";
  document.getElementById("reponse-lego").textContent = "";
}
