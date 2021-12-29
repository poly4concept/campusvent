import './App.css';
import Sidebar from './sidebar';
import Feed from './feed';
import Notification from './notification';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Notification/>
    </div>
  );
}

export default App;
