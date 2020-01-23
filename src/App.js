import React from 'react';
import photo from './photo1.jpg';
import './style.css';

function App() {

  let title = "my title";

  return (

    <div style={{

      border: 'solid 1px black',

      maxWidth: '100vw'

    }}>

      <h1 className="title red">

        {title}

      </h1>

      <img src={photo} />

      <img src="/photo1.jpg" />

    </div>


  );

}

export default App;
