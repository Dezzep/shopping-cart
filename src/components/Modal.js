import React from 'react';
import { useState } from 'react';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPasswordVerify, setSignUpPasswordVerify] = useState('');
  const [signUpCredit, setSignUpCredit] = useState('');
  const [signUpCvv, setSignUpCvv] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    console.log(
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpPasswordVerify,
      signUpCredit,
      signUpCvv
    );
    const data = {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpCredit,
      signUpCvv,
    };

    const params = new URLSearchParams();
    for (const key in data) {
      params.append(key, data[key]);
    }
    const response = await fetch('http://localhost:3000/api/user_accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

      body: params,
    });

    setResponse(response);
    console.log(response);
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
            <div className="fixed w-auto my-6 mx-auto max-w-3xl h-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div>
                    <h3 className="text-3xl font-semibold">One last step</h3>
                    <button
                      className="btn text-white hover:bg-emerald-600 mt-6 bg-emerald-500 active:bg-emerald-600 font-bold"
                      type="button"
                      onClick={() => setSignIn(!signIn)}
                    >
                      {signIn ? (
                        <p>Already have an account?</p>
                      ) : (
                        <p>Create an account</p>
                      )}
                    </button>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <h1 className="text-xl">
                      {' '}
                      This form is fake, please do not put any real credit card
                      information
                    </h1>
                    <p className="label">First Name</p>
                    <input
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpFirstName(e.target.value)}
                    ></input>
                    <p className="label">Last Name</p>
                    <input
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpLastName(e.target.value)}
                    ></input>
                    <p className="label">Email Address</p>
                    <input
                      type="email"
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpEmail(e.target.value)}
                    ></input>
                    <p className="label">Password</p>
                    <input
                      type="password"
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpPassword(e.target.value)}
                    ></input>
                    <p className="label">Confrim your password</p>
                    <input
                      type="password"
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpPasswordVerify(e.target.value)}
                    ></input>
                    <p className="label">Credit Card</p>
                    <input
                      type="number"
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpCredit(e.target.value)}
                    ></input>
                    <p className="label">CVV Code</p>
                    <input
                      type="number"
                      className="input input-bordered input-sm"
                      onChange={(e) => setSignUpCvv(e.target.value)}
                    ></input>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white hover:bg-emerald-700 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => handleSubmit()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
