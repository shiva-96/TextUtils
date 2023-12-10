import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    const setAlertType = (word)=>{
        return word[0].toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{setAlertType(props.alert.type)}</strong> : {props.alert.mssg}
            {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button> */}
        </div>
    )
}

Alert.propTypes = {}

export default Alert
