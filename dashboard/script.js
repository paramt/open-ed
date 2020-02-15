window.onload = function() {
    document.getElementById("name").innerHTML = " " + title(localStorage.getItem("name"));
}

const title = string => {
    return string.charAt(0).toUpperCase() + string.substring(1);
}