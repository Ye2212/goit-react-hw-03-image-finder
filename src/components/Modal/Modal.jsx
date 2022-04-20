import { Component } from "react";
import propTypes from 'prop-types';
// import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow, Img } from './Modal.styled';



// const modal = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: propTypes.func.isRequired,
    largeImage: propTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {


    // return createPortal(
    return (

      < Backdrop onClick={this.handleClickBackdrop} >
        <ModalWindow>
          <Img
            src={this.props.largeImage}
            // alt={openModalImg}
            loading="lazy" />
        </ModalWindow >
      </Backdrop >
      // , modal
    );
  }
}
export default Modal;