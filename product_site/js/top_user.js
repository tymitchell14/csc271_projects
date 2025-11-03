//Ty Mitchell
//10/26/2025
//This is a script that displays the top 5 users of the website on the homepage

//changes header name
function header() {
    var username_doc = document.getElementById("top_username");
    username_doc.textContent = ("Top 5 Users");
}

var userList = ["smileycookie", "john28", "angrytoaster", "mrtaco", "emily42"];
var reviewLikesList = [759, 1000, 427, 512, 678];
var listLikesList = [65489, 57894, 5438, 1687, 904];

header();

//user a query selector to display the site's top user in the correct spot
//store the username and add the listlikes and reviewlikes to display them
top_user_doc = document.querySelector(".top_user");
var username1 = userList[0];
var userlikes1 = reviewLikesList[0] + listLikesList[0];
top_user_doc.innerHTML = ("<strong>" + username1 + "</strong>: " + userlikes1);

//use getElementsByClassName to display the second place winners in the correct spot
second_place_doc = document.getElementsByClassName("second_place");

//store the username and add the listlikes and reviewlikes to display them
var username2 = userList[1];
var userlikes2 = reviewLikesList[1] + listLikesList[1];
second_place_doc[0].innerHTML = ("<strong>" + username2 + "</strong>: " + userlikes2);

//store the username and add the listlikes and reviewlikes and display them
var username3 = userList[2];
var userlikes3 = reviewLikesList[2] + listLikesList[2];
second_place_doc[1].innerHTML = ("<strong>" + username3 + "</strong>: " + userlikes3);

//use getElementsByClassName to display the third place winners in the correct spot
third_place_doc = document.getElementsByClassName("third_place");

//store the username and add the listlikes and reviewlikes and display them
var username4 = userList[3];
var userlikes4 = reviewLikesList[3] + listLikesList[3];
third_place_doc[0].innerHTML = ("<strong>" + username4 + "</strong>: " + userlikes4);

//store the username and add the listlikes and reviewlikes and display them
var username5 = userList[4];
var userlikes5 = reviewLikesList[4] + listLikesList[4];
third_place_doc[1].innerHTML = ("<strong>" + username5 + "</strong>: " + userlikes5);

//use getElementsByTagName to write a message thanking these users for their posts
var message_doc = document.getElementsByTagName("h5");
message_doc[0].textContent = ("Thanks to these users for their valuable contributions!")
















