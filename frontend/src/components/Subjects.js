import React from "react";
import { useNavigate } from "react-router-dom";
import SubjectCard from "./SubjectCard";

function Subjects(props)
{
    const navigate = useNavigate()

    let subjectCardList = props.resourceDataSource.map(function(subject) {
        return (
            <SubjectCard subject={subject} />
        )
    })
    
    // Below, we display a list of all the subjects the user has created, with buttons to navigate to other pages.

    return (
        <div className="subjects">
            <div className="subjects-headings">
                <span className="button-to-scheduler" onClick={() => navigate('/')}>Scheduler</span>
                <span>Subjects</span>
                <span className="create-new-subject" onClick={() => navigate('/subjects/0/editSubject')}>Create New Subject</span>    
            </div>
            {subjectCardList.length === 0 && <span>No subjects available</span>}
            <div className="subject-list">
                {subjectCardList}
            </div>
        </div>
    )
}

export default Subjects;