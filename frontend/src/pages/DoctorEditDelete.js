import React, { useState, useCallback } from "react";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./DoctorEditDelete.css";

const DoctorEditDelete = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonCancelContainerClick = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onDeleteAccountClick = useCallback(() => {
    navigate("/doctor-edit-delete");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onEditProfileClick = useCallback(() => {
    navigate("/doctor-edit-basic");
  }, [navigate]);
  
  return (
    <div className="main">
      <div className="doctor-edit-basic">
        <div className="editdeatilsdoctorbasic">
          <div className="side-bar2-group">
            <div className="side-bar21">
              <div className="button-cancel1" onClick={onButtonCancelContainerClick}>
                <img className="keyboard-arrow-left1" alt="" src="/keyboard-arrow-left.svg" />
                <b className="cancel1">Cancel</b>
              </div>
              <div className="frame5">
                <div className="edit-profile-group">
                <a className="edit-profile" onClick={onEditProfileClick}>
                  Edit profile
                </a>
                  <a className="basic-information1">Basic Information</a>
                  <a className="credentials-and-qualifications1">
                    Credentials and Qualifications
                  </a>
                  <a className="basic-information1">Work Experience</a>
                  <a className="basic-information1">Profile Information</a>
                  <a className="basic-information1">Availability</a>
                  <a className="basic-information1">Consultation Fees</a>
                  <a className="legal-and-regulatory1">Legal and Regulatory Compliance</a>
                  <a className="edit-profile1" onClick={onDeleteAccountClick}>
                    Delete Account
                  </a>
                </div>
              </div>
            </div>
            <div className="frame6">
              <img className="frame-icon1" alt="" src="/frame2.svg" />
              <div className="frame7">
                <div className="frame8">
                  <div className="frame9">
                    <div className="circle1" />
                    <div className="edit-basic-details">Delete Account</div>
                  </div>
                  <div className="frame10">
                    
                    <div className="details1">
                      <div className="username1">
                        <div className="new-password">Are you sure to delete account?</div>
                        <div className="buttons1">
                      <Button
                        className="buttons-inner"
                        sx={{ width: 182 }}
                        color="success"
                        variant="contained"
                        href="/doctor-dashboard"
                        onClick={onFrameButtonClick}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="buttons-inner"
                        sx={{ width: 180 }}
                        color="success"
                        id="savebutton"
                        variant="contained"
                        href="/"
                        onClick={onFrameButton1Click}
                      >
                        Yes
                      </Button>
                    </div>
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorEditDelete;
