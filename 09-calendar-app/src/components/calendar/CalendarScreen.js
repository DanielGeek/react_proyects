import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// useDispatch para despachar acciones en los reducers
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import { AddNewFab } from '../ui/AddNewFab';
import { eventSetActive } from '../../actions/events';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Daniel'
    }
}]

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    // obtener del localStorge la ultima vista si existe, en caso contrario envia a la vista mes
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    // abrir modal al hacer doble click sobre un evento
    const onDoubleClick = (e) => {
        // console.log(e);
        //asigna true al atributo modalOpen
        dispatch(uiOpenModal());
    }
    // envia al calendarReducer el evento seleccionado como activo
    const onSelectEvent = (e) => {
        console.log(e)
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
    }
    // cuando cambie entre vista guarda en el estado y localStorage el evento
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
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
                // posiciono en la vista almacenada
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
