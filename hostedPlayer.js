/*
This code is part of the Web performance: Hosted Player - Revisiting Olia Lialina's web performance for a swimmer "Hosted".
A tribute to the Lialina's work available at: https://hosted.z21.web.core.windows.net/

Try it yourself:
*/
let linksDiv = document.querySelector('#links');
let links = [];
linksDiv.childNodes.forEach(node => {
    links.push(node.innerText);
});
let player = document.createElement('img');
player.setAttribute('style', 'width: 50%; border-radius: 10px; border: 2px solid black');
linksDiv.setAttribute('style', 'text-align: center;');
linksDiv.prepend(player);
let speed = 750;
let count = 0;
document.body.setAttribute('style', 'transition: all 2s; background: #090909; color: fdfdfd;');
let title = document.createElement('h3');
title.setAttribute('style', 'color: white;');
linksDiv.prepend(title);
alert("Lights Off...");
linksDiv.scrollIntoView({behavior: "smooth"});
let swimming = setInterval(() => {
	player.src = links[count % links.length];
  title.innerText = player.src;
  count++;
}, speed);
