let Products =
[
    {
        "name": "shirt",
        "size": ["small","medium"],
        "price": [10,15],
        "stocks": [5,5],
        "qty": [0,0]
    },
    {
        "name": "pant",
        "size": ["small","medium"],
        "price": [15,20],
        "stocks": [6,6],
        "qty": [0,0]
    }
]

localStorage.setItem("Products", JSON.stringify(Products));
console.log(Products);
// console.log(localStorage.getItem("Products"));

function startBox() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
}




