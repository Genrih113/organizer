import Calendar from '../Calendar/Calendar';
import ToDoFeature from '../ToDoFeature/ToDoFeature';
import './FeatureContainer.css';

function FeatureContainer(props) {

  return (
    <main className="feature-container">
      {/* <ToDoFeature /> */}
      <Calendar />
    </main>
  );
}

export default FeatureContainer;