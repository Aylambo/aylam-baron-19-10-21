import React, { useState } from 'react';
import PropTypes from 'prop-types';



const Error = ({ msg, error }) => {

    const [isModalOpen, setModalOpen] = useState(true);
    
        const closeModal = () => {
           const isError =  error = !error
           setModalOpen(isError)
        }
        
        return (
            <div className={(isModalOpen) ? "error-alert" : "none"} onClick={closeModal} role="alert">
                <section>X</section>
                <div>{msg}</div>
            </div>
    );
}

Error.propTypes = {
    msg: PropTypes.string,
};

Error.defaultProps = {
    msg: 'An error occurred',
};

export default Error;
