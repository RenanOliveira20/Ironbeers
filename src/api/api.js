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

  addBeerCart = async (idBeer, idUser, quantityBeer = 1) => {
        try {
      const cart = await this.getCart(idUser);
      let index = cart.findIndex((e) =>{
        return e.beerId === idBeer
      })
      index !==-1 ?
      cart[index].quantity += quantityBeer :
      cart.push({ beerId: idBeer, quantity: quantityBeer})
      
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart;
    } catch (e) {
      throw Error(e);
    }
  };
  handleQuantity = async (id, quantity, idUser) =>{
    try {
      const cart = await this.getCart(idUser);
      let index = cart.findIndex((e) =>{
        return e.beerId === id
      })
      if (index !== -1)return cart[index].quantity = quantity
  }catch (e) {
    throw Error(e);
  }
}
  deleteBeerCart = async (idBeer,idUser) => {
    try{
      const cart = await this.getCart(idUser);
      const index = cart.findIndex((e) => {
        return e.beerId === idBeer
            })
            console.log ( 'antes',cart, idBeer)
            cart.splice(index, 1)
            console.log ('depois', cart)
      const result = await this.api.patch(`/users/${idUser}`, { cart });
      return result.data.cart
    }catch (e){
      throw Error(e)
    }
  }
}

export default new jsonApi();
