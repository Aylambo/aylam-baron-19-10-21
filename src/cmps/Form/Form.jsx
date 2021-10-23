import React, {useState} from 'react'
import PropTypes from 'prop-types';



const Form = ({submitForm}) => {
    const [location, setLocation] = useState('')

    const onSubmit = (ev) => {
            ev.preventDefault();
            if (!location || location === '') return;
            submitForm(location)
            setLocation('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                label="location"
                type="text"
                className="input form-control"
                placeholder="Search for location"
                value={location}
                onChange={ev => setLocation(ev.target.value)}
                required
            />

            <button type="submit" className="button">
                SEARCH
            </button>
        </form>
    )
}
Form.propTypes = {
    submitForm: PropTypes.func.isRequired,
};

export default Form