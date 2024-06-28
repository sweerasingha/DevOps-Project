import { useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import ContainerCard from "../components/ContainerCard";
import ContainerCardForm from "../components/ContainerCardForm";
import PrescriptionForm from "../components/PrescriptionForm";
import Property1DayIndonesian from "../components/Property1DayIndonesian";
import VariantOn from "../components/VariantOn";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    navigate("/doctor-edit-basic");
  }, [navigate]);

  return (
    <div className="dashboard-content">
      <div className="content">
        <div className="frame14">
          <div className="frame15">
            <div className="patients">
              <div className="patient-list1">
                <div className="patient-list-parent">
                  <div className="patient-list2">Patient List</div>
                  <div className="today-parent">
                    <div className="today">Today</div>
                    <img className="frame-inner" alt="" src="/vector-3.svg" />
                  </div>
                </div>
                <div className="frame-container">
                  <div className="frame-div">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="frame-child1" />
                      <div className="ad">AD</div>
                    </div>
                    <div className="hi-hi">Hi Hi</div>
                    <div className="routine-checkup">Routine Checkup</div>
                    <div className="am-wrapper">
                      <div className="am">9 : 30 AM</div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="frame-child1" />
                      <div className="ad">AD</div>
                    </div>
                    <div className="hi-hi">Hi Hi</div>
                    <div className="routine-checkup">Routine Checkup</div>
                    <div className="am-wrapper">
                      <div className="am">9 : 30 AM</div>
                    </div>
                  </div>
                  <div className="frame-parent2">
                    <div className="ellipse-group">
                      <div className="frame-child4" />
                      <div className="frame-child5" />
                      <div className="dj">DJ</div>
                    </div>
                    <div className="hi-hi2">HI Hi</div>
                    <div className="report">Report</div>
                    <div className="am-frame">
                      <div className="am">9 : 50 AM</div>
                    </div>
                  </div>
                  <div className="frame-parent3">
                    <div className="ellipse-parent2">
                      <div className="frame-child4" />
                      <div className="frame-child5" />
                      <div className="dj">DJ</div>
                    </div>
                    <div className="hi-hi3">HI Hi</div>
                    <div className="report1">Report</div>
                    <div className="am-wrapper1">
                      <div className="am">9 : 50 AM</div>
                    </div>
                    <div className="frame-parent4">
                      <div className="ellipse-group">
                        <div className="frame-child4" />
                        <div className="frame-child5" />
                        <div className="dj">DJ</div>
                      </div>
                      <div className="hi-hi2">HI Hi</div>
                      <div className="report">Report</div>
                      <div className="am-frame">
                        <div className="am">9 : 50 AM</div>
                      </div>
                    </div>
                  </div>
                  <ContainerCard
                    group48095504="/group-480955041.svg"
                    aM="10 : 15 AM"
                    propTop="15.43rem"
                    propLeft="0rem"
                    propWidth="8.02rem"
                    propWidth1="3.74rem"
                  />
                  <ContainerCard
                    group48095504="/group-480955042.svg"
                    aM="10 : 15 AM"
                    propTop="15.43rem"
                    propLeft="0rem"
                    propWidth="8.02rem"
                    propWidth1="3.74rem"
                  />
                </div>
              </div>
              <div className="consultation1">
                <div className="transactions">Consultation</div>
                <div className="consultation-child">
                  <div className="vector-parent">
                    <img className="vector-icon" alt="" src="/vector-41.svg" />

                    <ContainerCardForm dimensionText="/group-10000008931.svg" />
                    <div className="frame-parent5">
                      <div className="vector-group">
                        <img
                          className="vector-icon1"
                          alt=""
                          src="/vector125.svg"
                        />
                        <div className="fever">Fever</div>
                      </div>
                      <div className="group-parent">
                        <img className="group-icon" alt="" src="/group1.svg" />
                        <div className="cough">Cough</div>
                      </div>
                      <div className="group-group">
                        <img className="group-icon1" alt="" src="/group2.svg" />
                        <div className="heart-burn">Heart Burn</div>
                      </div>
                    </div>

                    <PrescriptionForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="hello-dr-kim">
              <div className="unsplash7bmdiiqz-j4-parent">
                <img
                  className="unsplash7bmdiiqz-j4-icon"
                  alt=""
                  src="/unsplash7bmdiiqz-j4@2x.png"
                />
                <div className="frame-parent6">
                  <div className="visits-for-today-parent">
                    <div className="visits-for-today">Visits for Today</div>
                    <div className="div1">104</div>
                  </div>
                  <div className="oldnew-patients">
                    <div className="rectangle-parent">
                      <div className="rectangle-div" />
                      <div className="new-patients">New Patients</div>
                      <div className="div2">40</div>
                      <div className="frame-wrapper">
                        <div className="parent">
                          <div className="div3">51%</div>
                          <img
                            className="frame-child10"
                            alt=""
                            src="/group-1000000904.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="old-patients-parent">
                      <div className="old-patients">Old Patients</div>
                      <div className="div4">64</div>
                      <div className="frame-wrapper1">
                        <div className="group">
                          <div className="div5">20%</div>
                          <img
                            className="frame-child11"
                            alt=""
                            src="/group-10000009041.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="good-morning-dr-container">
                <span className="good-morning-dr-container1">
                  <span>Good Morning</span>
                  <b className="dr-weerasingha">
                    <span className="span">{` `}</span>
                    <span>Dr. Boss!</span>
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="frame16">
          <div className="frame17">
            <div className="calendar">
              <div className="august-2023-parent">
                <div className="august-2023">August 2023</div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <img className="icons" alt="" src="/icons1.svg" />
                </div>
                <div className="line-div" />
                <Property1DayIndonesian
                  personName="Sun"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="0.41rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="Mon"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="4.13rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="Tue"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="7.86rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="Wed"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="11.58rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="Thu"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="15.31rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="FrI"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="19.03rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  personName="SAT"
                  property1DayIndonesianWidth="3.14rem"
                  property1DayIndonesianPadding="0.27rem"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="7.05rem"
                  property1DayIndonesianLeft="22.76rem"
                  property1DayIndonesianBorderRadius="39px"
                  property1DayIndonesianHeight="1.71rem"
                  senFontSize="0.68rem"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <VariantOn
                  carNumber="4"
                  variantOnWidth="2.35rem"
                  variantOnHeight="1.78rem"
                  variantOnPosition="absolute"
                  variantOnTop="9.72rem"
                  variantOnLeft="0.41rem"
                  variantOnBorderRadius="39px"
                  variantOnOpacity="0"
                  divHeight="99.8%"
                  divWidth="99.8%"
                  divFontSize="0.96rem"
                  divColor="#2b2b36"
                />
                <VariantOn
                  carNumber="5"
                  variantOnWidth="2.35rem"
                  variantOnHeight="1.78rem"
                  variantOnPosition="absolute"
                  variantOnTop="9.72rem"
                  variantOnLeft="4.26rem"
                  variantOnBorderRadius="39px"
                  variantOnOpacity="0"
                  divHeight="99.8%"
                  divWidth="99.8%"
                  divFontSize="0.96rem"
                  divColor="#2b2b36"
                />
                <VariantOn
                  carNumber="6"
                  variantOnWidth="2.35rem"
                  variantOnHeight="1.78rem"
                  variantOnPosition="absolute"
                  variantOnTop="9.72rem"
                  variantOnLeft="8.12rem"
                  variantOnBorderRadius="39px"
                  variantOnOpacity="0"
                  divHeight="99.8%"
                  divWidth="99.8%"
                  divFontSize="0.96rem"
                  divColor="#2b2b36"
                />
                <VariantOn
                  carNumber="7"
                  variantOnWidth="2.35rem"
                  variantOnHeight="1.78rem"
                  variantOnPosition="absolute"
                  variantOnTop="9.72rem"
                  variantOnLeft="11.98rem"
                  variantOnBorderRadius="39px"
                  variantOnOpacity="0"
                  divHeight="99.8%"
                  divWidth="99.8%"
                  divFontSize="0.96rem"
                  divColor="#2b2b36"
                />
                <div className="days">
                  <div className="div6">1</div>
                </div>
                <div className="days1">
                  <div className="div6">2</div>
                </div>
                <div className="days2">
                  <div className="div6">3</div>
                </div>
                <div className="days3">
                  <div className="div6">4</div>
                </div>
                <div className="days4">
                  <div className="div6">5</div>
                </div>
                <div className="days5">
                  <div className="div6">6</div>
                </div>
                <div className="days6">
                  <div className="div6">7</div>
                </div>
                <div className="days7">
                  <div className="div6">8</div>
                </div>
                <div className="days8">
                  <div className="div6">9</div>
                </div>
                <div className="days9">
                  <div className="div6">10</div>
                </div>
                <div className="days10">
                  <div className="div6">11</div>
                </div>
                <div className="days11">
                  <div className="div6">12</div>
                </div>
                <div className="days12">
                  <div className="div6">13</div>
                </div>
                <div className="days13">
                  <div className="div19">14</div>
                  <div className="days-child" />
                  <div className="days-item" />
                </div>
                <div className="days14">
                  <div className="div6">15</div>
                </div>
                <div className="days15">
                  <div className="div6">16</div>
                </div>
                <div className="days16">
                  <div className="div22">17</div>
                </div>
                <div className="days17">
                  <div className="div6">18</div>
                </div>
                <div className="days18">
                  <div className="div6">19</div>
                </div>
                <div className="days19">
                  <div className="div6">20</div>
                </div>
                <div className="days20">
                  <div className="div6">21</div>
                </div>
                <div className="days21">
                  <div className="div6">22</div>
                </div>
                <div className="days22">
                  <div className="div6">23</div>
                </div>
                <div className="days23">
                  <div className="div6">24</div>
                </div>
                <div className="days24">
                  <div className="div6">25</div>
                </div>
                <div className="days25">
                  <div className="div6">26</div>
                </div>
                <div className="days26">
                  <div className="div6">27</div>
                </div>
                <div className="days27">
                  <div className="div6">28</div>
                </div>
                <div className="days28">
                  <div className="div6">29</div>
                </div>
                <div className="days29">
                  <div className="div6">30</div>
                </div>
                <div className="calendar-parent">
                  <div className="calendar1">Calendar</div>
                  <img className="icons" alt="" src="/icons2.svg" />
                </div>
              </div>
              <div className="frame-parent7">
                <div className="upcoming-parent">
                  <b className="upcoming">Upcoming</b>
                  <div className="view-all">View All</div>
                </div>
                <div className="frame-child12" />
                <div className="frame-wrapper2">
                  <div className="frame-parent8">
                    <div className="heading-heading-left-parent">
                      <div className="heading-heading">
                        Montly doctor’s meet
                      </div>
                      <div className="heading-heading1">
                        8 April, 2021 | 04:00 PM
                      </div>
                    </div>
                    <div className="frame-child13" />
                    <b className="m">M</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="header1">
              <div className="logoutButton"></div>
              <img className="icons3" alt="" src="/icons3.svg" />
              <Link className="profile" to="/doctor-edit-basic">
                <div className="heading-heading-left-group">
                  <div className="heading-heading2">Dr. W</div>
                  <img
                    className="ellipse-icon"
                    alt=""
                    src="/ellipse-38@2x.png"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="logbutton">
            <Button
              className="log-in-button1"
              sx={{ width: 197 }}
              color="success"
              id="logout"
              variant="contained"
              href="/doctor-log-in"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
      <div className="frame18">
        <div className="frame-inner1">
          <div className="frame-parent9">
            <div className="ellipse-parent4">
              <div className="frame-child14" />
              <div className="frame-child15" />
              <div className="ss">SS</div>
            </div>
            <div className="sachitha-sankha">Hwllo World</div>
            <div className="report3">Report</div>
            <div className="am-wrapper3">
              <div className="am5">9 : 00 AM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu2">
        <div className="dashboard">Dashboard</div>
        <div className="appointment">Appointment</div>
        <div className="patient-list">Patient List</div>
        <div className="message">Message</div>
        <div className="transaction">Transaction</div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
