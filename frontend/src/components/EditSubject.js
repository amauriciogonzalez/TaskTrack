import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ColorSelection from "./ColorSelection";

function EditSubject(props)
{
    let params = useParams()
    let navigate = useNavigate()
    let desiredId = parseInt(params.id)

    let [formSubject, setFormSubject] = React.useState(generateNewSubject())

    // This function generates a new subject with a black color and blank name.
    function generateNewSubject()
    {
        let newSubject = {
            Name: '',
            Color: '#000000',
        }
        
        return newSubject
    }

    // The passed url parameter, id, is used to find the selected subject to edit.
    function findDesiredSubject()
    {

        let desiredSubject = props.subjects.find(function(subject) {
            return subject.Id === desiredId
        })
        
        if (!desiredSubject)
        {
            navigate('/subjects/')
            return
        }
        else
        {
            setFormSubject(desiredSubject)
        }

    }


    /* Depending on the url parameter, we sift through the subjects to find the selected one. If we're creating a new
       subject, we set the url parameter to 0 and return a newly generated subject. */
    React.useEffect(() => {
        if (desiredId !== 0)
        {
            findDesiredSubject()
        }
        else
        {
            setFormSubject(function(formSubject) {
                return generateNewSubject()
            })
        }
    }, [])

    // This function handles the change in data from the user filling out the form to update/create a subject.
    function handleChange(event)
    {
        setFormSubject(function(formSubject) {
            const {name, value} = event.target

            return ({
                ...formSubject,
                [name]: value
            })
        })
    }

    // We use the confirm button to update the database in the backend, in which we either add a new subject or update an existing one.
    async function handleConfirm()
    {
        if (desiredId === 0)
        {
            await createSubject()
        }
        else
        {
            await updateSubject()
        }
        navigate('/subjects/')
        window.location.reload(false)
    }

    // If we delete a subject, the database table is updated and the user is sent back.
    async function handleDelete()
    {
        await deleteSubject()
        navigate('/subjects/')
        window.location.reload(false)
    }

    // This function accesses the api to create a new subject.
    async function createSubject()
    {
        await fetch(`/api/subjects/create/`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formSubject)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    // This function accesses the api to update an existing subject.
    async function updateSubject()
    {
        await fetch(`/api/subjects/${desiredId}/update/`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formSubject)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    // This function accesses the api to delete an existing subject.
    async function deleteSubject()
    {
        await fetch(`/api/subjects/${desiredId}/delete/`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    // This function is used when a color is selected in the subject form and must be updated.
    function changeColor(color)
    {
        setFormSubject(function(formSubject) {
            return {
                ...formSubject,
                Color: color
            }
        })
    }

    // Below, a user may navigate to the subjects display page or scheduler, edit the subject title and color, and confirm their changes or delete the selected subject.

    return (
        <>
            <div className="subjects-headings">
                <span className="button-to-scheduler" onClick={() => navigate('/')}>Scheduler</span>
                <span className="subject-information" onClick={() => navigate('/subjects/')}>Subjects</span>                    
            </div>
            <div className="edit-subject">
                {desiredId === 0 ? <span className="edit-subject-title">Create a New Subject</span> : <span className="edit-subject-title">Update the Selected Subject</span>}
                <input 
                        className="subject-title-form"
                        style={{borderBottom: '10px solid ' + formSubject.Color}}
                        type='text'
                        placeholder='Subject Title'
                        onChange={handleChange}
                        name='Name'
                        value={formSubject.Name}
                />
                <ColorSelection currentColor={formSubject.Color} changeColor={changeColor} />
                <div className="confirm-delete">
                    <span className="confirm-button" onClick={handleConfirm}>Confirm</span>
                    {desiredId !== 0 && <span className="delete-button" onClick={handleDelete}>Delete</span>}
                </div>
            </div>
        </>
    )
}

export default EditSubject;