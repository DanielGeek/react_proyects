import React from 'react'

export const CalendarEvent = ({ event }) => {
    // propiedades del events definidos en mi CalendarScreen component
    const { title, user } = event;
    return (
        <div>
            <strong>{ title }</strong>
            <span>- { user.name }</span>
        </div>
    )
}
