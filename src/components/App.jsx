import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import HelloText from "./HelloText/HelloText";
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searcbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import { fetchAPI } from "services/api";
import scrollSmooth from "services/smoothScroll";
// import { BallTriangle } from 'react-loader-spinner'
import LoaderBallTriangle from "./Loader/Loader";



export default class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  }


  componentDidMount() {
    this.setState({
      images: [],
    })
  }


  componentDidUpdate(prevProps, prevState) {
    // проверка на изменение состояния стейта обязательна в componentDidUpdate
    // если условие if выполнится, то =>
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      // обнулится массив картинок, коллекция будет рендерится исходя из запроса, 
      // если ключевое слово изменяется, коллекция обнуляется
      this.setState({ images: [] });

      // включаем лоадер
      this.setState({ loading: true });

      // обращение к серверу
      this.fetchImages()
    };

    if (nextPage > prevPage) {
      this.fetchImages()
    };

    scrollSmooth();

  }

  fetchImages = () => {
    const { query, page } = this.state;
    fetchAPI(query, page).then(res => {
      this.setState(prevState => ({
        images: [...prevState.images, ...res.hits],
      }))
    })
      // отключаем лоадер
      .finally(() => this.setState({ loading: false }))
  }

  // функция для поиска картинки по ключевому слову, попадает в пропс компоненту Searchbar
  onSearchRequest = query => {
    this.setState({ query });
  }
  // функция для увеличения значения страницы на 1, обработчик событя на кнопке LoadMore
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
        {images.length === 0 && !this.state.loading && <HelloText text="Hello! What are you looking for?" />}
        <ImageGallery images={images} />

        {images.length > 0 && < Button onClick={this.onNextSearch} />}

        {this.state.loading && < LoaderBallTriangle />}
        <ToastContainer />
      </>
    );
  }

};
