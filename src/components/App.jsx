import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAllPhotos } from 'Servises/Servises';
import s from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSetImages();
    }
  }

  handleSetImages = async () => {
    try {
      const { page, query } = this.state;
      const data = await getAllPhotos(query, page);

      if (data) {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleGetQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  render() {
    const { images } = this.state;

    return (
      <div className={s.App}>
        <Searchbar handleGetQuery={this.handleGetQuery} />

        {images.length > 0 && <ImageGallery images={images} />}
      </div>
    );
  }
}
