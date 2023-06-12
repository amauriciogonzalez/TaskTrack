import React from "react";
import Scheduler from "./components/Scheduler";
import Subjects from "./components/Subjects";
import {Routes, Route} from 'react-router-dom'

function App()
{
    let [subjects, setSubjects] = React.useState([
        {
            Name: 'John',
            Id: 1,
            Color: '#ea7a57',
        },
        {
            Name: 'Steve',
            Id: 2,
            Color: '#357CD2'
        },
    ])
    

    return (
        <div className="App">
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route path='/' element={<Scheduler resourceDataSource={subjects}/>} />
                <Route path='/subjects/' element={<Subjects resourceDataSource={subjects} />} />
            </Routes>
        </div>
    );
}

export default App;
