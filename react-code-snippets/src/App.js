import logo from './logo.svg';
import './App.css';
import ArrayWithDelete from './smallCode/ArrayWithDelete';
import IndexDbProject from './IndexDb/IndexDbProject';
import BlogModal from './modalCode/BlogModal';
import BlogList from './modalCode/BlogList';
import SearchComponent from './debounce/Debounce';
import JiraApp from './jiraApp/jiraApp';
import ReactBatching from './reactBatching/ReactBatching';
import Game from './snakeLaddder/Game';
import HomeModal from './createPortal/HomeModal';
import Todolist from './toDoList/Todolist';
import ImplemenationOfUsePrevious from './implementationofHook/implemenationOfUsePrevious';
import Pollyfill from './pollyfill/pollyfill';
import PromiseApp from './promise/PromiseApp';
import Stopwatch from './stopWatch/Stopwatch';

function App() {
  return (
    <div className="App">
     {/* <IndexDbProject/>
      <ArrayWithDelete/> */}
      {/* <BlogList/>
      <SearchComponent/> */}
      {/* <BlogModal/> */}
      {/* <JiraApp/> */}
      {/* <HomeModal/> */}
      {/* <ReactBatching/> { /*  Memo uses */ } 
     <ImplemenationOfUsePrevious/>
     {/* <Pollyfill/> */}
     <Stopwatch/>
     <PromiseApp/>
    </div>
  );
}

export default App;
