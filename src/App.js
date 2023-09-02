import './App.scss';
// import Button from './components/common/button'
import LandingPage from './components/format/landing-page'
// import Thumbnail from './components/common/thumbnail';
import ListingForm from './components/format/ListingForm';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ListingForm/>
    </div>
  );
}

export default App