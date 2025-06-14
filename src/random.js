document.querySelector(".random-button").onclick = function() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    document.getElementById("result").textContent = String(Math.floor(Math.random() * (max - min + 1)) + min);
};
