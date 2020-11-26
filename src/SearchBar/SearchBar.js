import React, { useCallback, useContext } from 'react';
import { Context } from '../store/store';
import { FILTER_CONTACTS } from '../store/actions';
import './SearchBar.scss';

export default props => {
    const { state, dispatch } = useContext(Context);
    const { searchTerm } = state;

    const onChanage = useCallback((e) => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: {
                searchTerm: e.target.value
            }
        });
    }, []);

    return (
        <div className="search-bar">


            <div className="search-bar-title">
                Contact List
            </div>

            <div className="search-bar-form">
                <input
                    className="search-bar-form-input" 
                    placeholder="search..." type="search"
                    value={searchTerm}
                    onChange={onChanage}
                />
            </div>


            {/* <div class="search-bar-form">
                <input type="text" name="name" placeholder="Julia Adams" class="search-bar-form-input">
                <span class="search-bar-form-icon">
                    <svg enable-background="new 0 0 98 98" version="1.1" viewBox="0 0 98 122.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m84.3 90.1h-70.6c-1.7 0-3-1.3-3-3 0-21.2 13.6-32.9 38.3-32.9s38.3 11.7 38.3 32.9c0 1.7-1.3 3-3 3z"></path><path d="m49 49.8c-11 0-19.9-9.7-19.9-21.6 0-11.6 8.6-20.3 19.9-20.3s19.9 8.7 19.9 20.3c0 11.9-8.9 21.6-19.9 21.6z"></path></svg>
                </span>
            </div> */}


            {/* <input
                className="search-bar-input"
                value={searchTerm}
                onChange={onChanage}
                type="search"
                placeholder="search..."
            /> */}
        </div>
    );
};