document.addEventListener("DOMContentLoaded", function() {
    function updateStyle (index, jsonData) {
        const styleData = jsonData.styleData[index];
        document.getElementById("style-name").textContent = styleData["style-name"];
        document.getElementById("style-picture").querySelector("img").src = styleData["style-picture"];
        document.getElementById("style-about").textContent = styleData["style-about"];
        document.getElementById("opening-type").textContent = styleData["opening-type"];
    }
    function updateOpening (index) {
        const openingData = jsonData.openingData[index];
        document.getElementById("opening-name").textContent = openingData["opening-name"];
        document.getElementById("opening-picture").querySelector("img").src = openingData["opening-picture"];
        document.getElementById("opening-about").textContent = openingData["opening-about"];
        document.getElementById("opening-players").textContent = openingData["opening-players"];
    }

    let jsonData;
    fetch('data.json')
        .then(response => response.json())
        .then (data => {
            jsonData = data;
            if (window.location.pathname.includes("index.html")) {
                updateStyle(0);
                document.getElementById("aggressive").addEventListener("click", function() {updateStyle(1,jsonData);});
                document.getElementById("solid").addEventListener("click", function() {updateStyle(2,jsonData);});
                document.getElementById("overall").addEventListener("click", function() {updateStyle(3,jsonData);});
            }
            if (window.location.pathname.includes("openings.html")) {
                updateOpening(0)
                document.getElementById("kings-gambit").addEventListener("click", function() {updateOpening(1,jsonData);});
                document.getElementById("queens-gambit").addEventListener("click", function() {updateOpening(2,jsonData);});
                document.getElementById("ruy-lopez").addEventListener("click", function() {updateOpening(3,jsonData);});
            }
        });
});
