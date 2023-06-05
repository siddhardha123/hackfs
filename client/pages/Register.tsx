import React, { useState } from "react";

type FormData = {
  name: string;
  description: string;
  profileImage: string;
  link: string;
  twitter: string;
};

const initialFormData: FormData = {
  name: "",
  description: "",
  profileImage: "",
  link: "",
  twitter: "",
};

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
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform additional logic here, such as saving the form data
    console.log(formData);
    // Reset the form
    setFormData(initialFormData);
  };

  return (
    <div className="min-h-screen     flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-blue-900">Project Information</h2>
        <InputField
          label="Name"
          id="name"
          value={formData.name}
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
          label="Profile Image"
          id="profileImage"
          value={formData.profileImage}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
