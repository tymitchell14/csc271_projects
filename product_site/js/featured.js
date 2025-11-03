//Ty Mitchell
//10/28/25
//This script picks on random review and one random list to feature on the homepage




//generates a random number between 0 and range
function randomNum(range) { 
    var ranNum = Math.floor(Math.random() * range);
    return ranNum;
}

//function chooses an image and gives it a gold border
function featureImage() {
    var images = document.querySelectorAll("img.border");
    var rand = randomNum(images.length);
    randImg = images[rand];
    randImg.setAttribute('class', 'featured_border');
}

//picks one last out of 5 given a random number
function pickList(lists, rand) {
    //list with most likes is weighted higher
    if(rand === 0 || rand === 1) {
        return lists[0];
    }
    else if(rand === 2) {
        return lists[1];
    }
    else if(rand === 3) {
        return lists[2];
    }
    else if(rand === 4) {
        return lists[3];
    }
    else {
        return lists[4];
    }
}


var userReviews = [["john28", "3/5", "Split Fiction", "Fun game to play with a friend", "1000"],
    ["smileycookie", "4/5", "Hollow Knight: Silksong", "Fun and challenging","759"],
    ["emily42", "2/5", "Monster Hunter Wilds", "Bad performance issues", "678"],
    ["mrtaco", "5/5", "Mario Kart World", "Feels great to play!", "512"],
    ["angrytoaster", "1/5", "Donkey Kong Bananza", "Thought it was boring", "427"]];

var userLists = [["smileycookie", "Top 10 Games Of The Decade", "65489"],
    ["john28", "Essential Platformers", "57894"],
    ["angrytoaster", "Top 100 Must Plays", "5428"],
    ["mrtaco", "Top 15 Hardest Games", "1687"],
    ["emily42", "Games With Great Gameplay", "904"]];



//gets a random review 
var rand = randomNum(6);
var randomReview = pickList(userReviews, rand);

var featuredReview = document.querySelectorAll("p.featuredReviewEntry");

//loop through the nodelist and change information to correspond to randomly chosen review
if(featuredReview.length > 0) {
    for(var i = 0; i < featuredReview.length; i++) {
        featuredReview[i].textContent += randomReview[i];
    }
}


//gets a random list
rand = randomNum(6);
var randomList = pickList(userLists, rand);

var featuredList = document.querySelectorAll("p.featuredListEntry");

//loop through the nodelist and change information to correspond to randomly chosen list
if(featuredList.length > 0) {
    var i = 0;
    while(i < featuredList.length) {
        featuredList[i].textContent += randomList[i];
        i++;
    }
}

//give a game image a gold border
featureImage();





