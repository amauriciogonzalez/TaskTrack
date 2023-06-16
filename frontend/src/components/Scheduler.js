import React from "react";
import {Inject, ScheduleComponent, Day, Week, Month, Agenda, ResourceDirective, ResourcesDirective, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule'
//import {DataManager, WebApiAdaptor, UrlAdaptor } from '@syncfusion/ej2-data'
import { useNavigate } from "react-router-dom";

function Scheduler(props)
{
    const navigate = useNavigate()

    const [dataManager, setDataManager] = React.useState(null)

    /*
    React.useEffect(() => {
        const fetchData = async () => {
        const manager = new DataManager({
            url: 'http://127.0.0.1:8000/api/events',
            //url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
            adaptor: new UrlAdaptor()
        });
        await manager.ready;
        setDataManager(manager);
        };
        fetchData();
    }, []);
    */

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
    }

    /* Below, we use the ej2 Syncfusion schedule component. The ResourceDirective subcomponent below allows for the recognition of created subjects.
       The ViewsDirective component allows the user to view the calendar differently by selecting a certain day, week, or month, in addition to an agenda view. */

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