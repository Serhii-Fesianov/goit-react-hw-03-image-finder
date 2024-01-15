import s from './Modal.module.css';

export const Modal = ({ largeImageURL, tags, handleClickBackdrop }) => {
  return (
    <div className={s.overlay} onClick={handleClickBackdrop}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
