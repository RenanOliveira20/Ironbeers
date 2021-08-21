import axios from "axios";

class jsonApi {
  constructor() {
    this.api = axios.create({
      baseURL: "https://api-drinks20.herokuapp.com",
    });
  }
  getBeers = async () => {
    try {
      const result = await this.api.get(`/products`);
      return result.data;
    } catch (e) {
      throw Error(e);
    }
  };

  getOneBeer = async (idBeer) => {
    try {
      const result = await this.api.get(`/products/${idBeer}`);
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
      index !==-1 ?
      cart[index].quantity += 1 :
      cart.push({ beerId: idBeer, quantity: 1 })
      
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart;
    } catch (e) {
      throw Error(e);
    }
  };
  deleteBeerCart = async (idBeer,idUser) => {
    try{
      const cart = await this.getCart(idUser);
      const index = cart.filter((e, index) => {
        let indexbeer = '' 
      if (e.beerId === idBeer) indexbeer = index
      return indexbeer
            })
      console.log (index, cart)
      cart.splice(index, 1)
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart
    }catch (e){
      throw Error(e)
    }
  }
}

export default new jsonApi();
