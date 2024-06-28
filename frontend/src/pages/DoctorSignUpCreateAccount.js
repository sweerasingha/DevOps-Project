import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpCreateAccount.css";

const DoctorSignUpCreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/doctor-log-in");
  }, [navigate]);

  const onAlreadyHaveAnClickedBasicPage = useCallback(() => {
    navigate("/doctor-sign-up-basic-information");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-create-account">
      <SideContainer imageDimensions="/frame8.svg" />
      <div className="frame-parent11">
        <div className="frame26">
          <div className="frame27">
            <div className="create-account">Create Account</div>
            <div className="frame28">
              <div className="social-media-icons">
                <div className="google1">
                  <div className="frame-button-google" />
                  <img
                    className="logo-google-1"
                    alt=""
                    src="/logo-google-1@2x.png"
                  />
                </div>
                <div className="facebook">
                  <div className="frame-button-apple" />
                  <img className="vector-icon2" alt="" src="/vector126.svg" />
                </div>
                <div className="apple">
                  <div className="frame-button-fb" />
                  <img
                    className="apple-logo-icon"
                    alt=""
                    src="/apple-logo@2x.png"
                  />
                </div>
              </div>
              <div className="or-create-account">
                -Or create account via email-
              </div>
              <TextField
                className="full-name"
                color="success"
                name="username"
                id="username"
                label="Username"
                placeholder="Username"
                required={true}
                fullWidth={true}
                variant="filled"
              />
              <TextField
                className="full-name"
                color="success"
                name="email"
                id="email"
                label="Email"
                placeholder="Email"
                required={true}
                fullWidth={true}
                variant="filled"
                type="email"
              />
              <TextField
                className="full-name"
                color="success"
                name="password"
                id="password"
                label="Password"
                placeholder="Password"
                helperText="Enter Your Password Here"
                required={true}
                fullWidth={true}
                variant="filled"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="frame29">
            <Button
              sx={{ width: 406 }}
              color="success"
              id="creatreaccountbutton"
              variant="contained"
              onClick={onAlreadyHaveAnClickedBasicPage}
            >
              Create Account
            </Button>
            <Link className="frame30" to="/doctor-log-in">
              <div
                className="already-have-an-container"
                onClick={onAlreadyHaveAnClick}
              >
                <span>{`Already have an account? `}</span>
                <span className="log-in">Log in</span>
              </div>
            </Link>
          </div>
        </div>
        <img className="frame-icon4" alt="" src="/frame9.svg" />
      </div>
    </div>
  );
};

export default DoctorSignUpCreateAccount;
