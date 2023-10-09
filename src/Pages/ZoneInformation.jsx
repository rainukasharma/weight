import React from "react";
import ReusableForm from "../Components/ReusableForm";
import informationTruck from "../assets/zone_information_truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import NavigationDrawer from "../Components/NavigationDrawer";

const ZoneInformation = () => {
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
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "City",
      label: "City",
      type: "text",
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    {
      name: "State",
      label: "State",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "ManagedBy",
      label: "Managed By",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Status",
      label: "Status",
      type: "select",
      required: true,
      options: ["Select Status", "Active", "Inactive", "Pending"],
    },
  ];


  return (
    <div className="flex flex-row">
      <NavigationDrawer />
    <div className="bg-[#F0F0F0] w-full h-full flex flex-col">
      <div className="flex flex-row">
        <button>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className=" text-4xl p-5 font-medium"
          />
        </button>
        <h1 className="text-4xl p-5 font-medium"> Zone Information</h1>
      </div>

      <main className="flex flex-row justify-between">
        <img src={informationTruck} alt={"truck"} />
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

export default ZoneInformation;
