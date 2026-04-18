import { FieldError, UseFormRegister } from "react-hook-form";
import { contactForm } from "./Contact";

type formInputProps = {
  type: "input" | "textarea";
  name: "name" | "email" | "message";
  label: string;
  placeholder: string;
  register: UseFormRegister<contactForm>;
  error: any;
};

const FormInput = (props: formInputProps) => {
  const { name, label, type, placeholder, register, error } = props;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      {type === "input" ? (
        <input
          id={name}
          placeholder={placeholder}
          {...register(name, { required: name + " is required" })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      ) : (
        <textarea
          id={name}
          placeholder={placeholder}
          rows={4}
          {...register(name, { required: name + " is required" })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      )}
      {error && error[name] && error[name]["message"] && (
        <p className="text-sm text-red-600">{error[name]["message"]}</p>
      )}
    </div>
  );
};

export default FormInput;
