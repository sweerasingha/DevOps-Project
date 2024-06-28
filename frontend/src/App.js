import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import EditDeatilsDOctorDelete from "./components/EditDeatilsDOctorDelete";
import DoctorEditBasic from "./pages/DoctorEditBasic";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorLogIn from "./pages/DoctorLogIn";
import ContactUs from "./pages/ContactUs";
import DoctorSignUpCreateAccount from "./pages/DoctorSignUpCreateAccount";
import PatientLogIn from "./pages/PatientLogIn";
import About from "./pages/About";
import DoctorSignUpBasicInformati from "./pages/DoctorSignUpBasicInformati";
import DoctorSignUpCredentialsAnd from "./pages/DoctorSignUpCredentialsAnd";
import DoctorSignUpWorkExperience from "./pages/DoctorSignUpWorkExperience";
import DoctorSignUpProfileInforma from "./pages/DoctorSignUpProfileInforma";
import DoctorSignUpAvailability from "./pages/DoctorSignUpAvailability";
import DoctorSignUpConsultationFe from "./pages/DoctorSignUpConsultationFe";
import DoctorSignUpLegalAndRegul from "./pages/DoctorSignUpLegalAndRegul";
import DoctorSignUpTermsAndCondi from "./pages/DoctorSignUpTermsAndCondi";
import CreateAcc1 from "./pages/CreateAcc1";
import BasicInformation from './pages/BasicInformation'
import Qualifications from './pages/Qualifications'
import EditDetailsDoctorNormal from "./components/EditDetailsDoctorNormal";
import DoctorDB from "./pages/DoctorDB";
import { selectUser } from "./components/UserSlice";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(selectUser);
  console.log(user);

  const userType = user?.userType;
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-edit-delete":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-edit-basic":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-log-in":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-create-account":
        title = "";
        metaDescription = "";
        break;
      case "/patient-log-in":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-basic-information":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-credentials-and-qualifications":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-work-experience":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-profile-information":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-availability":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-consultation-fees":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-legal-and-regulatory-compliance":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-sign-up-terms-and-conditions":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-edit-delete" element={<EditDeatilsDOctorDelete />} />
      <Route path="/doctor-edit-basic" element={<DoctorEditBasic />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor-log-in" element={<DoctorLogIn />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route
        path="/doctor-sign-up-create-account"
        element={<CreateAcc1 />}
      />
      <Route path="/patient-log-in" element={<PatientLogIn />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/doctor-sign-up-basic-information"
        element={<DoctorSignUpBasicInformati />}
      />
      <Route
        path="/doctor-sign-up-credentials-and-qualifications"
        element={<DoctorSignUpCredentialsAnd />}
      />
      <Route
        path="/doctor-sign-up-work-experience"
        element={<DoctorSignUpWorkExperience />}
      />
      <Route
        path="/doctor-sign-up-profile-information"
        element={<DoctorSignUpProfileInforma />}
      />
      <Route
        path="/doctor-sign-up-availability"
        element={<DoctorSignUpAvailability />}
      />
      <Route
        path="/doctor-sign-up-consultation-fees"
        element={<DoctorSignUpConsultationFe />}
      />
      <Route
        path="/doctor-sign-up-legal-and-regulatory-compliance"
        element={<DoctorSignUpLegalAndRegul />}
      />
      <Route
        path="/doctor-sign-up-terms-and-conditions"
        element={<DoctorSignUpTermsAndCondi />}
      />
      <Route path="/create-account"
              element={<CreateAcc1/>}/> 
      <Route path="/basic-information"
              element={<BasicInformation/>}/> 
      <Route path="/qualifications"
              element={<Qualifications/>}/> 
      <Route path="/doctor-edit-details" element={<EditDetailsDoctorNormal/>}/>
      <Route path='doctor-db' element={<DoctorDB/>}/>
    </Routes>
  );
}
export default App;
