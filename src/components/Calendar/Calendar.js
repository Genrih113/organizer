import './Calendar.css';
import Month from './Month/Month';


function Calendar(props) {

  return (
    <section className="calendar">
      <Month monthName="Январь" />
      <Month monthName="Февраль" />
      <Month monthName="Март" />
      <Month monthName="Апрель" />
      <Month monthName="Май" />
      <Month monthName="Июнь" />
      <Month monthName="Июль" />
      <Month monthName="Август" />
      <Month monthName="Сентябрь" />
      <Month monthName="Октябрь" />
      <Month monthName="Ноябрь" />
      <Month monthName="Декабрь" />
    </section>
  )
}

export default Calendar;