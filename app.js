 let product = [
    {
        "name": shirt1,
        "stock": 10,
        "price": 5,
        "qty": "qty",
        "total": "total"
    },
    {
        "name": shirt2,
        "stock": 15,
        "price": 10,
        "qty": qty,
        "total": total
    },
    {
        "name": shirt3,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    },
    {
        "name": shirt4,
        "stock": 5,
        "price": 10,
        "qty": qty,
        "total": total
    },
    {
        "name": pant1,
        "stock": 10,
        "price": 5,
        "qty": qty,
        "total": total
    },
    {
        "name": pant2,
        "stock": 15,
        "price": 10,
        "qty": qty,
        "total": total
    },
    {
        "name": pant3,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    },
    {
        "name": pant4,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    }
];



function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}

function saveItem(){
    let itemqty = document.getElementById("number").value;
    localStorage.setItem("number", itemqty);
}



function saveProductName() {
  let itemChosen = document.getElementsByClassName("number").value;
    localStorage.setItem("value", itemChosen);
}

function saveProductPrice() {
    document.getElementsById("productPrice").value;
    localStorage.setItem("productPrice", productPrice);
}




