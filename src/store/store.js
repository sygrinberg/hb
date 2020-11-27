import React from 'react';
import { FILTER_CONTACTS, SET_CONTACTS } from './actions';
import { prepareContacts, filterContacts } from './reducerHelpers';

export const Context = React.createContext();

const actions = {
    [SET_CONTACTS]: (state, payload = {}) => {
        const preparedContacts = prepareContacts(payload.data || []);
        return {
            ...state,
            ready: true,
            contacts: preparedContacts,
            filteredContacts: preparedContacts
        };
    },
    [FILTER_CONTACTS]: (state, payload) => {
        const { searchTerm } = payload;
        return {
            ...state,
            searchTerm,
            filteredContacts: filterContacts(searchTerm, state.contacts)
        };
    },
};

export const initialState = {
    ready: false,
    search: '',
    contacts: [],
    filteredContacts: []
};

const reducer = (state, { type = '', payload = {} }) => {
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export const Store = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {props.children}
      </Context.Provider>
    );
};