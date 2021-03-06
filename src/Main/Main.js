import React, { useEffect, useContext } from 'react';
import { CommonLoading } from 'react-loadingg';
import { SET_CONTACTS } from '../store/actions';
import { Context } from '../store/store';
import SearchBar from '../SearchBar/SearchBar';
import ContactsList from '../ContactsList/ContactsList';

const Main = props => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        fetch('/contacts')
          .then(response => response.json())
          .then(data => {
            dispatch({ 
              type: SET_CONTACTS,
              payload: { data }
            })
          })
          .catch(err => {
            console.log(err);
            dispatch({ 
              type: SET_CONTACTS,
              payload: { data: [] }
            })
          });
    }, [dispatch]);

    const { ready } = state;

    if (!ready) return <CommonLoading size="large" />;

    return (
        <div className="app">
            <SearchBar />
            <ContactsList />
      </div>
    );
}

export default Main;