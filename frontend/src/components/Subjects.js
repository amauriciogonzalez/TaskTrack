import React from "react";
import { useNavigate } from "react-router-dom";
import SubjectCard from "./SubjectCard";

function Subjects(props)
{
    const navigate = useNavigate()

    let subjectCardList = props.resourceDataSource.map(function(subject) {
        return (
            <SubjectCard name={subject.Name} color={subject.Color} />
        )
    })

    return (
        <div className="subjects">
            <div className="subjects-headings">
                <span>Subject Information</span>
                <span className="button-to-scheduler" onClick={() => navigate('/')}>Scheduler</span>
                <span className="create-new-subject">Create New Subject</span>    
            </div>


            <div className="subject-list">
                {subjectCardList}
            </div>
        </div>
    )
}

export default Subjects;