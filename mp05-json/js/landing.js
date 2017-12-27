/** 
    Justin Feldmann 
    CS 234 004
    10/19/2017
    File: landing.js
**/

var landingJsonObj = '{"title": "Justin Feldmann .::. Home",'
                        + '"a": ["Fall 2017 Schedule", "About", "Hobbies", "Album Reviews", "Welcome! Please log in.", "https://www.github.com/feldmann-justin"],'
                        + '"href": ["schedule.html", "about.html", "hobbies.html", "reviews.html", "login.html", "index.html", "https://www.github.com/feldmann-justin"],'
                        + '"src": ["../images/new_button_home.PNG", "../images/me_cougarstatue_tall.jpg"],'
                        + '"p": ["Welcome to the personal website of Justin Feldmann!<br> This is my second year in pursuing Computer Science at Southern Illinois University Edwardsville, and my 5th year of college overall.<br> I earned my Associate of Arts - Gen. Ed. at St. Charles Community College in 2016.<br> Given this, I suppose you could consider me a super senior...<br>",' 
                        + '"Office: Evergreen Hall, Rm. 440-B<br>",' 
                        + '"Email: jufeldm@siue.edu<br>",' 
                        + '"Phone: (636)555 - 5555<br>"],'
                        + '"h2": ["Contact Info", "Github Link"],'
                        + '"footer": "Copyright &copy; 2017 Justin Feldmann, CS-234.<br> All rights not quite reserved, so please don\'t sue me!"}'




//parsing the JSON object into a JavaScript object
var landingJSObj = JSON.parse(landingJsonObj);

//updating the title
var landingtitle = document.getElementsByTagName('title')[0];
landingtitle.innerHTML = landingJSObj.title;


//updating the anchor tags
var scheduleLink = document.getElementsByTagName('a')[0];
scheduleLink.innerHTML = landingJSObj.a[0];

var aboutLink = document.getElementsByTagName('a')[1];
aboutLink.innerHTML = landingJSObj.a[1];

var hobbiesLink = document.getElementsByTagName('a')[2];
hobbiesLink.innerHTML = landingJSObj.a[2];

var reviewsLink = document.getElementsByTagName('a')[3];
reviewsLink.innerHTML = landingJSObj.a[3];


//updating the 'href' tags for the links
document.getElementsByTagName('a')[0].setAttribute("href", landingJSObj.href[0]);

document.getElementsByTagName('a')[1].setAttribute("href", landingJSObj.href[1]);

document.getElementsByTagName('a')[2].setAttribute("href", landingJSObj.href[2]);

document.getElementsByTagName('a')[3].setAttribute("href", landingJSObj.href[3]);

document.getElementsByTagName('a')[4].getAttribute("href", landingJSObj.href[4]);

document.getElementsByTagName('a')[5].setAttribute("href", landingJSObj.href[5]);

document.getElementsByTagName('a')[6].setAttribute("href", landingJSObj.href[6]);


//updating the 'src' tags for the images
document.getElementsByTagName('img')[0].setAttribute("src", landingJSObj.src[0]);

document.getElementsByTagName('img')[1].setAttribute("src", landingJSObj.src[1]);

//updating the "welcome" paragraph
var welcomeParagraph = document.getElementsByTagName('p')[0];
welcomeParagraph.innerHTML = landingJSObj.p[0];

//updating the "office" paragraph
var office = document.getElementsByTagName('p')[1];
office.innerHTML = landingJSObj.p[1];

//updating the "email" paragraph
var email = document.getElementsByTagName('p')[2];
email.innerHTML = landingJSObj.p[2];

//updating the "phone" paragraph
var phone = document.getElementsByTagName('p')[3];
phone.innerHTML = landingJSObj.p[3];


//updating the "h2" tags
var contactinfo = document.getElementsByTagName('h2')[0];
contactinfo.innerHTML = landingJSObj.h2[0];

var githublink = document.getElementsByTagName('h2')[1];
githublink.innerHTML = landingJSObj.h2[1];


//updating the 'footer' tag
var footer = document.getElementsByTagName('footer')[0];
footer.innerHTML = landingJSObj.footer;


//updating the DOM for all pages' login button based on user info
var loginbtncontent = document.getElementById("loginbtn").children;

landingJSObj.a[4] = "Welcome, " + landingJsonObjUpdates.first + " " + landingJsonObjUpdates.last + "!";
loginbtncontent[0].innerHTML = landingJSObj.a[4];

// out.innerHTML = "Welcome, " + landingJsonObjUpdates.first + " " + landingJsonObjUpdates.last + "!";
