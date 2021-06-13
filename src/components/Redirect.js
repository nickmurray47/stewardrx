import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import {Icon, Message, Divider, Button, Container, Grid} from "semantic-ui-react";
import {Context as AuthContext} from "../context/fhirAuth";

class Redirect extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     const { state, getAccessToken, ToggleExampleVisibility } = useContext(AuthContext);
    //     const fhirAuth = state.fhirAuth;
    //     const fhirData = state.fhirData;
    //     this.initializeSmart = this.initializeSmart.bind(this);
    //     this.toggleExampleVisibility = this.toggleExampleVisibility.bind(this);
    // }
    //
    // componentDidMount() {
    //     this.props.getAccessToken(window.location.href);
    // }

    render() {
        // let fhirAuth = this.fhirAuth;
        //
        // if (fhirAuth.error !== null) {
        //     return (
        //         <Container style={{ paddingTop: "10px" }}>
        //             <Message negative icon>
        //                 <Icon name="warning sign" />
        //                 <Message.Content>
        //                     <Message.Header>Error</Message.Header>
        //                     <div>{fhirAuth.error.description}</div>
        //                     <Divider />
        //                     <Button basic as={Link} size="small" to="/">
        //                         &lt; Home
        //                     </Button>
        //                 </Message.Content>
        //             </Message>
        //         </Container>
        //     );
        // }

        return <Grid />;
    }
}

export default Redirect;