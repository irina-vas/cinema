import React, { useEffect } from 'react';
import '../styles/styles.css';
import ReactDom from 'react-dom';



function Modal({ modalOpen, modalClose }) {
  useEffect(() => {
    let modal = document.createElement('div');
    modal.classList.add('portal');
    document.body.prepend(modal)
  },[])


  if(!modalOpen) return null
  let seats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  let row1 = seats.slice(0,5);
  let row2 = seats.slice(6,11);
  let row3 = seats.slice(11,16);
  let row4 = seats.slice(16)

  return ReactDom.createPortal(
    
    <div className="modal_wrapper">
      
      <div className="modal_main">
      <div className="modal_headline">
        <p>свобоно <div className="empty"></div></p>
        <p>выбранно <div className="chosen"></div></p>
        <p>занято <div className="occupited"></div></p>
      </div>
        <div className="modal_seats">
          {row1.map((item, index) => {
            return (
              <div className="modal_seats_row1">{item}</div> 
            )
          })}
        </div>
        <div className="modal_seats">
          {row2.map((item, index) => {
            return (
              <div className="modal_seats_row1">{item}</div> 
            )
          })}
        </div>
        <div className="modal_seats">
          {row3.map((item, index) => {
            return (
              <div className="modal_seats_row1">{item}</div> 
            )
          })}
        </div>
        <div className="modal_seats">
          {row4.map((item, index) => {
            return (
              <div className="modal_seats_row1">{item}</div> 
            )
          })}
        </div>
        <button onClick={modalClose} className="modal_closeBtn"></button>
      </div>
      
      MODAL MODAL MODAL MODAL MODAL MODAL
    </div>,
    document.querySelector('.portal')
  )
}

export default Modal;
