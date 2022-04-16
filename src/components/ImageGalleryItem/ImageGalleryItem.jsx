// import propTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

function ImageGalleryItem({ smallImage, largeImage, modalOpenProp }) {
    return (
        <Item
            onClick={modalOpenProp}
        >
            <Image src={smallImage} data-large={largeImage} />
        </Item>
    );
}
// ImageGalleryItem.propTypes = {
//     smallImage: propTypes.string.isRequired,
//     description: propTypes.string.isRequired,
//     largeImage: propTypes.string.isRequired,
//     onClick: propTypes.func.isRequired,
// };
export default ImageGalleryItem;
