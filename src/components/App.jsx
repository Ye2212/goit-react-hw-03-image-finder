import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searcbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import { fetchAPI } from "services/api";


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
    const { query } = this.state;

    if (prevQuery !== nextQuery) {
      this.setState({ images: [] })
      fetchAPI(query).then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.hits],
        }))
      })
    }
  }

  // функция для поиска картинки по ключевому слову, попадает в пропс компоненту Searchbar
  onSearchRequest = query => {
    this.setState({ query });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchRequest} />
        <ImageGallery images={this.state.images} />
        <Button />
        <ToastContainer />
      </>
    );
  }

};
