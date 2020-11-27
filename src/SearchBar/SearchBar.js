import React, { useCallback, useContext } from 'react';
import { Context } from '../store/store';
import { FILTER_CONTACTS } from '../store/actions';
import './SearchBar.scss';

const SearchBar = props => {
    const { state, dispatch } = useContext(Context);
    const { searchTerm } = state;

    const onChanage = useCallback((e) => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: {
                searchTerm: e.target.value
            }
        });
    }, [dispatch]);

    return (
        <div className="search-bar">
            <div className="search-bar-content">
                <div className="search-bar-content-title">
                    Contact List
                </div>
                <span className="search-bar-content-form">
                    <input
                        className="search-bar-content-form-input" 
                        placeholder="search..." type="search"
                        value={searchTerm}
                        onChange={onChanage}
                        />
                </span>
            </div>
        </div>
    );
};

export default SearchBar;