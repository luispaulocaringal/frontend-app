import { useState } from 'react';
import type { Route } from "./+types/home";
import Navbar from "../components/navbar";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '750px',
  },
};

export default function Home() {  
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#app');

  return (
    <div id="app">
      <Navbar/>
      <br/>
      <div className="md:container md:mx-auto h-lvh">
        <div>
          <div>
            <button className="rounded bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4" onClick={openModal}>Add IP</button>
          </div>
        </div>
      </div>
      <div>      
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="grid auto-cols-auto grid-flow-col">
            <h2 className="font-bold">Add IP</h2>
            <div>
              <button className="rounded bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 float-right" onClick={closeModal}>
                <svg className="fill-white" height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
                </svg>
              </button>
            </div>
          </div>
          <br/>
          <form>
            <div className="grid gap-5">
              <div>
                <label>
                  <b>Label<span className="text-red-500">*</span></b>{" "}
                  <input className="rounded border-1 border-gray-400 w-full px-2" type="text" name="username"/>
                </label>
              </div>
              <div>
                <label>
                  <b>IP Address<span className="text-red-500">*</span></b>{" "}
                  <input className="rounded border-1 border-gray-400 w-full px-2" type="password" name="password"/>
                </label>
              </div>
              <div>
                <label>
                  <b>Comment </b>{" "}
                  <textarea className="rounded border-1 border-gray-400 w-full px-2" name="comment"></textarea>
                </label>
              </div>
            </div>
          </form>
          <br/>
          <div className="grid auto-cols-auto grid-flow-col">
            <div>
              <button className="rounded bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4" onClick={closeModal}>Submit</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )          
}
