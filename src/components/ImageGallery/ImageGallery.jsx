import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery() {
    return (
        <List>
            <ImageGalleryItem />
            <ImageGalleryItem />
            <ImageGalleryItem />
        </List>
    )
}

export default ImageGallery;