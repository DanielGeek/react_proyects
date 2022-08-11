import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) );
  }

  const startSavingEvent = async( calendarEvent ) => {

    // TODO: update event
    if( calendarEvent._id) {
      dispatch( onUpdateEvent({ ...calendarEvent }) );
    } else {
      // Creando
      const { data } = await calendarApi.post('/events', calendarEvent);
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id }) );
    }
  }
  const startDeletingEvent = () => {
    // TODO: Llegar al backend

    dispatch( onDeleteEvent() );
  }

  return {
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  }
}
