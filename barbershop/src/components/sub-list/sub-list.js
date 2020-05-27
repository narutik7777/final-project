import React, {Component} from "react";
import SubListItem from "../sub-list-item";
import {connect} from 'react-redux';
import {withBarbershopService} from '../hoc';
import {fetchBarbers} from "../../actions"
import {compose} from "../../utils";


import './sub-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const SubList = ({subs})=>{
    return (
        <ul className='sub-list'>
            {
                subs.map((sub) => {
                    return (
                        <li key={sub.id}><SubListItem sub={sub}/></li>
                    )
                })
            }
        </ul>
    );

};

class SubListContainer extends Component {



    componentDidMount() {
        this.props.fetchBarbers();
    }


    render() {
        const {subs, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

return <SubList subs={subs} />
    }
}




const mapStateToProps = ({subs, loading,error}) => {
    return {subs,loading,error};

};

const mapDispatchToProps =  (dispatch, {barbershopService})=> {
    return {
fetchBarbers: fetchBarbers(barbershopService,dispatch)
}
    };




export  default  compose(
    withBarbershopService(),
    connect(mapStateToProps, mapDispatchToProps))(SubListContainer);



