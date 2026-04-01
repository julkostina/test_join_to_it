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
        slotDuration="02:00:00" // 2-hour intervals (12:00 AM, 2:00 AM, 4:00 AM...)
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: true, // AM/PM format
        }}
        views={{
          dayGridMonth: {
            dayHeaderFormat: { weekday: "short" }, // "Sun", "Mon"
          },
          timeGridWeek: {
            dayHeaderFormat: {
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
              omitCommas: true,
            }, // "Sun 31/12"
          },
          timeGridDay: {
            dayHeaderFormat: {
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
              omitCommas: true,
          },
        }}}
        // dayHeaderFormat={
        //   {
        //   weekday: "short", // "Sun", "Mon"
        //   day: "2-digit",
        //   month: "2-digit",
        //   separator: " ", // "Sun 31/12"
        // }}
        allDaySlot={true} // shows "all day" row at top
        scrollTime="08:00:00" // scrolls to 8:00 AM on load (current time line)
        nowIndicator={true}
      />
    </CalendarViewWrapper>
  );
}

export default CalendarView;
