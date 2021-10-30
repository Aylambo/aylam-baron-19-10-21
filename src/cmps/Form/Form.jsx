import React, { useState } from 'react'
import PropTypes from 'prop-types';
import useForecast from '../../services/useForecast'





const Form = ({ submitForm }) => {
    const { getAutocomplete, autoComplete } = useForecast()
    const [location, setLocation] = useState('')



    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!location || location === '') return;
        submitForm(location)
        setLocation('')
    }

    const autoCompletefunc = (ev) => {
        getAutocomplete(ev)
        setLocation(ev)
    }



    return (
        <form onSubmit={onSubmit}>
            <div className="input-div">
                <input
                    label="location"
                    type="text"
                    className="input form-control"
                    placeholder="Search for location"
                    value={location}
                    onChange={ev => autoCompletefunc(ev.target.value)}
                    required
                />
                <div className={(autoComplete) ? "autocomp-list" : "none"} >
                    {autoComplete && autoComplete.map((place, idx) => {
                        return (
                            <section className="autocomp-item" key={idx} onClick={() => submitForm(place.LocalizedName)}>
                                {place.LocalizedName},
                                {place.Country.LocalizedName}

                            </section>
                        )

                    })}
                </div>
            </div>


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