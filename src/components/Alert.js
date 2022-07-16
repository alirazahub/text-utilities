import React from 'react'

export default function Alert(props) {
    const capt = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (

        props.alert && <div className={`alert container alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capt(props.alert.type)}</strong>: {props.alert.message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
