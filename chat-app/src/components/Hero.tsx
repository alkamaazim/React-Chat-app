import React from "react";
import Button from "./Button";
import WaveImg from "../assets/wave.png";
import { UserAuth } from "../context/AuthContext";

type Props = {};

const Hero = (props: Props) => {
  const {currentUser, signinWithGoogle}: any = UserAuth();

  const handleLogin = async () => {
    try{
      await signinWithGoogle(); 
    }catch(err){
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex justify-center px-5 py-24 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-customTextColor">
              Hello there <img src={WaveImg} alt="Wave Hand"width="40" className="inline" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Join the conversation, meet new people, and make connections in one shared room.
            </p>
            <div className="flex justify-center">
              <Button btnText="Login with google" onClick={handleLogin} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
