import React from 'react';
import thanks_logo from '../images/second_modal.png';
import close_icon from '../images/close.png';


function ModalSecond({ modalSecClose }) {
  return (
    <div className="modal_second">
      <div className="close_icon">
        <img src={close_icon} alt="close" onClick={ modalSecClose} />
      </div>
      <div className="modal_sec_logo">
        <img src={thanks_logo} alt="thank you" />
      </div>
    </div>
  );
}

export default ModalSecond;
