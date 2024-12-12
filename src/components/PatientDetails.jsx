import React from "react";

const PatientDetails = ({
  name,
  age,
  gender,
  address,
  phone,
  patientId,
  doctor,
  doctorId,
}) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Saurab Prasai</h1>
      <div className="px-8 py-4  text-2xl flex flex-col gap-4 border-2 justify-center tracking-wide rounded-lg mb-8">
        <div className="flex gap-4">
          <p>Age:22</p>
          <p>Gender:Male</p>
        </div>
        <p>Address: Birtamode Jhapa</p>
        <p>Phone: 9845267890</p>
        <div className="flex gap-4">
          <p>Patient Id: 49358</p>
          <p>Checked By: Sudip Niraula</p>
        </div>
        <p>Doctor Id: 47886</p>
      </div>
      <h1 className="font-semibold text-4xl text-center">Patient Reports</h1>
      <div className="flex justify-around mt-8 flex-wrap">
        <div className="max-w-sm flex flex-col gap-2   overflow-hidden pb-2 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1661677814139-14f0f1949dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-72 rounded-lg"
          />
          <p className="text-center text-2xl font-semibold">Scans</p>
        </div>
        <div className="max-w-sm flex flex-col gap-2  overflow-hidden pb-2 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1661440316279-8a3c84015bb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymxvb2QlMjB0ZXN0fGVufDB8fDB8fHww"
            alt=""
            className="w-72 rounded-lg"
          />
          <p className="text-center text-2xl font-semibold">Blood report</p>
        </div>
        <div className="max-w-sm flex flex-col gap-2  overflow-hidden pb-2 ">
          <img
            src="https://kevinmd.com/wp-content/uploads/shutterstock_111524120.jpg"
            alt=""
            className="w-72 rounded-lg"
          />
          <p className="text-center text-2xl font-semibold">Other</p>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
