import { useCallback, useState } from "react";
import type {
  DateSelectArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core";
import type { EventResizeDoneArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useEvents } from "../../hooks/useEvents";
import type { Event } from "../../types/events";
import EventModal from "../EventModal/EventModal";
import { colors } from "../../theme/colors";
import { CalendarViewWrapper } from "./CalendarView.styled";

function toCalendarEvents(events: Event[]): EventInput[] {
  return events.map((e) => ({
    id: e.id,
    title: e.title,
    start: e.start,
    end: e.end,
    backgroundColor: e.color ?? colors.accentBlue,
    borderColor: e.color ?? colors.accentBlue,
  }));
}

function resolveSelectAnchor(info: DateSelectArg): HTMLElement | null {
  if (!info.jsEvent?.target) return null;
  const t = info.jsEvent.target as HTMLElement;
  return (
    t.closest(".fc-daygrid-day") ??
    t.closest(".fc-timegrid-col") ??
    null
  );
}

function CalendarView() {
  const { events, addToCalendar, removeFromCalendar, updateInCalendar } =
    useEvents();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [draft, setDraft] = useState<Event | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
    setAnchorEl(null);
    setDraft(null);
  }, []);

  const handleSelect = useCallback((info: DateSelectArg) => {
    const anchor = resolveSelectAnchor(info);
    if (!anchor) {
      info.view.calendar.unselect();
      return;
    }
    setDraft({
      id: crypto.randomUUID(),
      title: "",
      start: info.startStr,
      end: info.endStr,
      color: colors.accentBlue,
      notes: "",
    });
    setAnchorEl(anchor);
    setIsEditing(false);
    setPopoverOpen(true);
    info.view.calendar.unselect();
  }, []);

  const handleEventClick = useCallback(
    (info: EventClickArg) => {
      info.jsEvent.preventDefault();
      const id = info.event.id;
      const existing = events.find((e) => e.id === id);
      if (existing) {
        setDraft({ ...existing });
        setAnchorEl(info.el);
        setIsEditing(true);
        setPopoverOpen(true);
      }
    },
    [events],
  );

  const handleEventDrop = useCallback(
    (info: EventDropArg) => {
      const id = info.event.id;
      const existing = events.find((e) => e.id === id);
      if (!existing) return;
      const endStr = info.event.endStr ?? info.event.startStr;
      updateInCalendar({
        ...existing,
        start: info.event.startStr,
        end: endStr,
      });
    },
    [events, updateInCalendar],
  );

  const handleEventResize = useCallback(
    (info: EventResizeDoneArg) => {
      const id = info.event.id;
      const existing = events.find((e) => e.id === id);
      if (!existing) return;
      const endStr = info.event.endStr ?? info.event.startStr;
      updateInCalendar({
        ...existing,
        start: info.event.startStr,
        end: endStr,
      });
    },
    [events, updateInCalendar],
  );

  const handleSave = useCallback(
    (event: Event) => {
      if (events.some((e) => e.id === event.id)) {
        updateInCalendar(event);
      } else {
        addToCalendar(event);
      }
    },
    [events, addToCalendar, updateInCalendar],
  );

  const handleDelete = useCallback(
    (event: Event) => {
      removeFromCalendar(event);
    },
    [removeFromCalendar],
  );

  return (
    <CalendarViewWrapper>
      <h2>Calendar View</h2>
      <FullCalendar
        height="100%"
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
        editable
        selectable
        selectMirror
        dayMaxEvents
        events={toCalendarEvents(events)}
        select={handleSelect}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
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
        allDaySlot
        scrollTime="08:00:00"
        nowIndicator
      />
      <EventModal
        open={popoverOpen}
        anchorEl={anchorEl}
        draft={draft}
        isEditing={isEditing}
        onClose={closePopover}
        onSave={handleSave}
        onDelete={isEditing ? handleDelete : undefined}
      />
    </CalendarViewWrapper>
  );
}

export default CalendarView;
