import React, { useState } from 'react';
import './App.css';

function TopBar() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '50px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <button className="topBarButton">History</button>
      <button className="topBarButton">About us</button>
      <button className="topBarButton">Contact</button>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '10px',
        padding: '1px'
      }}>
      </div>
      <button className="topBarButton">+New Chat</button>
      <button className="topBarButton">Import</button>
    </div>
  );
}

function Main() {

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: '200px 250px',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundColor: 'black'
    }}>

      <div style={{
        gridRow: '1',
        marginTop: '100px',
        textAlign: 'center',
        color: 'white',
        fontSize: '100px',
        fontWeight: 'bold',
      }}>
        AlumAI
      </div>

      <div style={{
        gridRow: '2',
        marginTop: '50px',
        backgroundColor: '#222222',
        justifySelf: 'center',
        width: '80%',
        height: '200px',
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
      }}>
        <div className="mainGuideGrid" style={{
          gridColumn: '1', backgroundColor: '#222222',
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold', fontSize: '20px'}}>Examples</button>
          <button className="mainGuideButton">"What universities in the East have tuitions less than $10000 per year?"</button>
          <button className="mainGuideButton">Best finance programs in California</button>
          <button className="mainGuideButton">Transferring summer credit to my university</button>
        </div>

        <div style={{ gridColumn: '2', display: 'flex', alignItems: 'center'}}>
          <div style={{ height: '80%', borderRight: '1px solid black' }}></div>
        </div>

        <div className="mainGuideGrid" style={{
          gridColumn: '3', backgroundColor: '#222222'
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold', fontSize: '20px'}}>Potential</button>
          <button className="mainGuideButton">...</button>
          <button className="mainGuideButton">...</button>
          <button className="mainGuideButton">...</button>
        </div>

        <div style={{ gridColumn: '4', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: '80%', borderRight: '1px solid black' }}></div>
        </div>

        <div className="mainGuideGrid" style={{
          gridColumn: '5', backgroundColor: '#222222'
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold', fontSize: '20px'}}>Limitations</button>
          <button className="mainGuideButton">...</button>
          <button className="mainGuideButton">...</button>
          <button className="mainGuideButton">...</button>
        </div>
      </div>

    </div>
  );
}

function TextField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="textfield-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="textfield-input"
      />
    </div>
  );
}

function BottomBar() {
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        height: '32px',
        width: '97%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTop: '1px solid #333',
      }}>
        <button className="bottomBarButton">Privacy</button>
        <button className="bottomBarButton">Terms</button>
        <button className="bottomBarButton">Settings</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <TopBar/>
      <Main/>
      <TextField/>
      <BottomBar/>
    </div>
  );
}

export default App;