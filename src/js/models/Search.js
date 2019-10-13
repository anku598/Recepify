import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    try {
      const key = 'ad513ccec34ea70ea9d99fb687bf22f7';
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes
    } catch (err) {
      console.log(err);
    }
  }
}

//API Key: ad513ccec34ea70ea9d99fb687bf22f7
//https://www.food2fork.com/api/search