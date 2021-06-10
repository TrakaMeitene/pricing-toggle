

function myFunc() {
    var ball = document.getElementById("ball1");
    var toggle = document.getElementById("toggle1");
    if (document.getElementById("price").innerHTML === "19.99") 
    
    { ball.classList.add("show");
    toggle.classList.add("color");
        document.getElementById("price").innerHTML = "199.99 ";
        document.getElementById("price1").innerHTML = " 249.99";
        document.getElementById("price2").innerHTML = " 399.99";
      
    } else {
        ball.classList.remove("show");
        document.getElementById("price").innerHTML = "19.99";
        document.getElementById("price1").innerHTML = "24.99";
        document.getElementById("price2").innerHTML = "39.99";
        toggle.classList.remove("color");
    }
}