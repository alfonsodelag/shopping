// Our Json for storing data about our products.
let Products =
[
    {
        "name": "shirt",
        "size": ["small","medium", "large"],
        "price": [10,15,20],
        "stocks": [5,5,8],
        "qty": [0,0,0],
        "position": 0
    },
    {
        "name": "pant",
        "size": ["small","medium"],
        "price": [15,20],
        "stocks": [6,7],
        "qty": [0,0],
        "position": 0
    }
]


localStorage.setItem("Products", JSON.stringify(Products));


//Function used to move from Box1 to Box2 in the HTML
function startBox() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
    placeData ()
}

function placeData () {
    let object = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < object.length; i++) {
        document.getElementsByTagName("h2")[i].innerHTML=object[i].name+" "+object[i].size[object[i].position];
        document.getElementsByTagName("p")[i*2].innerHTML=object[i].price[object[i].position]+"€";
        document.getElementsByClassName("size-btn")[i].value=object[i].size[object[i].position];
        document.getElementsByClassName("qty-choice")[i].innerHTML=object[i].qty[object[i].position];  
    }
}


function changeQty(event)
    {
        let object = JSON.parse(localStorage.getItem("Products"));
        var idevent = event.target.id;
        for (let i = 0; i < object.length; i++) {
            if (idevent == "plus-"+i && object[i].qty[object[i].position] != object[i].stocks[object[i].position]) {
                object[i].qty[object[i].position]=object[i].qty[object[i].position]+1;
            }else if(idevent=="minus-"+i && object[i].qty[object[i].position] != 0){
                object[i].qty[object[i].position]=object[i].qty[object[i].position]-1;
            } 
        }
        localStorage.setItem("Products", JSON.stringify(object));
       
        placeData ()
    }

    function changeSize(event)
    {
        let object = JSON.parse(localStorage.getItem("Products"));
        var idevent = event.target.id;
        for (let i = 0; i < object.length; i++) {
            if (idevent == "size-"+i) {
                object[i].position=object[i].position+1;
                if (object[i].position > object[i].size.length-1) {
                    object[i].position=0;
                }
            }
        }
        localStorage.setItem("Products", JSON.stringify(object));
        placeData ()
    }

    function saveToCart()
    {
        let object = JSON.parse(localStorage.getItem("Products"));
        document.getElementById("box2").style.display = "none";
        document.getElementById("box3").style.display = "inline-block";
        var products="";
        var quantity="";
        var total="";
        var grandtotal=0;
        for (let i = 0; i < object.length; i++) {
            for (let j = 0; j < object[i].qty.length; j++) {
                if (object[i].qty[j] > 0) {
                    products=products+object[i].name+" "+object[i].size[j]+"<br>";
                    quantity=quantity+object[i].qty[j]+"<br>";
                    total=total+object[i].qty[j]*object[i].price[j]+"<br>";
                    grandtotal=grandtotal+object[i].qty[j]*object[i].price[j];
                }
            }   
        }

        document.getElementsByClassName("datos")[0].innerHTML=products;
        document.getElementsByClassName("datos")[1].innerHTML=quantity;
        document.getElementsByClassName("datos")[2].innerHTML=total;
        document.getElementsByClassName("datos")[3].innerHTML=grandtotal+"€";
    }

    function changeCurrency()
    {
        let object = JSON.parse(localStorage.getItem("Products"));
        document.getElementById("box2").style.display = "none";
        document.getElementById("box3").style.display = "inline-block";
        var products="";
        var quantity="";
        var total="";
        var grandtotal=0;
        for (let i = 0; i < object.length; i++) {
            for (let j = 0; j < object[i].qty.length; j++) {
                if (object[i].qty[j] > 0) {
                    products=products+object[i].name+" "+object[i].size[j]+"<br>";
                    quantity=quantity+object[i].qty[j]+"<br>";
                    total=total+object[i].qty[j]*object[i].price[j]+"<br>";
                    grandtotal=grandtotal+object[i].qty[j]*object[i].price[j];
                }
            }   
        }

        document.getElementsByClassName("datos")[0].innerHTML=products;
        document.getElementsByClassName("datos")[1].innerHTML=quantity;
        document.getElementsByClassName("datos")[2].innerHTML=total;
        document.getElementsByClassName("datos")[3].innerHTML=grandtotal*1.2+"$";
    }



function returnToPage()
{
    document.getElementById("box3").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
}

//This function is used to show you the "Thank you for your purchase" page.
function finish()
{
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "inline-block";
}


