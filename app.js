 
 =   [
    {
        "name": shirt1,
        "stock": 10,
        "price": 5,
        "qty": qty,
        "total": total
    }
    {
        "name": shirt2,
        "stock": 15,
        "price": 10,
        "qty": qty,
        "total": total
    }
    {
        "name": shirt3,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    }
    {
        "name": shirt4,
        "stock": 5,
        "price": 10,
        "qty": qty,
        "total": total
    }
    {
        "name": pant1,
        "stock": 10,
        "price": 5,
        "qty": qty,
        "total": total
    }
    {
        "name": pant2,
        "stock": 15,
        "price": 10,
        "qty": qty,
        "total": total
    }
    {
        "name": pant3,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    }
    {
        "name": pant4,
        "stock": 20,
        "price": 15,
        "qty": qty,
        "total": total
    }
];

let changeNumber = parseInt(document.getElementById("number").value, 10)
let increment = document.getElementsByClassName("increment-btn");
let decrement = document.getElementsByClassName("decrement-btn");

num=0;
function changeQty() {
    if(increment-btn.onclick == true) {
        num++;
    }
    if(decrement-btn.onclick == true) {
        num--;
    }
};


function addProduct {
    let incrementProduct = document.getElementsByClassName("");

}

function deleteProduct{
    let decreaseProduct = document.getElementsByClassName("");

}



function redirectPage(){
    window.location.href = "products.html";
}


function Product(name, price, qty, total) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.total = total;
}



// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
// if (!event.target.matches('.dropbtn')) {
// var dropdowns = document.getElementsByClassName("dropdown-content");
// var i;
// for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('show')) {
//     openDropdown.classList.remove('show');
//     }
// }
// }
// }



