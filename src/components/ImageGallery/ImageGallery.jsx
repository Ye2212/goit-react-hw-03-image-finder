import propTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, openModal }) {
    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                < ImageGalleryItem
                    key={id}
                    smallImage={webformatURL}
                    description={tags}
                    largeImage={largeImageURL}
                    openModal={openModal}
                />
            ))}
        </List>
    );
}
ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            smallImage: propTypes.string.isRequired,
            largeImage: propTypes.string.isRequired,
            tadescriptiongs: propTypes.string.isRequired,
        })),
    openModal: propTypes.func.isRequired,
}
export default ImageGallery;
