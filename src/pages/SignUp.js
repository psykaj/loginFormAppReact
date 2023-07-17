import React from 'react';
import signUpImage from '../assets/signup.png';
import Template from '../components/Template';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build Skills for Today , Tomorrow and Beyond."
      desc2="Education to future-proof your career."
      image={signUpImage}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup;
