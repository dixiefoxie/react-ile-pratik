import './App.css';
import NewApi from './components/NewApi';
import UserList from './components/UserList';
import Header from './components/Header';
import FontColor from './components/FontColor';
import Timer from './components/Timer';
import { NumberPlus } from './components/NumberPlus';
import { UseMap } from './components/UseMap';

function App() {
  return (
    <>


      <Header />
      <UserList />
      <hr></hr>
      <NewApi />
      <hr></hr>
      <FontColor />
      <hr></hr>
      <Timer />
      <hr></hr>
      <NumberPlus />
      <hr></hr>
      <UseMap />
      <hr></hr>

    </>
  );
}

export default App;
