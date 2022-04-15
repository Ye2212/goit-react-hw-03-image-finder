import propTypes from 'prop-types';

import { Component } from 'react';

import { Header, Form, Button, Input } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';

class Searchbar extends Component {

    formSubmit = () => { }

    render() {
        return (
            < Header >
                <Form onSubmit={this.formSubmit} >
                    <Button
                        type="submit"
                    >
                        <span>
                            <GoSearch size="20" />
                        </span>
                    </Button>
                    <Input></Input></Form >
            </ Header >
        )
    }
}
Searchbar.propTypes = {
    onSubmit: propTypes.func,
}
export default Searchbar;