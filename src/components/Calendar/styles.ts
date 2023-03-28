import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const CalendarWrapper = styled.div`
  width: 350px;
  position: relative;
  right:1rem;
  border: none;
  .current-day {
    background-color: #fd9e15;
  }

  .react-calendar {
    border: none;
  }


`;
