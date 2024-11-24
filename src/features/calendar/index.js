import { useState } from 'react'
import CalendarView from '../../components/CalendarView'
import moment from 'moment'
import { CALENDAR_INITIAL_EVENTS } from '../../utils/dummyData'

const INITIAL_EVENTS = CALENDAR_INITIAL_EVENTS

function Calendar(){

    const [events, setEvents] = useState(INITIAL_EVENTS)

    const addNewEvent = (date) => {
        let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)]
        let newEventObj = {title : randomEvent.title, theme : randomEvent.theme, startTime : moment(date).startOf('day'), endTime : moment(date).endOf('day')}
        setEvents([...events, newEventObj])
    }

    return(
        <>
           <CalendarView 
                calendarEvents={events}
                addNewEvent={addNewEvent}
                openDayDetail={openDayDetail}
           />
        </>
    )
}

export default Calendar