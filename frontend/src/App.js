import React from "react";
import Scheduler from "./components/Scheduler";
import Subjects from "./components/Subjects";
import EditSubject from "./components/EditSubject";
import {Routes, Route} from 'react-router-dom'

function App()
{
    let [subjects, setSubjects] = React.useState([])

    React.useEffect(() => {
        getSubjects()
    }, [])

    // This function fetches and reads the subjects from the backend api.
    async function getSubjects()
    {
        await fetch('/api/subjects/')
            .then(response => response.json())
            .then(subjects => setSubjects(subjects))
            .catch(err => console.error(err))

        // We must have a capitalized Id property for each subject in order for the scheduler to acknowledge it.
        setSubjects(function(subjects) {
            return (subjects.map(function(subject) {
                return ({
                    ...subject,
                    Id: Number(subject.id)
                })
            }))
        })
    }
    
    return (
        <div className="App">
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route path='/' element={<Scheduler resourceDataSource={subjects}/>} />
                <Route path='/subjects/' element={<Subjects resourceDataSource={subjects} />} /> 
                <Route path='/subjects/:id/editSubject/' element={<EditSubject 
                                                                           subjects={subjects}                                                                
                                                                  />} />     
            </Routes>
        </div>
    );
}

export default App;
