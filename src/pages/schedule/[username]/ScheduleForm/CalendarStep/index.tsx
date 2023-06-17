import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null
  

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00H</TimePickerItem>
            <TimePickerItem>09:00H</TimePickerItem>
            <TimePickerItem>10:00H</TimePickerItem>
            <TimePickerItem>11:00H</TimePickerItem>
            <TimePickerItem>12:00H</TimePickerItem>
            <TimePickerItem>13:00H</TimePickerItem>
            <TimePickerItem>14:00H</TimePickerItem>
            <TimePickerItem>15:00H</TimePickerItem>
            <TimePickerItem>16:00H</TimePickerItem>
            <TimePickerItem>17:00H</TimePickerItem>
            <TimePickerItem>18:00H</TimePickerItem>
            <TimePickerItem>19:00H</TimePickerItem>
            <TimePickerItem>20:00H</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
