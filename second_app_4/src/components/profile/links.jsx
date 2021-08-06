import React from 'react'


const Links = (props) => (
    
<div className="Links">
    <h3>Social Link</h3>
    <ul>
        <li>
            <a href="#">{props.socialA}</a>
        </li>
        <li>
            <a href="#">{props.socialB}</a>
        </li>
        <li>
            <a href="#">{props.socialC}</a>
        </li>
        <li>
            <a href="#">{props.socialD}</a>
        </li>
    </ul>
</div>
);


export default Links