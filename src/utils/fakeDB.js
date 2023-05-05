import { toast } from "react-toastify";

const addToCart = (id) => {
   let foodCart = getFoodCart();
   console.log(foodCart);
   const exist = foodCart.find((food) => food.id === id);
   if (exist) {
      toast.error("already added to cart");
   } else {
      const newFood = { id: id };
      foodCart.push(newFood);
   }

   localStorage.setItem("food-cart", JSON.stringify(foodCart));
};

const getFoodCart = () => {
   let foodCart = [];
   const storedCart = localStorage.getItem("food-cart");
   if (storedCart) {
      foodCart = JSON.parse(storedCart);
   }
   return foodCart;
};

const removeFood = (id) => {
   let foodCart = getFoodCart();

   const newCart = foodCart.filter((food) => food.id !== id);

   localStorage.setItem("food-cart", JSON.stringify(newCart));
};

const deleteFoodCart = () => {
   localStorage.removeItem("food-cart");
};

export { addToCart, getFoodCart, removeFood, deleteFoodCart };
