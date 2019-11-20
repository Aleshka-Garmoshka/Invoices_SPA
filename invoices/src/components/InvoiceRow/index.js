import React from 'react';
import "./InvoiceRow.css";
import {Link} from "react-router-dom";

const InvoiceRow = ({data, updateList}) => {
    const deleteInvoice = (id) => {

        fetch(`http://localhost:3001/invoices/${id}`, {method: "DELETE"})
            .then((res) => {
                updateList()
            });
    }
    const {data: {_id, number, date_created, date_supplied, comment}, id} = data;
    return (
        <div className="invoiceRow flex">
            <div className="invoiceRow-item"><p className="date-created">{date_created}</p></div>
            <div className="invoiceRow-item"><p className="Number">{number}</p></div>
            <div className="invoiceRow-item"><p className="date-supply">{date_supplied}</p></div>
            <div className="invoiceRow-item"><p className="comment">{comment}</p></div>
            <div className="edit-invoice"><Link to={`/${id}`}><i className="fas fa-pencil-alt"></i></Link></div>
            <div className="delete-invoice" onClick={() => deleteInvoice(id)}><i className="fas fa-trash-alt"></i></div>
        </div>
    )
}
export default InvoiceRow;