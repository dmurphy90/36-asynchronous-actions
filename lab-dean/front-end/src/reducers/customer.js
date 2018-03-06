let validateCustomer = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Customer must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Customer must have name');
};

export default (state=[], action) => {
  let {type, payload} = action;
  // validateCustomer(payload) // Reminder that we can't do this in every case, so it's situational.

  switch(type) {
  case 'CUSTOMER_SET': return payload;
  case 'CUSTOMER_CREATE':
    validateCustomer(payload);
    return [...state, payload];
  case 'CUSTOMER_UPDATE':
    validateCustomer(payload);
    return state.map(customer => customer._id === payload._id ? payload : customer);
  case 'CUSTOMER_DELETE':
    validateCustomer(payload);
    return state.filter(customer => customer._id !== payload._id);
  default: return state;
  }
};