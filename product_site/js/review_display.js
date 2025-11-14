

//function to display review given the game name, rating, and comment the user has inputted 
function displayReview() {
    //get the name and comment from the HTML elements
    var name = document.getElementById("gamename").value;
    var comment = document.getElementById("comment").value;
    var rating = "";

    var ratingInput = document.querySelectorAll('input.radioRating');
    var numstars = 0;

    //find which rating radio button was selected
    for(var i = 0; i < ratingInput.length; i++) {
        if(ratingInput[i].checked) {
            numstars = parseInt(ratingInput[i].value);
        }
    }
    
    //create a string containing the number of stars in the rating
    for(var i = 0; i < 5; i++) {
        if(numstars > 0) {
            rating += "★";
            numstars--;
        }
        else {
            rating += "☆";
        }
    }

    //update the output inside of the preview box
    document.getElementById("reviewName").textContent = name;
    document.getElementById("reviewRating").textContent = rating;
    document.getElementById("reviewComment").textContent = comment;
}

//function that displays a message informing the user of the character limit
function displayInputInfo() {
    var info = document.getElementById("inputinfo");
    info.textContent = "Must be no larger than 40 characters";
    info.setAttribute("class", "warning");

}

//displays an error message if character limit is greater than 40
function checkInput() {
    var nameInput = document.getElementById("gamename");
    var info = document.getElementById("inputinfo");

    if(nameInput.value.length > 40) {
        info.textContent = "ERROR: The name should be no larger than 40 characters"
        info.setAttribute("class", "error");
    }
    //if character limit is not exceeded, clear the message displayed by displayInputInfo()
    else {
        info.textContent = "";
    }
    

}

//when the review form is submitted, prevent the default behavior and output a message telling the user their review has been posted
function submitMessage() {
    event.preventDefault();
    var message = document.getElementById("submissionMessage");
    message.textContent = "Review Successfully Posted!";

}

//add an event listener for the review preview when the preview button is clicked
var previewButton = document.getElementById("review-preview");
previewButton.addEventListener('click', displayReview, false);

var nameInput = document.getElementById("gamename");
//add an event listener that displays character limit when users click on the game name textbox
nameInput.addEventListener('focus', displayInputInfo, false);

//add an event listener that displays an error message when character limit for game name is exceeded
nameInput.addEventListener('blur', checkInput, false);

//add an event listener to the post review form submit letting the user know their review has been posted
var form = document.getElementById("review_form");
form.addEventListener('submit', submitMessage, false);





