import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import viewAllMemberPostsAction from '../actions/churches/viewAllMemberPostsAction';
import theBannerImage from '../assets/images/take_action1.png';
import Header from '../components/common/Header'
import churchIcon from '../assets/images/church.png';

export class homePageComponent extends Component {

  componentDidMount() {
    const { fetchMemberPosts } = this.props;
    fetchMemberPosts();
  }

  render() {
    const { memberPosts } = this.props;
    const allMemberPosts = memberPosts.map(memberPost => (
      <div className="post-body" key={memberPost.id}>
        <div className="row article">
          <div className="post-title-section">
            <p className="time-ago">10 minutes ago</p>
              <img className="profile-image" alt="article_image" src="http://www.newdesignfile.com/postpic/2014/07/generic-user-icon-windows_352871.png" />
              <p className="profile-text">{memberPost.name}</p>
          </div>
          <div className="post-body-section">
            <img src={memberPost.image_url} alt="" />
            <p className="post-message-text">{memberPost.message}</p>
            </div>
          </div>
        </div>
    ));


    return (
      <div>
        <Header />
        <div>
          <div className="main">
            <div className="head-liner">
              &nbsp;
              </div>

            <div className="father">
              <img className="bannerImage" src={theBannerImage} alt="" />
            </div>

            <div className="head-liner">
              &nbsp;
              </div>


            <div className="father">
              <h2 className="color-green">Testimonies, praise, worship, encouragement and prayer requests</h2>
              <div className="post-container">
              <div className="row projects">{allMemberPosts}</div>
              </div>
            </div>


            <div className="head-liner">
              &nbsp;
              </div>
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

homePageComponent.propTypes = {
  memberPosts: PropTypes.arrayOf(
    PropTypes.shape({
      created_on: PropTypes.string,
      image_url: PropTypes.string,
      message: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

homePageComponent.propTypes = {
  fetchMemberPosts: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const { memberPosts } = state.viewAllMemberPostsReducer;
  return { memberPosts };
};

export default connect(mapStateToProps,
  { fetchMemberPosts: viewAllMemberPostsAction })(homePageComponent);
