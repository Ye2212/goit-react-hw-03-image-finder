import { Component } from "react";
// import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow, Img } from './Modal.styled';



const modal = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {};
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentDidUpdate() {
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
    const { currentImg, currentImgDescr } = this.props;

    // return createPortal(
    return (

      < Backdrop onClick={this.handleClickBackdrop} >
        <ModalWindow>
          <Img
            src={currentImg}
            alt={currentImgDescr}
            loading="lazy" />
        </ModalWindow >
      </Backdrop >
      // , modal
    );

  }
}
export default Modal;