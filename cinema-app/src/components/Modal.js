import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import ReactDom from 'react-dom';
import ModalSecond from './ModalSecond';


function Modal({ modalOpen, modalClose, modalSecond,  setModalSecond, modalSecClose }) {

  let seats = [];
  for (let i = 1; i < 21; i++) {
    seats.push(i)
  }

  useEffect(() => {
    let modal = document.createElement('div');
    modal.classList.add('portal');
    document.body.prepend(modal)
  },[])


  if(!modalOpen) return null

  return ReactDom.createPortal(
    
    <div className="modal_wrapper">   
      <div className="modal_main">
      <div className="modal_headline">
        <p>свобоно <span className="empty"></span></p>
        <p>выбранно <span className="chosen"></span></p>
        <p>занято <span className="occupited"></span></p>
      </div>
        <div className="modal_seats">
          {seats.map((item, index) => {
            return (
              <button onClick={(e) => e.currentTarget.setAttribute('chosen','chosen')} className="modal_seats_row" key={index}>{item}</button> 
            )
          })}
        </div>
        {modalSecond ? <ModalSecond modalSecClose={modalSecClose}/> : null}
        
        <div className="btn_wrapper">
          <button onClick={modalClose} className="modal_closeBtn">ЗАКРЫТЬ</button>
          <button className="modal_submitBtn" onClick={() => setModalSecond(true)}>КУПИТЬ</button>
          </div>
        </div>
       </div>,
    document.querySelector('.portal')
  )
}

export default Modal;

