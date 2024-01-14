import React, { Component } from 'react';

export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChangeEvent = event => {
    const query = event.target.value;
    this.setState({ query });
  };

  handleFindEvent = event => {
    event.preventDefault();
    const { query } = this.state;
    this.props.handleGetQuery(query);
    this.setState({ query: '' });
    event.target.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleFindEvent}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            required
            autoFocus
            onChange={this.handleChangeEvent}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
