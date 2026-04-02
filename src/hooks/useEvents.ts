import { useState } from 'react';
import type { Event } from '../types/events';

const load = (): Event[] => {
    try {
        return JSON.parse(localStorage.getItem("events") ?? '[]') as Event[];
    }
    catch {
        return [];
    }
}

export function useEvents() {
    const [events, setEvents] = useState<Event[]>(load);

    const save = (items:Event[])=>{
        setEvents(items);
        localStorage.setItem("events", JSON.stringify(items));
    }
    const addToCalendar  = (event: Event) => {
        if(!events.find(m=> m.id ===event.id)){
            save([...events,event]);
        }
    }
    const removeFromCalendar = (event: Event) =>{
        if(events.find(m => m.id === event.id)){
            save(events.filter(m => m.id!==event.id));
        }
    }
    const updateInCalendar = (event: Event) => {
        if (events.some((m) => m.id === event.id)) {
            save(events.map((m) => (m.id === event.id ? event : m)));
        }
    };

    return {events, addToCalendar, removeFromCalendar, updateInCalendar};
}