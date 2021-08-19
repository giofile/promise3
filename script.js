const API_KEY = /

async function getData(){
    try{
    const apiUrl ='https://api.themoviedb.org/3/movie/550?api_key= /* key */'
   let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key= /* key */')
   const movies = await response json()
   return movies
    }
    catch (error) {
        console.log(error);
    }


   

}

getData()