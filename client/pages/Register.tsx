import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/shared/Navbar";
import { useAccount } from 'wagmi'
import supabase from "@/utils/supabase";
type FormData = {
  name: string;
  profile: string;
  tagline : string;
  description: string;
  link: string;
  twitter: string;
};

const initialFormData: FormData = {
  name: "",
  profile: "",
  tagline:"",
  description: "",
  link: "",
  twitter: "",
};
// id,name,profile,tagline,description,link,twitter,likes
type InputFieldProps = {
  label: string;
  id: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  required = false,
  type = "text",
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { address } = useAccount()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform additional logic here, such as saving the form data
     console.log(formData)
     const { data, error } = await supabase
    .from('Projects')
    .insert([
    { name: formData.name, 
    profile: formData.profile,
    tagline: formData.tagline,
    description: formData.description,
    link: formData.link,
    twitter: formData.twitter },
    ])
    console.log(data)
    // Reset the form
    setFormData(initialFormData);
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 flex items-center justify-center h-screen ">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl text-center font-bold mb-8 text-blue-900">
            Register your project
          </h2>
          <InputField
            label="Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Profile"
            id="profile"
            value={formData.profile}
            onChange={handleChange}
            required
          />
          <InputField
            label="Tag Line"
            id="tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
          <InputField
            label="Description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
         
          <InputField
            label="Link"
            id="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
          <InputField
            label="Twitter"
            id="twitter"
            value={formData.twitter}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             {address ? "Submit" : "connect wallet"} 
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProjectForm), { ssr: false });