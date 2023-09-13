(function(){
  "use strict"
  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answer = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function(event) {
      var key = event.code;

      if (key === "KeyK") {
          convertType = "kilometers";
          heading.innerHTML = "Kilometers to Miles Converter";
          intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
      } else if (key === "KeyM") {
          convertType = "miles";
          heading.innerHTML = "Miles to Kilometers Converter";
          intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
      }
  });

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      var distance = parseFloat(document.getElementById("distance").value);

      if (distance) {
          const conversionFactor = convertType === "miles" ? 1.609344 : 0.621371192;
          const converted = (distance * conversionFactor).toFixed(3);
          const resultText = convertType === "miles"
              ? `${distance} miles converts to ${converted} kilometers`
              : `${distance} kilometers converts to ${converted} miles`;
          answer.innerHTML = `<h2>${resultText}</h2>`;
      } else {
          answer.innerHTML = `<h2>Please provide a number!</h2>`;
      }
  });
})() ;