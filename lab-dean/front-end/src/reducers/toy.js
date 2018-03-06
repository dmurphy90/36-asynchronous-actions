let validateToy = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Toy must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Toy must have name');
};

export default (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'CUSTOMER_CREATE': return {...state, [payload._id]: []};
  case 'CUSTOMER_DELETE':
    delete state[payload._id];
    return {...state};
  case 'TOY_GET': return payload;
  case 'TOY_CREATE':
    validateToy(payload);
    state[payload._id] = state[payload._id].concat([payload]);
    return {...state};
  case 'TOY_UPDATE':
    validateToy(payload);
    state[payload._id] = state[payload._id].map(toy =>
      toy._id === payload._id ? payload : toy);
    return {...state};
  case 'TOY_DELETE':
    validateToy(payload);
    state[payload._id] = state[payload._id].filter(toy => toy._id !== payload._id);
    return {...state};
  default: return state;
  }
};