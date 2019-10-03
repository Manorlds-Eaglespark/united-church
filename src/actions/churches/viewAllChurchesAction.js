import axios from 'axios';
import { toast } from 'react-toastify';
import { ChurchConstants } from '../actionTypes';
import { toastFailure } from '../../utils/toast';

const viewAllChurchesAction = () => dispatch => axios.get('https://send-it-united-church.herokuapp.com/v1/profiles', {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: ChurchConstants.VIEW_CHURCHES_SUCCESS,
      payload: response.data,
    });
  })
  .catch((error) => {
    console.log(error);
    const errorMessage = "Could not fetch Church data";
    toast.dismiss();
    toastFailure(`${errorMessage}`, 'A');
    dispatch({
      type: ChurchConstants.VIEW_CHURCHES_FAIL,
      payload: errorMessage,
    });
  });

export default viewAllChurchesAction;
