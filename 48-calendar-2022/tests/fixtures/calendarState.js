
export const events = [
  {
    _id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Cumpleaños de Daniel',
    notes: 'Alguna nota',
  },
  {
    _id: '1',
    start: new Date('2022-11-09 13:00:00'),
    end: new Date('2022-11-09 15:00:00'),
    title: 'Cumpleaños de Jessica',
    notes: 'Alguna nota de Jessica',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null
}

export const calendarWithActiveEventsState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: { ...events[0] }
}