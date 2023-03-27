import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper } from './styles';

type CalendarDashboardProps = {
  date: Date;
  view: string;
};

const CalendarDashboard = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: React.SetStateAction<Date>) => {
    setDate(newDate);
  };

  const tileClassName = ({ date, view }: CalendarDashboardProps ) => {
    // Verifica se o dia atual é igual ao dia renderizado
    if (view === 'month' && date.toDateString() === new Date().toDateString()) {
      return 'current-day';
    }
    return '';
  };


  return (
    <CalendarWrapper>
      <Calendar value={date} onChange={ ()=> handleDateChange} showNavigation={false} tileClassName={tileClassName} />
    </CalendarWrapper>
  );
};

export default CalendarDashboard;