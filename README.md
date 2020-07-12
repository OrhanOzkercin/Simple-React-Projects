## 01 - Monster Rolodex

This is the introduction project for react. Only used basics of React, nothing so special. On the other hand it's helpfull to understand how components works and how to split component. It's good practice to understand how states effect to components. When is the time components re-render. Also this project shows that React is very much better than vanilla Js when topic is seperate every thing from each other.

Main goal is:

- Understand how components works
- Learn render logic
- Use seperate components together

![Exchange Rate](https://media.giphy.com/media/h85lQBdpsO81aTSFP7/source.gif)

## 02 - Pokedex

This is another simple React Project. In this project I used file structure that I follow, also in css part I used Sass and try to implement BEM approach for that part. I used 3 different components. And this application for a small game actully that plays everytime you reflesh the page. You don't need to do anything.

<b>Components</b>

- <b>Pokegame: </b> In this component we are keeping our state. As this is a simple application I didn't fecth data from another API. There is a array named `DATA` in this component we are keeping our data in this array. Also we are creating two teams randomly and getting total experience of each team and deciding to winner and passing teams and winner status to `Pokedex` component.

- <b>Pokedex: </b> In this component we are taking team and winning status as a props and creating `Pokecard` component to show our Pokemon card. Also we are showing winner and loser in this component.

- <b>Pokecard: </b> In this component we are taking pokemon data with props and showing that pokemon with proper way

Main goal is:

- Practice how to devide project to liitle components.
- Use Sass with component styles.
- Have fun

![Exchange Rate](https://i.ibb.co/zVSVc8L/pokedex.gif)
