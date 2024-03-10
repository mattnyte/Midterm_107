function updateStyle (index) {
    const styleData = jsonData.styleData[index];
    document.getElementById("style-name").textContent = styleData["style-name"];
    document.getElementById("style-picture").querySelector("img").src = styleData["style-picture"];
    document.getElementById("style-about").textContent = styleData["style-about"];
    document.getElementById("opening-type").textContent = styleData["opening-type"];
}

let jsonData;
fetch('data.json')
    .then(response => response.json())
    .then (data => {jsonData = data
        updateStyle(0);
        document.getElementById("aggressive").addEventListener("click", function() {updateStyle(1);});
        document.getElementById("solid").addEventListener("click", function() {updateStyle(2);});
        document.getElementById("overall").addEventListener("click", function() {updateStyle(3);});
    })