import propTypes from 'prop-types';
import { Component } from 'react';

import { Header, Form, Button, Span, Input } from './Searchbar.styled';

class Searchbar extends Component {

    formSubmit = () => { }

    render() {
        return (
            <Header>
                <Form onSubmit={this.formSubmit}>
                    <Button>
                        <Span>Search</Span>
                    </Button>
                    <Input></Input>
                </Form>
            </Header >
        )
    }
}
Searchbar.propTypes = {
    onSubmit: propTypes.func,
}
export default Searchbar;