import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({
    images,
    modalOpen }) {
    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                < ImageGalleryItem
                    key={id}
                    smallImage={webformatURL}
                    description={tags}
                    largeImage={largeImageURL}
                    modalOpenProp={modalOpen}
                />
            ))}
        </List>
    );
}

export default ImageGallery;
