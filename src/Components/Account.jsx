import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { FaCamera } from "react-icons/fa";
import "./Account.css";

function Account() {
  const { user } = useContext(UserContext);

  return (
    <div className="center-form">
      <div className="account-container">
      <div className="account-box">
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        <div className="account-body">
          <div className="account-profile">
            <div className="profile-pic-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="profile"
                className="profile-pic"
              />
              <span className="camera-icon">
                <FaCamera />
              </span>
            </div>
            <div>
              <p className="profile-name">{user?.name || "Marry Doe"}</p>
              <p className="profile-email">{user?.email || "Marry@Gmail.Com"}</p>
            </div>
          </div>

          <div className="account-description">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          <div className="account-footer"></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Account;
