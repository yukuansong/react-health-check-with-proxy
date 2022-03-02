import logo from './logo.svg';
import './App.css';

import React, {Fragment} from 'react';
import StatusApp from './Components/StatusApp';
import { environments } from './config';


function App( {environemnts} ) {
  return (
    <Fragment>
        {
          environments.map( ({ name, apps }, index) => {
            return <Environment name={name} apps={apps} key={index} />

          })
        }
    </Fragment>
  );
}

const Environment = ({name, apps}) => {

  const renderApps = apps => {
    return apps.map((app, index) => {
      return (
        <StatusApp url={app.url} name={name} interval={app.interval} key={index} />
      )
    }
    )
  };

  return (
    <div className='environment'>
      <div className='title'>{name}</div>
      <div className='row'>{renderApps(apps)}</div>
    </div>
  )

}



export default App;
