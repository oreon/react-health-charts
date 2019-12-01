export default (state = {}, action) => {
    switch (action.type) {
      case 'GET_MSMTS':
        let data = JSON.parse(localStorage.getItem('msts'));
        return {
          ...state,
          msmts: data
        };
     
      case 'ADD_MSMT':
     // case EDIT_PATIENT:
        let data = JSON.parse(localStorage.getItem('msts'));
        if (data == null ) data = []
        data.push(action.entity)
        localStorage.setItem('msts', data);
        // return {
        //   ...state,
        //   [action.payload.id]: action.payload
        // };
    //   case DELETE_PATIENT:
    //     return _.omit(state, action.payload);
      default:
        return state;
    }
  };