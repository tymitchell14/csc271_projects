
var review1 = ["smileycookie", "4/5", "Hollow Knight: Silksong", "Fun and challenging","759"];
var review2 = ["john28", "3/5", "Split Fiction", "Fun game to play with a friend", "1000"];
var review3 = ["angrytoaster", "1/5", "Donkey Kong Bananza", "Thought it was boring", "427"];
var review4 = ["mrtaco", "5/5", "Mario Kart World", "Feels great to play!", "512"];
var review5 = ["emily42", "2/5", "Monster Hunter Wilds", "Bad performance issues", "678"];

var rand1 = Math.floor(Math.random() * 5);
var randomReview;

if(rand1 === 0) {
    randomReview = review1;
}
else if(rand1 === 1) {
    randomReview = review2;
}
else if(rand1 === 2) {
    randomReview = review3;
}
else if(rand1 === 3) {
    randomReview = review4;
}
else {
    randomReview = review5;
}

var featuredReview = document.querySelectorAll("p.featuredReviewEntry");

if(featuredReview.length > 0) {
    for(var i = 0; i < featuredReview.length; i++) {
        featuredReview[i].textContent += randomReview[i];
    }
}

var list1 = ["smileycookie", "Top 10 Games Of The Decade", "65489"];
var list2 = ["john28", "Essential Platformers", "57894"];
var list3 = ["angrytoaster", "Top 100 Must Plays", "5428"];
var list4 = ["mrtaco", "Top 15 Hardest Games", "1687"];
var list5 = ["emily42", "Games With Great Gameplay", "904"];

var rand2 = Math.floor(Math.random() * 5);
var randomList;

if(rand2 === 0) {
    randomList = list1;
}
else if(rand2 === 1) {
    randomList = list2;
}
else if(rand2 === 2) {
    randomList = list3;
}
else if(rand2 === 3) {
    randomList = list4;
}
else {
    randomList = list5;
}

var featuredList = document.querySelectorAll("p.featuredListEntry");

if(featuredList.length > 0) {
    var i = 0;
    while(i < featuredList.length) {
        featuredList[i].textContent += randomList[i];
        i++;
    }
}





