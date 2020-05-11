import React from 'react';
import Divider from '@material-ui/core/Divider';
// Components
import About from './about/About';
import Technologies from './technologies/Technologies';

const Main = () => {
  return (
    <div>
      <About />
      <Divider />
      <Technologies />
    </div>
  )
}

export default Main;
