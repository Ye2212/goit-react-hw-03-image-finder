import propTypes from 'prop-types';
import { Text } from "./HelloText.styled";

function HelloText({ text }) {
  return (<Text>{text}</Text>)
}

HelloText.propTypes = {
  text: propTypes.string.isRequired,
}
export default HelloText;