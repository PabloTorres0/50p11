import React from 'react';
import './App.css';
import Comp from './components/Comp';

function App() {
  
  const [keyEvent, setkeyEvent] = React.useState(null)

  window.addEventListener('keydown',(event)=>{
    console.log(event)
    setkeyEvent(event)
  })


  return (
    <div className='container'>
      {
        keyEvent ?  <div className='div-container'>
        <Comp title='event.key' info={keyEvent.key}/>
        <Comp title='event.keyCode' info={keyEvent.keyCode}/>
        <Comp title='event.code' info={keyEvent.code}/>
      </div> :
      <div className='start-container'>Press any key to get the keyCode</div>

      }
     
    </div>
  );
}

export default App;
