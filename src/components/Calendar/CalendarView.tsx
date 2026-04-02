import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { CalendarViewWrapper } from "./CalendarView.styled.ts";
function CalendarView() {
  return (
    <CalendarViewWrapper>
      <h2>Calendar View</h2>
      <FullCalendar
        headerToolbar={{
          start: "today,prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "Agenda",
          prev: "Back",
          next: "Next",
        }}
        initialView="dayGridMonth"
        initialDate="2018-01-01"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        editable={true}
        dayMaxEvents={true}
        slotDuration="02:00:00"
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }}
        views={{
          dayGridMonth: {
            dayHeaderFormat: { weekday: "short" },
          },
          timeGridWeek: {
            dayHeaderFormat: {
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
              omitCommas: true,
            },
          },
          
          timeGridDay: {
            dayHeaderFormat: {
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
              omitCommas: true,
            },
          },
        }}
        allDaySlot={true}
        scrollTime="08:00:00"
        nowIndicator={true}
      />
    </CalendarViewWrapper>
  );
}

export default CalendarView;
