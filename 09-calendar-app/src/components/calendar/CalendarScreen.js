import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// useDispatch para despachar acciones en los reducers
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import { AddNewFab } from '../ui/AddNewFab';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    // asigno todos los eventos del store
    const { events, activeEvent } = useSelector(state => state.calendar);

    // obtener del localStorge la ultima vista si existe, en caso contrario envia a la vista mes
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    // obtener los eventos siempre que renderise el componente y cuando se dispare el dispatch
    useEffect(() => {

        dispatch(eventStartLoading());

    }, [dispatch])

    // abrir modal al hacer doble click sobre un evento
    const onDoubleClick = (e) => {
        // console.log(e);
        //asigna true al atributo modalOpen
        dispatch(uiOpenModal());
    }
    // envia al calendarReducer el evento seleccionado como activo
    const onSelectEvent = (e) => {

        dispatch(eventSetActive(e));

    }
    // cuando cambie entre vista guarda en el estado y localStorage el evento
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }
    // limpio el evento activo al seleccionar fuera del evento
    const onSelectSlot = (e) => {
        // console.log(e);
        dispatch(eventClearActiveEvent());
    }

    // asigna estilos a los eventos creados en el calendario
    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                // posiciono en la vista almacenada
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {
                (activeEvent) && <DeleteEventFab />

            }
            <CalendarModal />
        </div>
    )
}
