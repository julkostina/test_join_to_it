import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InputAdornment from "@mui/material/InputAdornment";
import type { Event } from "../../types/events";
import { colors } from "../../theme/colors";
import ColorPicker from "../ColorPicker/ColorPicker";
import {
  EventPopover,
  EventPopoverSurface,
  EventPopoverClose,
  EventFormFields,
  EventFormTextField,
  AdornmentIconWrap,
  EventPopoverFooter,
  EventCancelTextButton,
  EventSaveTextButton,
  EventFooterActions,
} from "./EventModal.styled";

function parseDateAndTime(iso: string): { date: string; time: string } {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return { date: "", time: "09:00" };
  }
  const pad = (n: number) => String(n).padStart(2, "0");
  const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  return { date, time };
}

function buildEventFromForm(
  draft: Event,
  title: string,
  date: string,
  time: string,
  notes: string,
  color: string,
): Event {
  const oldStart = new Date(draft.start).getTime();
  const oldEnd = new Date(draft.end).getTime();
  const durationMs = Math.max(oldEnd - oldStart, 60 * 60 * 1000);
  const newStartMs = new Date(`${date}T${time}:00`).getTime();
  const newEndMs = newStartMs + durationMs;
  return {
    ...draft,
    title: title.trim() || "Event name",
    start: new Date(newStartMs).toISOString(),
    end: new Date(newEndMs).toISOString(),
    notes,
    color,
  };
}

type EventModalProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  draft: Event | null;
  isEditing: boolean;
  onClose: () => void;
  onSave: (event: Event) => void;
  onDelete?: (event: Event) => void;
};

export default function EventModal({
  open,
  anchorEl,
  draft,
  isEditing,
  onClose,
  onSave,
  onDelete,
}: EventModalProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [notes, setNotes] = useState("");
  const [color, setColor] = useState<string>(colors.accentBlue);

  useEffect(() => {
    if (open && draft) {
      const { date: d, time: t } = parseDateAndTime(draft.start);
      setTitle(draft.title === "Event name" ? "" : draft.title);
      setDate(d);
      setTime(t);
      setNotes(draft.notes ?? "");
      setColor(draft.color ?? colors.accentBlue);
    }
  }, [open, draft]);

  const handleSave = () => {
    if (!draft || !date || !time) return;
    onSave(buildEventFromForm(draft, title, date, time, notes, color));
    onClose();
  };

  const handleDelete = () => {
    if (!draft || !onDelete) return;
    onDelete(draft);
    onClose();
  };

  const showPopover = open && Boolean(anchorEl);

  return (
    <EventPopover
      open={showPopover}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      disableRestoreFocus
    >
      <EventPopoverSurface>
        <EventPopoverClose
          aria-label="Close"
          onClick={onClose}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </EventPopoverClose>
        <EventFormFields spacing={2.5}>
          <EventFormTextField
            variant="standard"
            fullWidth
            placeholder="event name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <EventFormTextField
            variant="standard"
            fullWidth
            type="date"
            placeholder="event date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AdornmentIconWrap>
                    <CalendarTodayIcon />
                  </AdornmentIconWrap>
                </InputAdornment>
              ),
            }}
          />
          <EventFormTextField
            variant="standard"
            fullWidth
            type="time"
            placeholder="event time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AdornmentIconWrap>
                    <ScheduleIcon />
                  </AdornmentIconWrap>
                </InputAdornment>
              ),
            }}
          />
          <ColorPicker
            value={color}
            onChange={setColor}
            label="Color"
          />
          <EventFormTextField
            variant="standard"
            fullWidth
            multiline
            minRows={2}
            placeholder="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </EventFormFields>
        <EventPopoverFooter>
          <EventCancelTextButton onClick={onClose}>Cancel</EventCancelTextButton>
          <EventFooterActions>
            {isEditing && onDelete && (
              <EventCancelTextButton onClick={handleDelete}>
                Delete
              </EventCancelTextButton>
            )}
            <EventSaveTextButton onClick={handleSave} disabled={!draft}>
              Save
            </EventSaveTextButton>
          </EventFooterActions>
        </EventPopoverFooter>
      </EventPopoverSurface>
    </EventPopover>
  );
}
