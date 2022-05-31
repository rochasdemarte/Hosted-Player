# **Hosted Player**

###### For english read [Click Here](https://github.com/rochasdemarte/Hosted-Player/blob/main/README.md)<br/>
Esse código faz parte do trabalho: **Hosted Player - Revisitando a obra "Hosted" *network performance for a swimmer* de Olia Lialina**.<br/>
Uma homenagem ao **trabalho de Lialina** disponível em: https://hosted.z21.web.core.windows.net/<br/>
<br/>
<br/>
![](https://github.com/rochasdemarte/Hosted-Player/blob/main/Hosted-Player.gif)
<br/><br/>
Você pode chamar de Performance, ou talvez de  Intervenção mas...<br/>
É meio que um tipo de web reprodutor de vídeo preguiçoso, sugerindo **novos meios de ver o trabalho da artista**.
<br/>
### Tente você mesmo:
- Apenas vá até o site do trabalho de **Lialina**: ["Hosted"](https://hosted.z21.web.core.windows.net/).<br/>
- E então insira o código abaixo no **`Console`** do **developer tools**.
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
#### **Hosted Player**: Revisitando a obra *network performance for a swimmer* **"Hosted"** de **Olia Lialina**. Pedro Rocha. 2022.
