import React from "react";

function SubjectCard(props)
{
    return (
        <div className="subject-card" style={{borderColor: props.color}}>
            <span class="dot" style={{backgroundColor: props.color}}></span>
            <span className="subject-card-name" style={{color: props.color}}>{props.name}</span>
        </div>
    )
}


export default SubjectCard;