import { Component } from "react";
import { fetchAPI } from "services/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderBallTriangle from "./Loader/Loader";
import HelloText from "./HelloText/HelloText";
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from "./Searchbar/Searcbar";
import Button from "./Button/Button";
import scrollSmooth from "services/smoothScroll";
import Modal from "./Modal/Modal";



export default class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    showModal: false,
    status: 'idle',

  };

  componentDidMount() {
    this.setState({ images: [] })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;
    const prevPage = prevState.page;
    const page = this.state.page;

    if (prevQuery !== currentQuery) {
      this.setState({
        images: [],
      })
      this.fetchImages();
    }

    if (page > prevPage) {
      this.fetchImages();
    };

    scrollSmooth();
  }

  fetchImages = () => {
    const { query, page, } = this.state;
    this.setState({ status: 'pending' })

    fetchAPI(query, page)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };


  // функция для поиска картинки по ключевому слову, попадает в пропс компоненту Searchbar
  onSearchRequest = newQuery => {
    if (this.state.query !== newQuery) {
      this.setState({
        query: newQuery,
        page: 1,
      });
    }

  }
  // функция для увеличения значения страницы на 1, обработчик событя на кнопке LoadMore
  onNextSearch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }

  openModal = event => {
    const currentImg = event.target.dataset.large;
    const currentImgDescr = event.target.alt;
    if (event.target.nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        currentImg: currentImg,
        currentImgDescr: currentImgDescr,
      }));
    }
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };


  render() {
    const {
      // loading,
      showModal,
      currentImg,
      currentImgDescr,
      status,
      images,
    } = this.state;


    return (
      <>
        <Searchbar onSubmit={this.onSearchRequest} />

        {status === 'idle' && <HelloText text="Hello! What are you looking for?" />}

        {status === 'resolved' && < ImageGallery images={images} openModal={this.openModal} />}

        {status === 'pending' && < LoaderBallTriangle />}

        {status === 'resolved' && < Button onClick={this.onNextSearch} />}

        {showModal && < Modal
          onClose={this.toggleModal}
          currentImg={currentImg}
          currentImgDescr={currentImgDescr}
        />}

        <ToastContainer />
      </>
    );
  }

};
