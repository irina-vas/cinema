import React from 'react';
import loader from '../images/Spinner.gif';


function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
}

export default Loader;