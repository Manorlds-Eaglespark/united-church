import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header'
import continueButton from '../assets/images/continue_button_gray.jpg';
const selectChurchComponent = () => (
    <div>
        <Header />
        <div>

            <div className="father">
                <div className="brother">
                    <p className="logo-text">Sharing across a united CHURCH</p>
                </div>
                <div className="sister">
                    <div className="box">

                        <p className="color-blue">Select a Church you attend</p>

                        <select>
                            <option>Watoto</option>
                            <option>Life Church</option>
                            <option>Bukoto C/U</option>
                            <option>St. Mathias Down town</option>
                            <option>Reedemed Church</option>
                        </select>

                        <Link to="/home"><img className="center continue-button" src={continueButton} alt="Continue" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default selectChurchComponent;
