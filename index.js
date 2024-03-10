function updateStyle (index) {
    const styleData = jsonData.styleData[index];
    document.getElementById("style-name").textContent = styleData["style-name"];
    document.getElementById("style-picture").querySelector("img").src = styleData["style-picture"];
    document.getElementById("style-about").textContent = styleData["style-about"];
    document.getElementById("opening-type").textContent = styleData["opening-type"];
}
function updateOpening (index) {
    const styleData = jsonData.styleData[index];
    document.getElementById("opening-name").textContent = styleData["opening-name"];
    document.getElementById("opening-picture").querySelector("img").src = styleData["opening-picture"];
    document.getElementById("opening-about").textContent = styleData["opening-about"];
    document.getElementById("opening-players").textContent = styleData["opening-players"];
}

let jsonData;
fetch('data.json')
    .then(response => response.json())
    .then (data => {
        jsonData = data;
        if (window.location.pathname.includes("index.html")) {
            updateStyle(0);
            document.getElementById("aggressive").addEventListener("click", function() {updateStyle(1);});
            document.getElementById("solid").addEventListener("click", function() {updateStyle(2);});
            document.getElementById("overall").addEventListener("click", function() {updateStyle(3);});
        }
        if (window.location.pathname.includes("openings.html")) {
            updateOpening(0)
            document.getElementById("kings-gambit").addEventListener("click", function() {updateOpening(1);});
            document.getElementById("queens-gambit").addEventListener("click", function() {updateOpening(2);});
            document.getElementById("ruy-lopez").addEventListener("click", function() {updateOpening(3);});
        }
    })