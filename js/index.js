import { getGameList } from "./api.js";


let statusTrend = 0;
let actualPage = 1;
let actualGames = {}

localStorage.setItem("ActualPage",(actualPage))


const fillCards = (vgames) => {

  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = '';
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  vgames.forEach((game, index) => {
    const radioInputGame = document.createElement('input');
    const labelGame = document.createElement('label');
    const divRowGame = document.createElement('div');
    const aGame = document.createElement('a');
    const h4Game = document.createElement('h4');

    radioInputGame.setAttribute('type', 'radio');
    radioInputGame.setAttribute('name', 'slide');
    radioInputGame.setAttribute('id', 'game_' + game.id);

    labelGame.setAttribute('for', 'game_' + game.id);
    labelGame.setAttribute('class', 'game');
    divRowGame.setAttribute('class', 'row');
    aGame.setAttribute('href', './pages/details.html?id=' + game.id);
    aGame.setAttribute('class', 'description');

    h4Game.textContent = game.name;
    
    aGame.appendChild(h4Game);
    divRowGame.appendChild(aGame);
    labelGame.appendChild(divRowGame);
    cardContainer.appendChild(radioInputGame)
    cardContainer.appendChild(labelGame);

    styleElement.sheet.insertRule(`
      .game[for="game_${game.id}"] {
        background-image: url('${game.background_image}');
        background-size: cover;
        background-position: 500px;
        border-radius: .75rem;
        cursor: pointer;
        overflow: hidden;
        border-radius: 1rem;
        margin: 0 10px;
        display: flex;
        align-items: flex-end;
        transition: .6s cubic-bezier(.28, -0.03, 0, .99);
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
      }
    `, styleElement.sheet.cssRules.length);

  });
}




if (localStorage.getItem("VGAMES")) {
  actualGames = JSON.parse(localStorage.getItem("VGAMES"))
  actualPage = localStorage.getItem("ActualPage")
  fillCards(actualGames.results)
}
else {
  getGameList(actualPage);
  actualGames = JSON.parse(localStorage.getItem("VGAMES"))
  actualPage = localStorage.getItem("ActualPage")
  fillCards(actualGames.results)
}


const fixTranslateContainer = (statusTrend)=>{

  const trendWrapper = document.getElementById("cardContainer");
  trendWrapper.style.transition = 'transform 0.5s ease-out';

  switch (statusTrend) {
    case -1:
      if(actualPage>1){
      trendWrapper.style.transform = 'translateX(25%)';
    }
      break;
    case 0:
      trendWrapper.style.transform = 'translateX(0%)';
      break;
    case 1:
      trendWrapper.style.transform = 'translateX(-25%)';
      break;
  }
}

const trendCards = (index) => {
  statusTrend += index;

  console.clear()
  if (statusTrend > 1)  {
    actualPage++
    statusTrend = -1;
    localStorage.setItem("ActualPage",(actualPage))
    getGameList(actualPage);
    actualGames = JSON.parse(localStorage.getItem("VGAMES"))
    fillCards(actualGames.results)
  } else if (statusTrend < -1  && actualPage>1) {
    statusTrend = 1;
    actualPage--
    localStorage.setItem("ActualPage",(actualPage))
    getGameList(actualPage);
    actualGames = JSON.parse(localStorage.getItem("VGAMES"))
    fillCards(actualGames.results)
  }
  else if(statusTrend < -1  && actualPage==1)
  {
    statusTrend = -1;
    actualPage=1
    localStorage.setItem("ActualPage",(actualPage))
  }

  fixTranslateContainer(statusTrend)
}




document.getElementById('backButton').addEventListener('click', () => trendCards(-1));
document.getElementById('forwardButton').addEventListener('click', () => trendCards(1));

