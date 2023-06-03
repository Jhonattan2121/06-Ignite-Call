interface GetWeekDaysParams {
  short?: boolean;
}

export function getWeekDays({ short = false }: GetWeekDaysParams) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });

  const currentDate = new Date();
  const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();

  const weekDays = Array.from(Array(7).keys()).map((day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDayOfWeek + day);
    const weekDay = formatter.format(date);

    if (short) {
      return weekDay.slice(0, 3);
    }
    
    return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1));
  });

  return weekDays;
}
