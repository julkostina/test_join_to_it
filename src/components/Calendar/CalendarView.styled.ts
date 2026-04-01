import { styled } from '@mui/material/styles';

export const CalendarViewWrapper = styled('div')(({ theme }) => ({
  width: '70%',

  '& .fc .fc-button': {
    backgroundColor: "transparent",  // #43425D
    borderColor: "#D7DAE2 !important",
    color: '#43425D',
  },

//   '& .fc .fc-button:hover': {
//     backgroundColor: "#4D4F5C",  // #4D4F5C
//     borderColor: "#4D4F5C",
//   },

  '& .fc .fc-button-active': {
    backgroundColor: `transparent !important`,  // #A5A4BF
    color: "#3B86FF !important",
  },

  '& .fc .fc-button:focus': {
    boxShadow: 'none',
  },
}));