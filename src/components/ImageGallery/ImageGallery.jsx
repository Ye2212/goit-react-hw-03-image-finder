import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({
    images,
    modalOpen }) {
    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL }) => (
                < ImageGalleryItem
                    key={id}
                    smallImage={webformatURL}
                    largeImage={largeImageURL}
                    modalOpenProp={modalOpen}
                />
            ))}
        </List>
    );
}

export default ImageGallery;
