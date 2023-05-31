import { daysInWeek } from "date-fns";

export function getWeekDays() {
    const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const startDay = daysInWeek; 
  
    const weekDays = Array.from(Array(7).keys())
      .map((day) => {
        const date = new Date(currentYear, currentMonth, startDay + day);
        return formatter.format(date);
      });
  
    return weekDays;
  }
  