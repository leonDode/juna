import React, { useState, useEffect } from 'react';
import styles from './calendardash.module.css'

export default function CalendarDash() {
    const [events, setEvents] = useState({});

    useEffect(() => {
        fetchEvents();
    }, []);

    const formatEvents = (data) => {
        return data.reduce((acc, event) => {
            const eventDateKey = event.eventDate;
            if (!acc[eventDateKey]) {
                acc[eventDateKey] = [];
            }
            acc[eventDateKey].push(event);
            return acc;
        }, {});
    };

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:3333/eventsDay');
            if (!response.ok) {
                throw new Error('Erro ao buscar eventos');
            }
            const data = await response.json();
            console.log("Eventos recebidos:", data);

            const formattedEvents = formatEvents(data);
            setEvents(formattedEvents);
            console.log("Eventos formatados:", formattedEvents);
        } catch (error) {
            console.error('Erro ao buscar eventos:', error.message);
        }
    };

    return (
        <div className={styles.hoje}>
            <h2>HOJE</h2>
            {Object.keys(events).map((date) => (
                <div key={date}>
                    <ul>
                        {events[date].map((event) => (
                            <li key={event.id}>
                                <strong>{event.description}</strong> - {event.time} - {event.tag}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
