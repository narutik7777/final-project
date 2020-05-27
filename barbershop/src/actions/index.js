const   barbersLoaded = (newBarbers) =>{
    return{
        type:'FETCH_BARBERS_SUCCESS',
       payload: newBarbers
    };
};

const  barbersRequested = ()=>{
    return {
        type: 'FETCH_BARBERS_REQUESTED'
    }
};

const barbersError = (error)=>{
    return {
        type:"FETCH_BARBERS_FAILURE",
        payload:error

    };
};

const fetchBarbers=(barbershopService,dispatch)=>()=>{
    dispatch (barbersRequested());
    barbershopService.getBarbers()
        .then((data)=> dispatch(barbersLoaded(data)))
        .catch((err)=>dispatch(barbersError(err)));
}

export {
  fetchBarbers
};