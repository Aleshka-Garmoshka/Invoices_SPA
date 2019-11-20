import React from 'react';
import {Link} from "react-router-dom";

const AddNew = () => {
    return (
        <div className="invoices-cont">
            <h4 className="subtitle">Actions</h4>
            <div className="flex-start">
                <Link className="btn-blue" to="/create/">Add new</Link>
            </div>
        </div>

    )
}
export default AddNew;