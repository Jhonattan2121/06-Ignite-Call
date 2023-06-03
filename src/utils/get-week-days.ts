

interface GetWeekDaysParams {
  short?: boolean;
}

export function getWeekDays({ short = false }: GetWeekDaysParams) {
    const formatter = new Intl.DateTimeFormat('pt-BR', {weekday: 'long'})

    return Array.from(Array(7).keys()).map((day) => formatter.format((new Date(Date.UTC(2023, 5, day)))))
    .map((weekDay) => {
      if (short) {
        return weekDay.slice(0, 3)
      }
      return weekDay.substring(0, 1 ).toUpperCase().concat(weekDay.substring(1))
    })
       
  }
  