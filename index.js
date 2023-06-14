
// to test that .js file is connected to .html file
//alert("working");

//initial value of count
var count = 0;

//event listener when decrease is clicked
document.getElementById("dec").addEventListener("click", function() {
    count--;
    document.getElementById("counter").innerHTML=count;
    if (count > 0) {
        document.querySelector("#counter").style.color = "green";
    }
    else if(count < 0) {
        document.querySelector("#counter").style.color = "red";
    }
    else{
        document.querySelector("#counter").style.color = "black";
    }
});

//event listener when increase is clicked
document.getElementById("inc").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerHTML=count;
    if (count > 0) {
        document.querySelector("#counter").style.color = "green";
    }
    else if(count < 0) {
        document.querySelector("#counter").style.color = "red";
    }
    else{
        document.querySelector("#counter").style.color = "black";
    }
});


//event listener when reset is clicked
document.getElementById("res").addEventListener("click", function() {
    count = 0;
    document.getElementById("counter").innerHTML=count;
    document.querySelector("#counter").style.color = "black";
    
});



/*
//effective js:


var count = 0;
//selecting the counter value element and storinhg it in a variable
const value = document.querySelector("#counter");
//selecting all buttons at once
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) { //setting a function for each button
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;  //getting the value of button which is clicked and storing the classList in a variable/constant
        if(styles.contains("decrease")) {  //getting class of button clicked and setting operation on count accordingly
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if(count < 0) {
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }
        value.textContent=count;  //setting the value of count 
    });
});

*/

