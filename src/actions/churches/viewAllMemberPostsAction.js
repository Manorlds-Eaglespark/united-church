import axios from 'axios';
import { toast } from 'react-toastify';
import { ChurchConstants } from '../actionTypes';
import { toastFailure } from '../../utils/toast';

const viewAllMemberPostsAction = () => dispatch => axios.get('https://send-it-united-church.herokuapp.com/v1/posts', {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: ChurchConstants.VIEW_POSTS_SUCCESS,
      payload: response.data,
    });
  })
  .catch((error) => {
    const errorMessage = "Could not fetch Church data";
    toast.dismiss();
    toastFailure(`${errorMessage}`, 'A');
    dispatch({
      type: ChurchConstants.VIEW_POSTS_FAIL,
      payload: errorMessage,
    });
  });

export default viewAllMemberPostsAction;
