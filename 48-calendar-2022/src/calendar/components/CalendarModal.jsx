import { useState } from "react";
import Modal from "react-modal"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('Cerrando modal');
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onCloseModal }
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
      <h1>Hola mundo</h1>
      <hr />
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
    </Modal>
  )
}
