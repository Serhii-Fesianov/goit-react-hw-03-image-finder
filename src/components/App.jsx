import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import s from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {};

  handleFindEvent = () => {};

  render() {
    return (
      <>
        <Searchbar handleFindEvent={this.handleFindEvent()} />
        <ImageGallery />
      </>
    );
  }
}
