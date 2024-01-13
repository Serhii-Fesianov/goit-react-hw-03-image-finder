import s from './Searchbar.module.css';

export const Searchbar = ({ handleFindEvent }) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button" onClick={handleFindEvent}>
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
