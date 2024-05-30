import {getGameDetail} from './api.js'

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');

const nameParser = (arrayObj)=>{
    const res = arrayObj.map((e)=>e.name)
    return res.join(', ')
}

const initDetails =  async ()=>{
    const gameDetail = await getGameDetail(gameId)
    //name, background_image, description_raw, developers,publishers, esrb_rating,genres,platforms,released,website,tags
    const firstSection = document.getElementById("firstSection")

    const secondSection = document.getElementById("secondSection")


    firstSection.innerHTML=`
    <div class="detailImage" id="detailsImage">
            <img src="../assets/img/portrait_skeleton.jpg"  alt="Fall Out 4">
    </div>
    <div class="detailText" id="detailsText">
            <h1>${gameDetail.name} - ${gameDetail.released}  (${gameDetail.metacritic}/100)</h1>
            <p>Genres:${nameParser(gameDetail.genres)}</p>
            <h2>About it</h2>
            <p>${gameDetail.description_raw}</p>
            <h2>Tags</h2>
            <p> ${nameParser(gameDetail.tags)} </p>
            <div class="creditContainer">
                <div>
                    <h3>${nameParser(gameDetail.developers)}</h3>
                    <p>Developer</p>
                </div>
                <div>
                <h3>${nameParser(gameDetail.developers)}</h3>
                    <p>Production</p>
                </div>
                <div>
                <h3>${nameParser(gameDetail.publishers)}</h3>
                    <p>Distribution</p>
                </div>
            </div>
                   
    </div>`

    //Momentaneamente usaremos un video trailer de un juego cualquiera, asi como las redes. En proximas entregas creare una Api para cargar y consultar datos relevantes para la aplicacion final
    
    secondSection.innerHTML=`
    <div class="trailerContainer">
    <h2>Watch Trailer</h2>
    <img width="560" height="315" src="../assets/img/portrait_skeleton.jpg"  alt="SkeletonYoutube">
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/WbVfMVBTR7I?si=4ClAMHnc-QvoqSxq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
</div>
<div class="infoContainer">
    <div class="socialMedia">
        <ul>
            <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com/"><i class="fab fa-instagram" target="_blank"></i></a></li>
            <li><a href=""><i class="fas fa-link" target="_blank"></i></a></li>
        </ul>
    </div>
    <div class="info">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Platforms</strong></td>
                    <td>${nameParser(gameDetail.platforms.map((e)=>e.platform))}</td>
                </tr>
                <tr>
                    <td><strong>Last Update</strong></td>
                    <td> ${gameDetail.updated}</td>
                </tr>
                <tr>
                    <td><strong>ESRB Rating</strong></td>
                    <td> ${gameDetail.esrb_rating.name}</td>
                </tr>
                <tr>
                    <td><strong>Price</strong></td>
                    <td> $39.99</td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`
    .mainDetail {
        .detail {
      background: linear-gradient(to right top, #6d6969a7, #6d6969a7), url("${gameDetail.background_image}");
    }
  `, styleElement.sheet.cssRules.length);

}

initDetails()