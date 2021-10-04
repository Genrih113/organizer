import './Navigation.css';

function Navigation(props) {

  return (
    <nav className="navigation">
      <button className="navigation__button">&#60;</button>
      <div className="navigation__slider">
        <span className="navigation__feature">toDo</span>
        <span className="navigation__feature">f1</span>
        <span className="navigation__feature">f2</span>
        <span className="navigation__feature">f3</span>
        <span className="navigation__feature">toDo</span>
        <span className="navigation__feature">f1</span>
        <span className="navigation__feature">f2</span>
        <span className="navigation__feature">f3</span>
      </div>
      <button className="navigation__button">&#62;</button>
    </nav>
  );
}

export default Navigation;