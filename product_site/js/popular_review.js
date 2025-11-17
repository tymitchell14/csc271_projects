//Ty Mitchell
//11/17/2025
//This script create a review object constructor and uses it to display two reviews with a like button feature


//review class stores username, game title, user rating, user comment, and the number of likes on a review
function review(username, title, rating, comment, likes) {
    this.username = username;
    this.title = title;
    this.rating = rating;
    this.comment = comment;
    this.likes = likes;

    //increments like counter by 1
    this.like = function() {
        this.likes += 1;
    };

    //outputs a string of how many stars and empty stars in this reviews rating
    this.getStars = function() {
        var starRating = "";
        starRating += "★".repeat(this.rating);
        starRating += "☆".repeat(5 - this.rating);
        return starRating;
    }
}

//using a reviewCard node and a review, updates the text content in the review card to match the review
function updateReview(reviewCard, review) {
    info = reviewCard.querySelectorAll("p");
    info[0].textContent = review.username;
    info[1].textContent = review.title;
    info[2].textContent = review.getStars();
    info[3].textContent = review.comment;
    info[4].textContent = review.likes + " Likes";

}


//create two reviews with the review class
var review1 = new review("john28", "Split Fiction", 3, "Fun game to play with a friend", 1000);
var review2 = new review("smileycookie", "Hollow Knight Silksong", 4, "Fun and challenging", 759);

var reviews = [review1, review2];

var likeButton1 = document.getElementById("likeButton1");
var likeButton2 = document.getElementById("likeButton2");

var reviewCards = document.querySelectorAll('.reviewCard');

//for every reviewCard found using the query selector, update the content to match one of the review objects
for(var i = 0; i < reviewCards.length; i++) {
    updateReview(reviewCards[i], reviews[i]);
}

//add event listeners for both review buttons that increment the like counter for their review by 1 and update them on screen
likeButton1.addEventListener('click', function() {
    review1.like();
    updateReview(reviewCards[0], reviews[0]);

}, false);

likeButton2.addEventListener('click', function() {
    review2.like();
    updateReview(reviewCards[1], reviews[1]);
}, false);


