import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
         
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Ghad Shalaby : 
          </p>
          <p className="mt-3">
            <BiMailSend /> : gehadshalaby66@gmail.com
          </p>
          <p className="text-justify mt-2">
           Yasmeen Fakhri :
          </p>
        
          <p className="mt-3">
            <BiMailSend /> : Yasmeenayr@gmail.com
          </p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
