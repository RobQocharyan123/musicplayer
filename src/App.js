import './App.css';
import { Header } from './components/header/Header';
import { SongList } from './components/songlist/SongList';

function App() {
  return (
    <div className="App">
      <Header />
     <SongList />
    </div>
  );
}

export default App;
