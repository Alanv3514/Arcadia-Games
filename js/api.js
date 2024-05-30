
const API_KEY="19d2f99691b24c1bb7107015c081929b"

const getGameList = (page)=>{
    localStorage.setItem("ActualPage",(page))
        fetch(`https://rawg.io/api/games?key=${API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(data => localStorage.setItem("VGAMES",JSON.stringify(data)))
        .catch(error => alert(error));
}

const getGameDetail = async(id)=>{
    try
    {
        const res = await fetch(`https://rawg.io/api/games/${id}?key=${API_KEY}`)
        return res.json()
    }
    catch(error){
        alert(error)
    };
}

const anotherPage = (link)=>{
    fetch(link)
    .then(res => res.json())
    .then(data => localStorage.setItem("VGAMES",JSON.stringify(data)))
    .catch(error => alert(error));
}


export { getGameList, anotherPage, getGameDetail }
