import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={s.styleImageItem}>
      <img src={webformatURL} alt={tags} className={s.styleImageItem} />
    </li>
  );
};
