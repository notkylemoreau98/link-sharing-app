// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CustomizeLinks from './layouts/CustomizeLinks';
import PhoneDisplay from './layouts/PhoneDisplay';

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router> */}
      <main className='bg-[#EEEEEE] min-h-screen p-3'>
        <Header />

        <section className='flex justify-evenly gap-5'>
          <div className='flex-1 bg-white my-3 p-10 rounded-lg text-center'>
            <PhoneDisplay />
          </div>

          {/* Need a checker with recoil to determine active component and render that one */}
          <div className='flex-2'>
            <CustomizeLinks />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
