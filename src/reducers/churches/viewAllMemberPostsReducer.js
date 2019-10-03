
import { ChurchConstants } from '../../actions/actionTypes';


const viewAllMemberPostsReducer = (state = {
  memberPosts: [],
}, { type, payload }) => {
  switch (type) {
    case ChurchConstants.VIEW_POSTS_SUCCESS:
      return {
        ...state,
        memberPosts: payload,
      };
    case ChurchConstants.VIEW_POSTS_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default viewAllMemberPostsReducer;
