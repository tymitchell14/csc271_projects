var sign = "Capricorn";
var birth_month = "January";
var birthdate = 14;
var lucky_number = 5.5;
var description = "Capricorns represent time and responsibilty and are known to be very serious and have lots of self control."
var believe = false;

var my_sign_doc = document.getElementById("sign");
my_sign_doc.textContent = (sign);

var birthdays = document.getElementsByClassName("birthday");
birthdays[0].textContent = ("Birthday: " + birth_month + " " + birthdate + "th");

var lucky_numbers = document.getElementsByClassName("luckyNum");
lucky_numbers[0].textContent = ("Lucky Number: " + lucky_number);

var paragraphs = document.getElementsByTagName('p');
paragraphs[0].textContent = (description);
paragraphs[1].innerHTML = ("Do I believe in astrology?" + "<strong> " + false + "<strong>");

var capricorn_mood = 3;
var gemini1_mood = 4;
var gemini2_mood = 5;

var average_mood = (capricorn_mood + gemini1_mood + gemini2_mood) / 3;
paragraphs[2].textContent = ("Today's mood rating for Capricorn: " + capricorn_mood + 
    " out of 5. The average mood rating of Capricorn and Gemini is: " + average_mood);

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];


var my_sign = signs[0];
var partner_sign = signs[5];

paragraphs[3].textContent = ("My zodiac sign is: " + my_sign);
paragraphs[4].textContent = ("David's zodiac sign is: " + partner_sign);
paragraphs[5].textContent = ("Kenneth's zodiac sign is: " + partner_sign);

var horoscope_description = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.", 
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
]

var my_description = horoscope_description[0];
var partner1_description = horoscope_description[1];
var partner2_description = horoscope_description[2];

horoscope_description[3] = "Make sure to stay hydrated";

paragraphs[6].textContent = ("Capricorn Horoscope: " + my_description);
paragraphs[7].textContent = ("Gemini Horoscope: " + partner1_description);
paragraphs[8].textContent = ("Gemini Horoscope: " + partner2_description);


