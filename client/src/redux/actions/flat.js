import store from '../store/store';

let FlatAction ={
    
    postFlat:(flats)=>{
        store.dispatch({type:'Add_Flat',flats:flats});
    }
    ,
    postSingleFlat:(SingleFlat)=>{
        store.dispatch({type:'Single_Flat',SingleFlat});
    }
    
}

export default FlatAction;