import { BtnLoadMore } from "./Button.styled";
function Button({ onClick }) {
    return (
        <BtnLoadMore onClick={onClick}> Load More</ BtnLoadMore >
    )
}
export default Button;