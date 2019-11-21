 let product = [
    {
        "name": "shirt1",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt2",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt3",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt4",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "pant1",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "pant2",
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },


];


function Product(name, stock, price, qty, total) {
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.qty = qty;
    this.total = total;
}

// function sumInputs() {
//     var arr = document.getElementsByName('qty');
//     var tot=0;
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             tot += parseInt(arr[i].value);
//     }
//     document.getElementById('total').value = tot;
// }

function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}

function saveItems(){
    let itemqty = document.getElementById("number1").value;
    localStorage.setItem("Fist-Input", itemqty);
}



function saveProductName() {
  let itemChosen = document.getElementsByClassName("number").value;
    localStorage.setItem("value", itemChosen);
}

function saveProductPrice() {
    document.getElementsById("productPrice").value;
    localStorage.setItem("productPrice", productPrice);
}




