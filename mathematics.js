function toggleContent(element) {
    var content = element.querySelector(".content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}