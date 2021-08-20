import axios from "axios";

class jsonApi {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
    });
  }
  getBeers = async () => {
    try {
      const result = await this.api.get("/beers");
      return result.data;
    } catch (e) {
      throw Error(e);
    }
  };

  getOneBeer = async (idBeer) => {
    try {
      const result = await this.api.get(`/beers/${idBeer}`);
      return result.data;
    } catch (e) {
      throw Error(e);
    }
  };

  getCart = async (idUser) => {
    try {
      const result = await this.api.get(`/users/${idUser}`);
      return result.data.cart;
    } catch (e) {
      throw Error(e);
    }
  };

  addBeerCart = async (idBeer, idUser) => {
    try {
      const cart = await this.getCart(idUser);
      let index = cart.findIndex((e) =>{
        return e.beerId === idBeer
      })
      index != -1 ?
      cart[index].quantity += 1 :
      cart.push({ beerId: idBeer, quantity: 1 })
      
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart;
    } catch (e) {
      throw Error(e);
    }
  };
  deleteBeerCart = async (indexBeer,idUser) => {
    try{
      const cart = await this.getCart(idUser);
      cart.splice(indexBeer, 1)
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart
    }catch (e){
      throw Error(e)
    }
  }
}

export default new jsonApi();
