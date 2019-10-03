/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import viewAllChurchesAction from '../actions/churches/viewAllChurchesAction';
import history from '../utils/history';
import theBannerImage from '../assets/images/take_action1.png';
import churchIcon from '../assets/images/church.png';
import Header from './common/Header';

export class churchProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchAllChurches } = this.props;
    fetchAllChurches();
  }

    render() {
      const { churches } = this.props;
      const churchesList = churches.map(church => (
        <div className="card" key={church.id}>
          <div className="row article">
            <div className="col-md-12 col-lg-5">
              <Link to={`/${church.id}`}>
                <img className="img-article" alt="article_image" src={churchIcon} />
              </Link>
            </div>
            <div className="col">
                <h5 className="name">{church.name}</h5>
              <p className="description">
                            Pastor:
                {' '}
                {church.pastor}
              </p>
              <div className="article-details">

                <span>
                                Service times:
                  {' '}
                  {church.service_time}
                </span>
              </div>
              <div className="article-details">

                <span>
                                Location:
                  {' '}
                  {church.location}
                </span>
              </div><div className="article-details">

<span>
                Contact:
  {' '}
  {church.contact}
</span>
</div>
            </div>
          </div>
        </div>
      ));


      return (
        <div>
            <Header/>
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
                <h2>Church List</h2>
                <div className="row projects">{churchesList}</div>
              </div>


              <div className="head-liner">
                            &nbsp;
              </div>

            </div>

          </div>
          <footer/>

        </div>
      );
    }
}


churchProfileComponent.propTypes = {
  churches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      pastor: PropTypes.string,
      service_time: PropTypes.string,
      contact: PropTypes.string
    }),
  ).isRequired,
};

churchProfileComponent.propTypes = {
    fetchAllChurches: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const { churches } = state.viewAllChurchesReducer;
  return { churches };
};

export default connect(mapStateToProps,
  { fetchAllChurches: viewAllChurchesAction })(churchProfileComponent);
