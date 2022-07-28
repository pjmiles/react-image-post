import './App.css';
import Header from './components/header/Header';
import DisplayImage from './components/display/DisplayImage'
// import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Search images={DisplayImage} /> */}
      <DisplayImage />
    </div>
  );
}

export default App;
