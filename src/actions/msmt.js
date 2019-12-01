import {reset} from 'redux-form';

export const addMsmt = formValues => async (dispatch, getState) => {
    // const res = await axios.post(
    //   '/api/patients/',
    //   { ...formValues },
    //   tokenConfig(getState)
    // );
    dispatch({
      type: 'ADD_MSMT',
      payload: formValues
    });
    dispatch(reset('msmt')); 
  };