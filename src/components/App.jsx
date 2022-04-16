import { Component } from "react";
import Searchbar from "./Searchbar/Searcbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
// import { fetchAPI } from "services/api";


export default class App extends Component {

  componentDidMount() {
  }
  // searchName = async ({ name }) => {
  //   try {
  //     const res = await fetchAPI(name);
  //   }
  //   catch (error) { }
  // }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchName} />
        <ImageGallery />
        <Button />
      </>
    );
  }

};
