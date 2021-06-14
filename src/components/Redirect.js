import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import {Icon, Message, Divider, Button, Container, Grid} from "semantic-ui-react";
import {Context as AuthContext} from "../context/fhirAuth";

const Redirect = () => {
    const { state, getAccessToken, ToggleExampleVisibility } = useContext(AuthContext);
    React.useEffect(() => {
        getAccessToken(window.location.href);
    }, []);

    if (state.error !== null) {
        return (
            <Container style={{ paddingTop: "10px" }}>
                <Message negative icon>
                    <Icon name="warning sign" />
                    <Message.Content>
                        <Message.Header>Error</Message.Header>
                        <div>{state.error.description}</div>
                        <Divider />
                        <Button basic as={Link} size="small" to="/">
                            &lt; Home
                        </Button>
                    </Message.Content>
                </Message>
            </Container>
        );
    }

    return (
        <Container>
            <Message>
                <Message.Content>
                    <Message.Header>Here in Redirect</Message.Header>
                    <div>nothing to see here</div>
                </Message.Content>
            </Message>
            <Grid />
        </Container>
    );
}

export default Redirect;