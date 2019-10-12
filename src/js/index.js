import axios from 'axios';

//API Key: ad513ccec34ea70ea9d99fb687bf22f7
//https://www.food2fork.com/api/search

async function getResult(query){
   try{
    const key = 'ad513ccec34ea70ea9d99fb687bf22f7';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes
    console.log(recipes);
   }
   catch(err){
       console.log(err);
   }
}

getResult('Burger');