function searchProduct() {
    let x = document.getElementById("search").value;

    if (x == "") {
        alert("Enter a product name");
    } else {
        alert("Searching for: " + x);
    }
}