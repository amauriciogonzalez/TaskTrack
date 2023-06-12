import React from "react";
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, Schedule, ResourceDirective, ResourcesDirective, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule'
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { useNavigate } from "react-router-dom";

function Scheduler(props)
{
    let remoteData = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/schedule',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });

    let localData = new DataManager()

    const navigate = useNavigate()




    return(
        <div>
            <ScheduleComponent
                currentView='Week'
                //eventSettings={{dataSource: localData}}
                className='schedule'
                
            >
                <span onClick={() => navigate('/subjects')}>Subjects</span>
                <ResourcesDirective>
                    <ResourceDirective
                        field='SubjectId'
                        title='Subject Title'
                        name='Subject'
                        textField='Name'
                        idField='Id'
                        colorField='Color'
                        dataSource={props.resourceDataSource}    
                    >
                    </ResourceDirective>
                </ResourcesDirective>
                <ViewsDirective>
                    <ViewDirective option='Day' />
                    <ViewDirective option='Week' />
                    <ViewDirective option='Month' />
                    <ViewDirective option='Agenda' />
                </ViewsDirective>
                <Inject services={[Day, Week, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    )
}

export default Scheduler;