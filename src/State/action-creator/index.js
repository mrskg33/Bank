export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:'deposit',
            payload:Number(amount)
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) =>{
        dispatch({
            type:'withdraw',
            payload:Number(amount)
        })
    }
}