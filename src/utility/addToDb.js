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
const addToStoredCartList = (id)=> {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        console.log(id , 'id already exist')
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListString)
    }
}

export {addToStoredCartList , getStoredCartList}