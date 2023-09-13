(function(){
  "use strict"
  document.getElementById("convert").addEventListener("submit", function(event) {
    event.preventDefault();

    var distance = parseFloat(document.getElementById("distance").value);
    var answer = document.getElementById("answer");
    if (distance) {
        var conversion = (distance * 1.609344).toFixed(3);
        answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
    } else {
        answer.innerHTML = "<h2>Bitte gib eine Zahl ein.</h2>";
    }
});
})();