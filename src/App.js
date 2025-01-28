import './App.css';
import Screen from './Lesson5_redux/component/Screen.js';
import store from './Lesson5_redux/redux/Store.js';
import { Provider } from 'react';
import Nav from './web/components/nav.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   
    // <BrowserRouter>
    //   <div className="App"
    //     <Nav />
    //   </div>
    // </BrowserRouter>
     <>
    <Provider store={store}>
         <BrowserRouter>
        <Screen />
        </BrowserRouter>
     </Provider>
     </>
  );
}

export default App;
