import './ToDoFeature.css';

function ToDoFeature (props) {

  return (
    <section className="todo">
      <div className="todo__block">
        <button className="todo__list-button">Добавить задачу</button>
        <ol className="todo__list">
          <li className="list-item list-item__margin">
            <div className="list-item__checkbox-container">
              <input className="list-item__checkbox" type="checkbox"></input>
              <span className="list-item__checkbox-span"></span>
            </div>
            <span className="list-item__text">first deal</span>
            <button className="list-item__delete-button">X</button>
          </li>
          <li className="list-item list-item__margin">
            <div className="list-item__checkbox-container">
              <input className="list-item__checkbox" type="checkbox"></input>
              <span className="list-item__checkbox-span"></span>
            </div>
            <span className="list-item__text">first deal</span>
            <button className="list-item__delete-button">X</button>
          </li>
        </ol>
      </div>
      <div className="todo__block">
        <button className="todo__list-button">Посмотреть выполненные</button>
        <ol className="todo__list">
          <li className="list-item list-item__margin">
            <div className="list-item__checkbox-container">
              <input className="list-item__checkbox" type="checkbox"></input>
              <span className="list-item__checkbox-span">V</span>
            </div>
            <span className="list-item__text">first deal</span>
            <button className="list-item__delete-button">X</button>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ToDoFeature;