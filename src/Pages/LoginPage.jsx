import React from "react";
import truck from "../assets/loginpagetruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";

const LoginPage = ({onLogin}) => {
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
    onLogin();
  };
  const fields = [
    {
      name: "UserName",
      label: "User Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Password",
      label: "Password",
      type: "text",
      required: true,
      maxLength: 20,
    },
  ];

  const mycustomClass = "mx-4 my-12 w-full";
  const custombuttonclass = "px-36 m-6"
  return (
    <div className="flex flex-row justify-between">
      <img src={truck} alt="truck" />
      <div className="flex flex-col ml-52 justify-center items-start">
        <h1 className="text-4xl">Login</h1>
        <ReusableForm
          fields={fields}
          onSubmit={onSubmit}
          errors={errors}
          submitButtonLabel={"Login"}
          customClass={mycustomClass}
          customButtonClass = {custombuttonclass}
        />
      </div>
    </div>
  );
};

export default LoginPage;
