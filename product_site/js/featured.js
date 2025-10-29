//Ty Mitchell
//10/28/25
//This script picks on random review and one random list to feature on the homepage

//each list contains a different user review entry
var review1 = ["smileycookie", "4/5", "Hollow Knight: Silksong", "Fun and challenging","759"];
var review2 = ["john28", "3/5", "Split Fiction", "Fun game to play with a friend", "1000"];
var review3 = ["angrytoaster", "1/5", "Donkey Kong Bananza", "Thought it was boring", "427"];
var review4 = ["mrtaco", "5/5", "Mario Kart World", "Feels great to play!", "512"];
var review5 = ["emily42", "2/5", "Monster Hunter Wilds", "Bad performance issues", "678"];

//generate random number between 0 and 5
var rand1 = Math.floor(Math.random() * 6);
var randomReview;

//each random number corresponds to choosing a different review
if(rand1 === 0) {
    randomReview = review1;
}
//review with most likes is weighted higher
else if(rand1 === 1 || rand1 === 2) {
    randomReview = review2;
}
else if(rand1 === 3) {
    randomReview = review3;
}
else if(rand1 === 4) {
    randomReview = review4;
}
else {
    randomReview = review5;
}

//create a nodelist of the paragraphs for the featured review
var featuredReview = document.querySelectorAll("p.featuredReviewEntry");

//make sure list is not empty before looping
if(featuredReview.length > 0) {
    //loops through the nodelist and adds information from the chosen review
    for(var i = 0; i < featuredReview.length; i++) {
        featuredReview[i].textContent += randomReview[i];
    }
}

//each list contains a different user list entry
var list1 = ["smileycookie", "Top 10 Games Of The Decade", "65489"];
var list2 = ["john28", "Essential Platformers", "57894"];
var list3 = ["angrytoaster", "Top 100 Must Plays", "5428"];
var list4 = ["mrtaco", "Top 15 Hardest Games", "1687"];
var list5 = ["emily42", "Games With Great Gameplay", "904"];

//generate random number between 0 and 5
var rand2 = Math.floor(Math.random() * 6);
var randomList;

//each random number corresponds to a different list
//list with most likes is weighted higher
if(rand2 === 0 || rand2 === 1) {
    randomList = list1;
}
else if(rand2 === 2) {
    randomList = list2;
}
else if(rand2 === 3) {
    randomList = list3;
}
else if(rand2 === 4) {
    randomList = list4;
}
else {
    randomList = list5;
}

//create a nodelist of the paragraphs for the featured list
var featuredList = document.querySelectorAll("p.featuredListEntry");

//check to make sure nodelist is not empty
if(featuredList.length > 0) {
    //create a counter variable called i initialized to 0
    var i = 0;
    //create a loop that goes for as long as i is less than the length of the nodelis
    while(i < featuredList.length) {
        //every iteration
        featuredList[i].textContent += randomList[i];
        i++;
    }
}





