import Nav from './Nav';
import React from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

class Income extends React.Component {

    constructor(props) {
        super(props);
        this.state = {years: [], months: [], month: 0, year: 0, payments: []};
        this.onYearChange = this.onYearChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.submit = this.submit.bind(this);

    }
    async onYearChange(event) {
        await  this.setState({year: event.target.value});
        console.log(event.target.value);
        await this.submit();
    }
    async  onMonthChange(event) {
        await this.setState({month: event.target.value});
        await this.submit();
    }
    async componentDidMount() {

        await axios.get("income/years")
                .then((response) => {

                    this.setState({years: response.data});
                }).catch((err) => {

        });
        await axios.get( "income/months")
                .then((response) => {

                    this.setState({months: response.data});
                }).catch((err) => {

        });
        await this.submit();
    }
    async  submit() {


        await axios.get("income/" + this.state.year + "/" + this.state.month)
                .then((response) => {
                    this.setState({payments: response.data});
                }).catch((err) => {
        });
    }
    render() {
        return(
                <div class="">
                    <Nav/>
                    <div class="session">
                        <div class="margin-top-md">
                            <div class="p-head  play text-bold">INCOME</div>
                
                            <div class="input-variant-x margin-top-xsm bg-variant-2 text-white Mulish">
                                Income
                                <div class="float-right"><select class="play input-variant-b" onChange={this.onYearChange} value={this.state.year}>
                                        <option value="">Select Year</option>                    
                                        {this.state.years.map(year => <option class="play" value={year}>{year}</option>)}
                
                
                                    </select>
                
                                    <select class="play input-variant-b margin-sms" onChange={this.onMonthChange} value={this.state.month}>
                                        <option value="">All Select Month</option>                  
                                        {this.state.months.map(month => <option class="play" value={month}>{month}</option>)}
                                    </select>
                                </div>         
                            </div>
                            <div class="w-100 margin-md"><div class="floast-right font-sm text-gray pointer padding-xsm center">Filter <span class="material-symbols-outlined">
                                        arrow_drop_down
                                    </span></div></div>
                            <div class="w-100 margin-top-xsm ">{this.state.payments.map((payment, k) => <div class="content-body-sm margin-sm border-bottom-gray  font-xsm padding-md"><div> {k + 1}</div><div class="bg-green">{payment.amount} </div>  <div> {payment.receiptedProgram}</div> <div> {payment.paymentDate}</div> <div><Link to={'/payments/' + payment.id}> {payment.id}</Link></div></div>)}</div>
                
                        </div> 
                    </div>
                </div>);
    }
}
;
export default Income;

