 let product = [
    {
        "name": model1,
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

// let changeNumber = parseInt(document.getElementById("number").value, 10)
// let increment = document.getElementsByClassName("increment-btn");
// let decrement = document.getElementsByClassName("decrement-btn");

// num=0;
// function changeQty() {
//     if(increment-btn.onclick == true) {
//         num++;
//     }
//     if(decrement-btn.onclick == true) {
//         num--;
//     }
// };

// document.getElementById("decrement-button").onclick = increaseProduct();
// document.getElementById("increment-btn").onclick = decreaseProduct();

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

// function dropdown() {
//     document.getElementById("dropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = dropdown() {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// num=0;

function increaseProduct() {
    let options = []; //Array de inputs
    options = document.getElementsByClassName("number"); //Inputs por id number
    for (let i = 0; i < options.length; i++) {
        if (increaseProduct().clicked) {
            return false;
            
        }
        if (options[i].value >= 0) {
            options[i].value++;
        }
    } 
};


// function increaseProduct() {
//     document.getElementById("number").value++;
// }

// function decreaseProduct() {
//     if(document.getElementById("number").value > 0) {
//         document.getElementById("number").value--;
//     }
// };

function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}

function saveItem(){
    let itemqty = document.getElementById("number").value;
    localStorage.setItem("number", itemqty);
}

function redirectPage(){
    window.location.href = "products.html";
};



function saveProductName() {
  let itemChosen = document.getElementsByClassName("number").value;
    localStorage.setItem("value", itemChosen);
}

function saveProductPrice() {
    document.getElementsById("productPrice").value;
    localStorage.setItem("productPrice", productPrice);
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



