document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("backgroundButton");
    button.addEventListener("click", function() {
        var body = document.body;
        if (body.classList.contains("arthas-bg")) {
            body.classList.remove("arthas-bg");
            body.classList.add("dance-bg");
        } else {
            body.classList.remove("dance-bg");
            body.classList.add("arthas-bg");
        }
    });
});
