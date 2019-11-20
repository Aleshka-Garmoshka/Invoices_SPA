import React from 'react';
import './Form.css';
import {withRouter} from "react-router";
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: "",
            date_created: "",
            date_supplied: "",
            comment: ""
        }
    }

    handleChange(name, value) {
        this.setState({[name]: value});
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {

            const {number, date_created, date_supplied, comment} = this.props.data;
            this.setState({number, date_created, date_supplied, comment});

        }
    }

    saveForm(e) {
        e.preventDefault();
        const {id} = this.props.match.params;
        if (this.props.data) {
            fetch(`http://localhost:3001/invoices/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({data: {...this.state}})
            })
                .then((res) => {
                    this.props.history.push("/");
                });

        } else {
            fetch(`http://localhost:3001/invoices/`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({data: {...this.state}})
            })
                .then((res) => {
                    this.props.history.push("/");
                });

        }
    }

    render() {
        const {date_supplied, date_created} = this.state;
        const formated_date_created = date_created ? new Date(moment(this.state.date_created, 'DD-MM-YYYY').format('L')) : "";
        const formated_date_supplied = date_supplied ? new Date(moment(this.state.date_supplied, 'DD-MM-YYYY').format('L')) : "";
        return (
            <div className="form">
                <h2 className="title-of-block">Create Invoice</h2>
                <form className="flex">
                    <label>
                        <p>Number:</p><input type="text" name="number" value={this.state.number}
                                             placeholder="Input your Number" onChange={(e) => {
                        this.handleChange("number", e.target.value)
                    }}/></label>
                    <label><p>Invoice Date:</p><DatePicker type="date" dateFormat="dd-MM-yyyy" name="date_created"
                                                           selected={formated_date_created}
                                                           placeholder="Select Date" onChange={(date) => {
                        this.handleChange("date_created", moment(date).format("DD-MM-YYYY"))
                    }}/></label>
                    <label><p>Supply Date:</p><DatePicker type="date" dateFormat="dd-MM-yyyy" name="date_supplied"
                                                          selected={formated_date_supplied}
                                                          placeholder="Select Date" onChange={(date) => {
                        this.handleChange("date_supplied", moment(date).format("DD-MM-YYYY"))
                    }}/></label>
                    <label className="label-for-textarea"><p>Number:</p>
                        <textarea type="text" name="comment" value={this.state.comment} onChange={(e) => {
                            this.handleChange("comment", e.target.value)
                        }}
                                  placeholder="Input your Number"/>
                    </label>
                    <button type="submit" className="btn-blue" onClick={(e) => {
                        this.saveForm(e)
                    }}>Save
                    </button>

                </form>
            </div>
        )
    }
}

export default withRouter(Form);