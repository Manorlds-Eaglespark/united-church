
import { ChurchConstants } from '../../actions/actionTypes';


const viewAllChurchesReducer = (state = {
  churches: [],
}, { type, payload }) => {
  switch (type) {
    case ChurchConstants.VIEW_CHURCHES_SUCCESS:
      return {
        ...state,
        churches: payload,
      };
    case ChurchConstants.VIEW_CHURCHES_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default viewAllChurchesReducer;
