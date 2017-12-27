/** 
    Justin Feldmann 
    CS 234 004
    10/27/2017
    File: login_validation.js
**/

//global variables containing boolean value for validation
var validUser = false;
var validPass = false;
var realUser = false;
var realPass = false;
var userIndex;
var passIndex;

//getting DOM nodes for form tag and for individual input tags
var loginForm = document.getElementById("commentlogin");
var userInput = document.querySelector("#user");
var userHint = document.querySelector("#userhint");
var passHint = document.querySelector("#passhint");
var passInput = document.querySelector("#pass");
var submitBtn = document.querySelector("input[type=submit]");
var loginBtn = document.getElementById("loginbtn");

//var to hold parsed JSON object
var usersObjectJS;

//var to hold XMLHttpRequest object
var requestToServer;

//adding event listeners to input fields and login button
userInput.addEventListener("input", checkUser);
passInput.addEventListener("input", checkPass);



//authenticating based on user info in JSON object from users.json
function processForm(u, p) {

    submitBtn.addEventListener("click", function (event) {
        
        if (!(validUser) || !(validPass)) {
    
            event.preventDefault();
            return false;
    
        }
        else if (validUser && validPass) { //checks for logins by authentic users
            
            userInfoInput = u.value + " " + p.value;
            var i;
            for (i = 0; i < usersObjectJS.eID.length; i++) {
                userInfoJson = usersObjectJS.eID[i] + " " + usersObjectJS.pass[i];
                if (userInfoInput === userInfoJson) {
                    
                    realPass = realUser = true;
                    break;

                }
            }

            // for (eIDProperty in usersObjectJS.eID) {
                
            //     if ((a.value === eIDProperty) && (g === r)) {
            //         realUser = true;
            //         break;
            //     }
            //     else {
            //         realUser = false;
                    
            //     }
                    
      
            // }
    
            // for (passProperty in usersObjectJS.pass) {
                
            //     if ((b.value === passProperty) && (g === r)) {
            //         realPass = true;
            //         break;
            //     }
                    
            //     else {
            //         realPass = false;
            //     }
                    
                
            // }
          
                    
            if (!(realUser) || !(realPass)) {
    
                event.preventDefault();
                userHint.innerHTML = "Invalid username or password. Please try again.";
                userHint.style.color = "red";
                passHint.style.display = "none";
    
            }
            else if (realUser && realPass) {
                
                //redirect user to index
                // submitBtn.addEventListener("submit", function() {
                //window.location.assign("https://sites.cs.siue.edu/~jufeldm/mp05-json/html/index.html");
                // });
                
                var userInfoStringForAlert = "";

                for (j = 0; j < usersObjectJS.first.length; j++) {

                    userInfoStringForAlert += usersObjectJS.first[j] + "\n" + usersObjectJS.last[j] + "\n" + usersObjectJS.eID[j] + "\n" + usersObjectJS.pass[j] + "\n\n";

                }
                alert(userInfoStringForAlert);
    
            }
    
        }
    }
    
    );

}

//function that will have the JSON object be parsed if the request is successfully sent
function loadJSONDataHandler() {

    requestToServer = new XMLHttpRequest();

    requestToServer.addEventListener("load", parseJSONDataHandler);
    
    requestToServer.open("GET", "../data/users.json", true);
    
    requestToServer.send();

}

loadJSONDataHandler();

function parseJSONDataHandler() {

    if (this.status == 200) {
        
            usersObjectJS = JSON.parse(requestToServer.responseText);
            processForm(userInput, passInput);
        
        }

}

//validation based on correct pattern for user/pass
function checkUser() {
    
    var userInputValue = userInput.value;
    re = /^[a-z]{7}@siue.edu$/;
    
    validUser = re.test(userInputValue);

    if (!validUser) {

        userInput.style.borderColor = "red";
        userHint.style.color = "red";

    }
    else{
        
        userInput.style.borderColor = "green";
        userHint.style.color = "green";

    }

}

function checkPass() {

   var userPassValue = passInput.value;
    re = /^([0-9]{2})([^0-9]{8})([0-9]{2})$/;
    validPass = re.test(userPassValue);
    
    if (!validPass) {

        passInput.style.borderColor = "red";
        passHint.style.color = "red";

    }
    else {
        
        passInput.style.borderColor = "green";
        passHint.style.color = "green";

    }
}