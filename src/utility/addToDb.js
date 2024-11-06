import { toast } from "react-toastify";

const getStoredCartList = ()=> {
    const storedListString = localStorage.getItem('add-list');
    if(storedListString){
        const storedList = JSON.parse(storedListString);
        return storedList;
    }
    else{
       return [];
    }
}

const getStoredWishList =() => {
    const storedWishListString = localStorage.getItem('wish-list');
    if(storedWishListString){
        const wishList = JSON.parse(storedWishListString);
        return wishList ;
    }
    else{
        return [];
    }
}




const addToStoredCartList = (id)=> {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        toast.error("This item is already added !", {
            position: "top-center"
          });
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListString);
        toast.success("Add to your cart successfully  !", {
            position: "top-center"
          });
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        toast.error("This item is already wished !", {
            position: "top-center"
          });
    }
    else{
        storedList.push(id);
        const storedListString  = JSON.stringify(storedList);
        localStorage.setItem('wish-list' , storedListString);
        toast.success("Add to your wishlist successfully  !", {
            position: "top-center"
          });
    }
}


export {addToStoredCartList , getStoredCartList , getStoredWishList , addToStoredWishList}