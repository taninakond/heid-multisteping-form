import { Fragment } from 'react';
import SelectItem from './SelectItem';

const FirstSetp = () => {
    const baseUrl = 'https://heid.cmeta.de/';
    return (
        <Fragment>
            <div className='hmsf-progress-bar'></div>
            <div className='hmsf-step-title'>
                <span>1</span>Wählen Sie die Immobilien aus
            </div>
            <div className='hmsf-select-box'>
                <SelectItem
                    image={`${baseUrl}wp-content/uploads/2023/11/house.svg`}
                    title='Haus'
                />

                <SelectItem
                    image={`${baseUrl}wp-content/uploads/2023/11/Wohnung.svg`}
                    title='Wohnung'
                />

                <SelectItem
                    image={`${baseUrl}wp-content/uploads/2023/11/Gewerbe.svg`}
                    title='Gewerbe'
                />

                <SelectItem
                    image={`${baseUrl}wp-content/uploads/2023/11/Grundstueck.svg`}
                    title='Grundstück'
                />

                <SelectItem
                    image={`${baseUrl}wp-content/uploads/2023/11/Sonder-immobilien.svg`}
                    title='Sonder-immobilien'
                />
            </div>
        </Fragment>
    );
};

export default FirstSetp;
