import * as types from '../constants/actionNames';

const initialState = {
  name: 'a',
  phone: 'b',
  password: 'c',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      if (action.tochange === 'phone') {
        return {
          ...state,
          phone: action.payload
        }
      } else if (action.tochange === 'name') {
        return {
          ...state,
          name: action.payload
        }
      }
      return {
        ...state,
        password: action.payload,
      }
    }

    case types.HANDLE_SIGNUP_SUBMIT: {
      // console.log(state);
      fetch('http://localhost:3000/newUser', { // TODO: update to correct route
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          name: state.name,
          phone: state.phone,
          password: state.password,
        })
      })
        .then((data) => {
          return data.json();
        })
        .then(response => response)
        .catch(err => console.log(err))
      // return state;
    }
    default:
      return state;
  }
};

export default signupReducer;
