## 01 - Monster Rolodex

This is the introduction project for react. Only used basics of React, nothing so special. On the other hand it's helpfull to understand how components works and how to split component. It's good practice to understand how states effect to components. When is the time components re-render. Also this project shows that React is very much better than vanilla Js when topic is seperate every thing from each other.

<b style='color:#dfdfdf; '>Main goal is:</b>


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

<b style='color:#dfdfdf; '>Main goal is:</b>

- Practice how to devide project to liitle components.
- Use Sass with component styles.
- Have fun

<img src="https://i.hizliresim.com/OkVgls.gif" alt="pokedex" border="0">

<h2>03 - Github finder </h2>
In this project I used couple of things. Before explaining project, all project made with React Hooks. First of all I used Github API for data I recived. Also I used Axios for http requests. My file structure is contains 3 main folder which are pages, context and components also I store my assests in assets folder. In component folder I managed all components. Context folder contains file about state management which I used contextApi.
This is a summary of project. 
<hr>

<h3>Installation</h3>
<b style='color:#dfdfdf; font-size:18px'>Step 1</b>
<br>
If you want to use this project you need to create `env.local` file for API keys in root.
</br>

<b style='color:#dfdfdf; font-size:18px'>Step 2</b>
<br>
Run `npm install` on your terminal

<b style='color:#dfdfdf; '>Main goal is:</b>

- Use React Hooks instead of class components and life cycle methods.
- Use contextApi
- Make real life project

<img src="https://i.hizliresim.com/jDq9n1.gif">


<h2>03 - Instaish</h2>
In this project I made photo upload site with real time loading. I used Firebase to store images and to use database for keep informaion about those images. In this project I also used Fremer Motion library for animations. I seperated components, firebase files and hooks. 
 Also you need to add your firebase config file to firebase folder, because I hide my Api information.
<hr>

<h3>Installation</h3>
<b style='color:#dfdfdf; font-size:18px'>Step 1</b>
<br>
If you want to use this project you need to create `firebaseConfig.js` in firebase folder and you need to add your firebase informations.
</br>

<b style='color:#dfdfdf; font-size:18px'>Step 2</b>
<br>
Run `npm install` on your terminal

<b style='color:#dfdfdf; '>Main goal is:</b>

- Use React Hooks instead of class components and life cycle methods.
- Try Fremer Motion
- Make real life project
- Have fun

<img src="https://i.ibb.co/VQdcvLk/instaissh.gif" alt="instaissh">
