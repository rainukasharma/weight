import React from "react";
import ReusableForm from "../Components/ReusableForm";
import NavigationDawer from "../Components/NavigationDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import glass from "../assets/vehicleinformationglass.svg";
import { useForm } from "react-hook-form";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);
    const form = event.target;
    form.reset();
  };

  const fields = [
    {
      name: "usernam",
      label: "Username",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      maxLength: 50,
    },
  ];

  return (
    <div className="flex flex-row w-full h-full min-h-full">
      <NavigationDawer />
      <div className=" bg-[#F0F0F0] w-full style={{ minHeight: '100vh' }} flex flex-col">
        <div className="flex flex-row">
          <button>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className=" text-4xl p-5 font-medium"
            />
          </button>
          <h1 className="text-4xl p-5 font-medium"> User Information</h1>
        </div>
        <main className="flex flex-row justify-around">
          <img src={glass} alt={"magnifying glass"} />
          <ReusableForm
            onSubmit={onSubmit}
            fields={fields}
            errors={errors}
            showCancel={true}
            submitButtonLabel={"Submit"}
          />
        </main>
      </div>
    </div>
  );
};

export default UserInformation;
