import React from 'react';
import {connect} from 'react-redux'
import './subscribe-card-table.css';
const SubcribeCardTable  = ({items,total,onDelete})=>{
  const renderRow=(item, idx) => {
      const{id, title,total} = item;
      return(
          <tr key={id}>
              <td>{idx}</td>
              <td>{title}</td>
              <td>${total}</td>


              <td>
                  <button
                      onClick={()=>onDelete(id)}
                      className="btn btn-outline-danger btn-sm float-right">
                      <i className="fa fa-trash-o" />
                  </button>

              </td>
          </tr>

      );
};
    return(

        <div className="subscribe-card-table">
         <h2> Your Subscribes</h2>
         <table className="table">
       <thead>
       </thead>

             <tbody>
             {
             items.map(renderRow())
             }
             </tbody>
         </table>

            <div className="total">
                Total:${total}

            </div>

     </div>


    )
}

const mapStateToProps = ({subsItems,subscribeTotal})=>{
    return {
items:subsItems,
 total:subscribeTotal
    };
};

const mapDispatchToProps = ()=>{
    return{
        onDelete:(id)=> {
        console.log(`Delete ${id} `)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubcribeCardTable);