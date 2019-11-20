import React from "react";
import InvoiceRow from "../InvoiceRow";
import './Invoices.css';

class Invoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    fetchInvoices() {
        let url = "http://localhost:3001/invoices/";
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({data: data});
            })
    }
    componentDidMount() {
        this.fetchInvoices();
    }
    render() {
        const {data} = this.state;
        return (<div className="invoices-cont">
                <h4 className="subtitle">Invoices</h4>
                <div className="invoiceRow flex first-line">
                    <div className="invoiceRow-item"><p className="date-created">Create</p></div>
                    <div className="invoiceRow-item"><p className="Number">No</p></div>
                    <div className="invoiceRow-item"><p className="date-supply">Supply</p></div>
                    <div className="invoiceRow-item"><p className="comment">Comment</p></div>
                </div>
                {
                    Object.values(data).map((data, index) => {
                        return (
                            <InvoiceRow data={data}
                                        updateList={this.fetchInvoices.bind(this)}
                                        key={data.id}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Invoices;