import React  from "react";
import './sub-list-item.css'

const SubListItem = ({sub}) => {
    const {title, man, price, coverImage} = sub;
    return (

        <div className="sub-list-item">

            <div className="sub-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="sub-details">
                <a href="#" className="sub-title">{title}</a>
                <div className="man">{man}</div>
                <div className="sub-price">${price}</div>
                <button className='btn btn-info add-to-sub'>Subscribe</button>

            </div>
        </div>
    );
};

export default SubListItem;