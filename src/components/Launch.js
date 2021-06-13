import React, { Component, useContext } from "react";
import qs from "qs";
import hdOAuth from "../context/oauth.js";
import { Context as AuthContext } from '../context/fhirAuth';
import { Loader } from "semantic-ui-react";

const Launch = () => {
    const { state, initializeSmart } = useContext(AuthContext);
    if (state.redirectToTokenUri === true) {
        let oauth = new hdOAuth();
        oauth.setProps(
            state.iss,
            state.launch,
            state.authorizeUrl,
            state.tokenUrl
        );
        window.location = oauth.getTokenRedirectUri();
    }

    React.useEffect(() => {
        // Get the issuer from the URL.
        let querystring = qs.parse(window.location.search.slice(1));
        console.log(querystring);
        if (typeof querystring.iss === "undefined") {
            alert("Issuer not specified. Aborting.");
            window.location = "/";
            return;
        }

        if (typeof querystring.launch === "undefined") {
            alert("Launch code not specified. Aborting.");
            window.location = "/";
            return;
        }

        initializeSmart(querystring.iss, querystring.launch);
    }, []);

    if (state.error !== null) {
        return <div>Error: {state.error}</div>;
    }

    return (
        <Loader active inline="centered">
            {state.userFriendlyStatus}
        </Loader>
    );
}

export default Launch;

// class Launch extends Component {
//     constructor(props) {
//         super(props);
//
//         const { state, initializeSmart } = useContext(AuthContext);
//         this.fhirAuth = state;
//         this.initializeSmart = initializeSmart;
//     }
//
//     componentDidMount() {
//         // Get the issuer from the URL.
//         let querystring = qs.parse(window.location.search.slice(1));
//         console.log(querystring);
//         if (typeof querystring.iss === "undefined") {
//             alert("Issuer not specified. Aborting.");
//             window.location = "/";
//             return;
//         }
//
//         if (typeof querystring.launch === "undefined") {
//             alert("Launch code not specified. Aborting.");
//             window.location = "/";
//             return;
//         }
//
//         this.initializeSmart(querystring.iss, querystring.launch);
//     }
//
//     render() {
//         // Redirect to the token URI if appropriate.
//         // let fhirAuth = this.fhirAuth;
//         if (this.fhirAuth.redirectToTokenUri === true) {
//             let oauth = new hdOAuth();
//             oauth.setProps(
//                 this.fhirAuth.iss,
//                 this.fhirAuth.launch,
//                 this.fhirAuth.authorizeUrl,
//                 this.fhirAuth.tokenUrl
//             );
//             window.location = oauth.getTokenRedirectUri();
//         }
//
//         if (this.fhirAuth.error !== null) {
//             return <div>Error: {this.fhirAuth.error}</div>;
//         }
//
//         return (
//             <Loader active inline="centered">
//                 {this.fhirAuth.userFriendlyStatus}
//             </Loader>
//         );
//     }
// }