import PropTypes from 'prop-types';
import { useReducer } from 'react';
import HmsfContext from './hmsfContext';
import { hmsfReducer, initialState } from './hmsfReducer';

const HmsfProvider = ({ children }) => {
    const [state, dispatch] = useReducer(hmsfReducer, initialState);
    const value = {
        state,
        updateStep01: (payload) => {
            dispatch({ type: 'STEP01', payload });
        },
        updateStep02: (payload) => {
            dispatch({ type: 'STEP02', payload });
        },
        updateStep03: (payload) => {
            dispatch({ type: 'STEP03', payload });
        },
        updateStep04: (payload) => {
            dispatch({ type: 'STEP04', payload });
        },
        updateStep05: (payload) => {
            dispatch({ type: 'STEP05', payload });
        },
        updateStep06: (payload) => {
            dispatch({ type: 'STEP06', payload });
        },
    };
    return (
        <HmsfContext.Provider value={value}>{children}</HmsfContext.Provider>
    );
};

HmsfProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default HmsfProvider;
