import React from "react";
import { useNavigate } from "react-router-dom";

function SubjectCard(props)
{
    const navigate = useNavigate()

    // Each subject is displayed with its name and color, represented by a colored dot.

    return (
        <div className="subject-card" style={{borderColor: props.subject.Color}} onClick={() => navigate('/subjects/' + props.subject.Id + '/editSubject/')}>
            <span className="dot" style={{backgroundColor: props.subject.Color}}></span>
            <span className="subject-card-name" style={{color: props.subject.Color}}>{props.subject.Name}</span>
        </div>
    )
}


export default SubjectCard;