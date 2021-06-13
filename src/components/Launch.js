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