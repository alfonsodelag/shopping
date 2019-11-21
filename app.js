 let product = [
    {
        "name": "shirt1",
        "id": 1, 
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt2",
        "id": 2,
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt3",
        "id": 3,
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "shirt4",
        "id": 4,
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "pant1",
        "id": 5,
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },
    {
        "name": "pant2",
        "id": 6,
        "stock": [],
        "price": [,,],
        "qty": [],
        "total": []
    },


];

var i=0; 

var nextButton = document.getElementById( "nextButton" );
function mostrar(i){

document.getElementById("name").innerHTML = product[i].name;
document.getElementById("id").innerHTML = questions[i].option[0].choice1;
document.getElementById("stock").innerHTML = questions[i].option[0].choice2;
document.getElementById("price").innerHTML = questions[i].option[0].choice2;
document.getElementById("qty").innerHTML = questions[i].option[0].choice3;
document.getElementById("total").innerHTML = questions[i].option[0].choice4;

}



// function Product(name, stock, price, qty, total) {
//     this.name = name;
//     this.stock = stock;
//     this.price = price;
//     this.qty = qty;
//     this.total = total;
// }

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

// function sumInputs() {
//     var arr = document.getElementsByName('qty');
//     var tot=0;
//     for(var i=0;i<arr.length;i++) {
//         if(arr[i].value)
//             tot += arr[i].value;
//     }
//     console.log(sumInputs);
//     document.getElementById('total').value = tot;
// }


function saveInput() {
    let saveInput = document.getElementById("number1").value;
    localStorage.setItem("qty", saveInput);
    console.log(saveInput, 'saveInput');
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




