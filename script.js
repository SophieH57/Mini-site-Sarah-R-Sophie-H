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
}
