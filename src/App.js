//import logo from './logo.svg';
import './App.css';
import HeaderContainer from '../src/containers/HeaderContainer';
import HomeContainer from '../src/containers/HomeContainer';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  
  return (
    <>
      <div className='col-md-12'>
        <div className='st'>
          <div className='col-md-2'>
            <HeaderContainer />
          </div>
          <div className='col-md-10'>
            <HomeContainer />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
