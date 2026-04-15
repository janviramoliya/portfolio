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
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-200"
      >
        {label}
      </label>
      {type === "input" ? (
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          {...register(name, { required: name + " is required" })}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={4}
          {...register(name, { required: name + " is required" })}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
      )}
      {error && error[name] && error[name]["message"] && (
        <p className="text-sm text-red-400">{error[name]["message"]}</p>
      )}
    </div>
  );
};

export default FormInput;
