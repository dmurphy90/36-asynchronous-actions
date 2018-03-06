import React from 'react';
import {connect} from 'react-redux';
import {
  customerFetchRequest,
  customerCreateRequest} from '../../actions/customer-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Buy Our Things! Look At These Satisfied Customers!</h1>

        {this.props.customers ?
          this.props.customers.map(album =>
            <div key={customer._id}>
              {/* <span onClick={() => this.props.deleteCustomer(customer)}>x</span> */}
              <p>{customer.name}</p>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  customers: state.customers,
});

let mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(customerFetchRequest()),
  createCustomer: customer => dispatch(customerCreateRequest(customer)),
  // deleteCustomer: customer => dispatch(customerDeleteRequest(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);