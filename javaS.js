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


//  var myPic = document.getElementById('marylin') ;
//  myPic.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLicVfOWK2Odu1sI41FWZFi65Oxa-Oa2e4UQ&amp;usqp=CAU" alt="Scarlett Johansson – Stock Editorial Photo © s_bukley #15238157';
// //  document.body.appendChild(myPic);
// myPic.id = "yes-1";

var body = document.body;
var newImage = document.createElement('img');
newImage.src = 'https://media1.popsugar-assets.com/files/thumbor/f24SV83aQnTs0oyJZecR7GKBPY0/413x72:2216x1875/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/18/943/n/1922398/6c31632d5eebdeb9cb6252.86135421_/i/Jennifer-Lawrence.jpg'
newImage.style.height = '250px';
body.appendChild(newImage);