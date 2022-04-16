import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searcbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import { fetchAPI } from "services/api";
// import scrollSmooth from "services/smoothScroll";


export default class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
  }


  componentDidMount() {
    this.setState({
      images: [],
    })
  }


  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;


    if (prevQuery !== nextQuery) {
      this.setState({ images: [] })

      this.fetchImages()
    };

    if (nextPage > prevPage) {
      this.fetchImages()
    };

    // scrollSmooth();

  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ images: [] })
    fetchAPI(query, page).then(res => {
      this.setState(prevState => ({
        images: [...prevState.images, ...res.hits],
      }))
    })
  }

  // функция для поиска картинки по ключевому слову, попадает в пропс компоненту Searchbar
  onSearchRequest = query => {
    this.setState({ query });
  }
  onNextSearch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchRequest} />
        <ImageGallery images={images} />
        {images.length > 0 && < Button onClick={this.onNextSearch} />}


        <ToastContainer />
      </>
    );
  }

};
