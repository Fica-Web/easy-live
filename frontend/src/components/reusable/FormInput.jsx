import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const FormInput = ({ 
    type = 'text', 
    name, 
    Icon, 
    placeholder, 
    validation = {} 
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const isPassword = type === 'password';

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col mb-6">
            <div className="flex items-center border-b-2 text-gray-400">
                {Icon && <Icon className="mr-2" />}
                <input
                    type={isPassword && passwordVisible ? "text" : type}
                    {...register(name, validation)}
                    placeholder={placeholder}
                    className="p-3 w-full focus:outline-none"
                    aria-invalid={errors[name] ? "true" : "false"}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="focus:outline-none px-2"
                        aria-label={passwordVisible ? "Hide password" : "Show password"}
                        title={passwordVisible ? "Hide password" : "Show password"}
                    >
                        {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                )}
            </div>
            {errors[name] && (
                <p
                    className="error-message text-sm"
                    role="alert"
                    aria-live="assertive"
                >
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};

export default FormInput;