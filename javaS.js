var font = document.body;

font.style.fontFamily = "Arial, Sans-serif"

var namess = document.querySelectorAll("ul li");

document.getElementById("nickname").textContent = "Abraham";
document.getElementById("favorites").textContent = "VideoGames, exercise, music and more";
document.getElementById("hometown").textContent = "The Kingdom";

var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
   items[i].className = 'list-item';
}


var myPic = document.createElement('img') ;
myPic.src = 'images/12640533_190312767995910_3252117757400525000_o.jpeg';
myPic.style.height = "250px";
document.body.appendChild(myPic);
