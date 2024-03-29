var Products =
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


function startBox() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
    placeData ()
}

function placeData () {
    var object = JSON.parse(localStorage.getItem("Products"));
    for (var i = 0; i < object.length; i++) {
        document.getElementsByTagName("h2")[i].innerHTML=object[i].name+" "+object[i].size[object[i].position];
        if (document.getElementById("change-currency").value == "Price in Dollars") {
            document.getElementsByTagName("p")[i*2].innerHTML=object[i].price[object[i].position]+"€";
        }else{
            document.getElementsByTagName("p")[i*2].innerHTML=object[i].price[object[i].position]+"$"
        }   
        document.getElementsByClassName("size-btn")[i].value=object[i].size[object[i].position];
        document.getElementsByClassName("qty-choice")[i].innerHTML=object[i].qty[object[i].position];  
    }
}

function changeQty(event)
    {
        var object = JSON.parse(localStorage.getItem("Products"));
        var idevent = event.target.id;
        for (var i = 0; i < object.length; i++) {
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
        var object = JSON.parse(localStorage.getItem("Products"));
        var idevent = event.target.id;
        for (var i = 0; i < object.length; i++) {
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
        var object = JSON.parse(localStorage.getItem("Products"));
        document.getElementById("box2").style.display = "none";
        document.getElementById("box3").style.display = "inline-block";
        var products="";
        var quantity="";
        var total="";
        var grandtotal=0;
        for (var i = 0; i < object.length; i++) {
            for (var j = 0; j < object[i].qty.length; j++) {
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
        if (document.getElementById("change-currency").value == "Price in Dollars") {
            document.getElementsByClassName("datos")[3].innerHTML=grandtotal+"€";
        }else{
            document.getElementsByClassName("datos")[3].innerHTML=grandtotal+"$";
        }   
    }

    function changeCurrency()
    {
        var object = JSON.parse(localStorage.getItem("Products"));
        for (let i = 0; i < object.length; i++) {
            for (let j = 0; j < object[i].price.length; j++) {
                if(document.getElementById("change-currency").value == "Price in Dollars") {
                    object[i].price[j] = Math.floor(object[i].price[j]*1.11);
                    document.getElementById("change-currency").value = "Price in Euros";

                }else{
                    object[i].price[j] = Math.round(object[i].price[j]*0.9);
                    document.getElementById("change-currency").value = "Price in Dollars";

                }
            
            }
        }
        localStorage.setItem("Products", JSON.stringify(object));
        saveToCart();
        placeData();

    }


function returnToPage()
{
    document.getElementById("box3").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
}

function finish()
{
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "inline-block";
}


