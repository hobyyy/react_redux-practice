
let initialState = {
    count:0,
    dec_count:0,
    id:"",
    pw:""
}
function reducer(state=initialState, action) {
    if(action.type === 'INCREMENT') {
        console.log('state?', state);
        return {...state, count : state.count + action.payload.num};
    }else if(action.type === 'LOGIN') {
        return {
            ...state,
            id: action.payload.id,
            pw: action.payload.pw
        }
    }else if(action.type === 'DECREMENT') {
        return {...state, dec_count : state.dec_count - action.payload.num};
    }
    return {...state};

    // switch문을 써도 된다. 쓴다면 ?
    // switch(action.type) {
    //     case "INCREMENT":
    //         return {...state, count: state + 1};
    //     default:
    //         return {...state};
    // }
}

export default reducer;