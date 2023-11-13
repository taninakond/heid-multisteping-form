import PropTypes from 'prop-types';
import { useContext } from 'react';
import hmsfContext from '../../context/hmsfContext';

const SelectItem = ({ image, title }) => {
    const { updateStep01 } = useContext(hmsfContext);

    const updateSetp = () => {
        updateStep01(title);
    };

    return (
        <div className='hmsf-select-item' onClick={updateSetp}>
            <img src={image} alt='' />
            <span>{title}</span>
        </div>
    );
};

SelectItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default SelectItem;
