import { Calendar } from "@/components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
    const isDateSelected = false
    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar />

            {isDateSelected && ( 
            <TimePicker >
                <TimePickerHeader>
                    Terça-Feira <span>2 de Junho</span>
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