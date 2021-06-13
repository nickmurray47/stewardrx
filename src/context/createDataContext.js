import React, { useReducer } from 'react';

// This component shepherds data from BlogPostProvider to BlogList

// actions has all the available methods that can change our state
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // loop over each of the actions
        // actions === { addBlogPost: (dispatch) => return () => {} } }
        const boundActions = {};
        for (let key in actions) {

            // key === 'addBlogPost'
            if (actions.hasOwnProperty(key)) {

                // tie each bound action with the dispatch function
                boundActions[key] = actions[key](dispatch);
            }
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>);
    }

    return { Context, Provider };
};