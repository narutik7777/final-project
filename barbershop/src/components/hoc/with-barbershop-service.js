import React from "react";
import {BarbershopServiceConsumer} from "../barbershop-service-context/barbershop-service-context";

const  withBarbershopService=()=>(Wrapped)=>{

    return (props)=> {
        return (
            <BarbershopServiceConsumer>
                {
                    (barbershopService) => {
                        return (<Wrapped{... props} barbershopService={barbershopService}/>)
                    }
                }
            </BarbershopServiceConsumer>
        );
    }
};

export default  withBarbershopService;