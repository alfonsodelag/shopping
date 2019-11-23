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
console.log(Products);
// console.log(localStorage.getItem("Products"));

function startBox() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "inline-block";
    placeData ()
}

function placeData () {
    let object = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < object.length; i++) {
        document.getElementsByTagName("h2")[i].innerHTML=object[i].name+" "+object[i].size[object[i].position];
        document.getElementsByTagName("p")[i*2].innerHTML=object[i].price[object[i].position];
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
                console.log("hola")
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
        var productos="";
        var cantidad="";
        var total="";
        var totalc=0;
        for (let i = 0; i < object.length; i++) {
            for (let j = 0; j < object[i].qty.length; j++) {
                if (object[i].qty[j] > 0) {
                    productos=productos+object[i].name+" "+object[i].size[j]+"<br>";
                    cantidad=cantidad+object[i].qty[j]+"<br>";
                    total=total+object[i].qty[j]*object[i].price[j]+"<br>";
                    totalc=totalc+object[i].qty[j]*object[i].price[j];
                }
            }   
        }

        document.getElementsByClassName("datos")[0].innerHTML=productos;
        document.getElementsByClassName("datos")[1].innerHTML=cantidad;
        document.getElementsByClassName("datos")[2].innerHTML=total;
        document.getElementsByClassName("datos")[3].innerHTML=totalc;
    }

function 

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


