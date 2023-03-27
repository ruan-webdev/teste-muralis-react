import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const CalendarWrapper = styled.div`
  padding: 2rem 10px;
  width: 50%;
  border: none;
  background-color: white;

  .current-day {
    background-color: #fd9e15;
  }
`;
