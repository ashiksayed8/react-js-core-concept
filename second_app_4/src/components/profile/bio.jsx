import React from 'react'
import MyProps from '../props';


const Bio = (props) => (
    <div className="Bio">
        <h3>{props.name}</h3>
        <p>{props.title}</p>
    </div>
);

export default Bio;