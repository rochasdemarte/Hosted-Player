# **Hosted Player**

###### Para ler em português [Clique Aqui](https://github.com/rochasdemarte/Hosted-Player/blob/main/PTBR.md)<br/>
This code is part of the Work: **Hosted Player - Revisiting Olia Lialina's network performance for a swimmer "Hosted"**.<br/>
A tribute to the **Lialina's work** available at: https://hosted.z21.web.core.windows.net/<br/>
<br/>
<br/>
![](https://github.com/rochasdemarte/Hosted-Player/blob/main/Hosted-Player.gif)
<br/><br/>
You can call it a Performance, or maybe an Intervention but...<br/>
It's a sort of a lazy web video player, suggesting **new ways of seeing the artist's work**.
<br/>
### Try it yourself:
- Just go to **Lialina's** work's website ["Hosted"](https://hosted.z21.web.core.windows.net/).<br/>
- And then enter the code below on the **`Console`** of the **developer tools**.
```javascript
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
```
#### **Hosted Player**: Revisiting **Olia Lialina's** network performance for a swimmer **"Hosted"**. Pedro Rocha. 2022.
