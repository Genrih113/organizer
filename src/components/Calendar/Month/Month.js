import './Month.css';

function Month(props) {

  return (
    <table className="month">
      <caption className="month__name">
        {props.monthName}
      </caption>
      <thead>
        <tr className="month__week-row_header">
          <th className="month__week-day">Пн</th>
          <th className="month__week-day">Вт</th>
          <th className="month__week-day">Ср</th>
          <th className="month__week-day">Чт</th>
          <th className="month__week-day">Пт</th>
          <th className="month__week-day">Сб</th>
          <th className="month__week-day">Вс</th>
        </tr>
      </thead>
      <tbody>
        <tr className="month__week-row">
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day">1</td>
          <td className="month__day">2</td>
          <td className="month__day">3</td>
        </tr>
        <tr className="month__week-row">
          <td className="month__day">4</td>
          <td className="month__day">5</td>
          <td className="month__day">6</td>
          <td className="month__day">7</td>
          <td className="month__day">8</td>
          <td className="month__day">9</td>
          <td className="month__day">10</td>
        </tr>
        <tr className="month__week-row">
          <td className="month__day">11</td>
          <td className="month__day">12</td>
          <td className="month__day">13</td>
          <td className="month__day">14</td>
          <td className="month__day">15</td>
          <td className="month__day">16</td>
          <td className="month__day">17</td>
        </tr>
        <tr className="month__week-row">
          <td className="month__day">18</td>
          <td className="month__day">19</td>
          <td className="month__day">20</td>
          <td className="month__day">21</td>
          <td className="month__day">22</td>
          <td className="month__day">23</td>
          <td className="month__day">24</td>
        </tr>
        <tr className="month__week-row">
          <td className="month__day">25</td>
          <td className="month__day">26</td>
          <td className="month__day">27</td>
          <td className="month__day">28</td>
          <td className="month__day">29</td>
          <td className="month__day">30</td>
          <td className="month__day">31</td>
        </tr>
        <tr className="month__week-row">
          <td className="month__day">32</td>
          <td className="month__day">33</td>
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day"></td>
          <td className="month__day"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Month;