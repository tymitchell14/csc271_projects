

function displayReview() {
    var name = document.getElementById("gamename").value;
    var comment = document.getElementById("comment").value;
    var rating = "";
   
    var ratingInput = document.querySelectorAll('input.radioRating');
    var numstars = 0;

    for(var i = 0; i < ratingInput.length; i++) {
        console.log("hi");
        if(ratingInput[i].checked) {
            numstars = parseInt(ratingInput[i].value);
        }
    }
    
    for(var i = 0; i < 5; i++) {
        if(numstars > 0) {
            rating += "★";
            numstars--;
        }
        else {
            rating += "☆";
        }
    }

    document.getElementById("reviewName").textContent = name;
    document.getElementById("reviewRating").textContent = rating;
    document.getElementById("reviewComment").textContent = comment;
}

function displayInputInfo() {
    var info = document.getElementById("inputinfo");
    info.textContent = "Must be no larger than 40 characters";
    info.setAttribute("class", "warning");

}

function checkInput() {
    var nameInput = document.getElementById("gamename");
    var info = document.getElementById("inputinfo");

    if(nameInput.value.length > 40) {
        info.textContent = "ERROR: The name should be no larger than 40 characters"
        info.setAttribute("class", "error");
    }
    else {
        info.textContent = "";
    }
    

}

function submitMessage() {
    event.preventDefault();
    var message = document.getElementById("submissionMessage");
    message.textContent = "Review Successfully Posted!";

}


var previewButton = document.getElementById("review-preview");
previewButton.addEventListener('click', displayReview, false);

var nameInput = document.getElementById("gamename");
nameInput.addEventListener('focus', displayInputInfo, false);
nameInput.addEventListener('blur', checkInput, false);

var form = document.getElementById("review_form");
form.addEventListener('submit', submitMessage, false);





