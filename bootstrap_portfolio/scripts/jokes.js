function getJoke() {
    var request = new XMLHttpRequest();
    //use this end point to get one joke
    request.open("GET", "https://official-joke-api.appspot.com/random_joke");
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        document.getElementById("movies").textContent = data.setup;
    }

    request.send();

}