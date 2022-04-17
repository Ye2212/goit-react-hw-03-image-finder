import { BtnLoadMore } from "./Button.styled";
function Button({ onNextSearch }) {
    return (
        <BtnLoadMore onClick={onNextSearch}> Load More</ BtnLoadMore >
    )
}
export default Button;