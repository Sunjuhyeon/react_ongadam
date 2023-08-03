import React from 'react';
import Hd from './layout/Hd'
import Contents from './layout/Contents'
import Ft from './layout/Ft'
function App(props) {
  return (
    <>
    <Hd id="hd"></Hd>
    <Contents id="contents"></Contents>
    <Ft id="ft"></Ft>
    </>
  );
}

export default App;
