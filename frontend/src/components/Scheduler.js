import React from "react";
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, Schedule, ResourceDirective, ResourcesDirective, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule'
import {DataManager, WebApiAdaptor, ODataV4Adaptor} from '@syncfusion/ej2-data'
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

    /*
    const fieldsData = {
        id: 'Id',
        subject: { name: 'Subject', title: 'Event Name' },
        location: { name: 'Location', title: 'Event Location' },
        description: { name: 'Description', title: 'Event Description' },
        startTime: { name: 'StartTime', title: 'Start Duration' },
        endTime: { name: 'EndTime', title: 'End Duration' }
    }
    */

    const [dataManager, setDataManager] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
        const manager = new DataManager({
            url: 'http://127.0.0.1:8000/api/events',
            //url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
            adaptor: new ODataV4Adaptor()
        });
        await manager.ready;
        setDataManager(manager);
        };
        fetchData();
    }, []);

    const eventSettings = {
        dataSource: dataManager,
        /*
        dataSource: [{
            StartTime: new Date(2023, 0, 11, 4, 0),
            EndTime: new Date(2023, 0, 11, 4, 0),
            Subject: 'testing',
            IsAllDay: true,
        }]
        */
        //fields: fieldsData,
    }

    console.log(eventSettings.dataSource)




    return(
        <div>
            <ScheduleComponent
                currentView='Week'
                eventSettings={eventSettings}
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