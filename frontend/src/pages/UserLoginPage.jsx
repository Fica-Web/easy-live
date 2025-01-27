import { Link } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { FaLock, FaUser } from "react-icons/fa";
import FormInput from "../components/reusable/FormInput";

const UserLoginPage = () => {
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // Simulate login request
        // toast.success("Logged in successfully!");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className='pt-10 pb-6 px-6 max-w-md min-w-80 shadow-2xl shadow-gray-500/40'>
                <div className="textcenter text-3xl my-8 text-center font-semibold">
                    Login
                </div>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Username Input */}
                        <FormInput
                            type='text'
                            name='email'
                            placeholder='Enter your email'
                            Icon={GoMail}
                            errorMessage='Email is required'
                            validation={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                }
                            }}
                        />

                        {/* Password Input */}
                        <FormInput
                            type="password"
                            name="password"
                            Icon={FaLock}
                            placeholder="Enter your password"
                            validation={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            }}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-easy-primary-dark text-white py-2 px-4 rounded-lg hover:bg-dark-green transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </FormProvider>
                <div className="my-4">
                    <h2 className='text-gray-600 text-center'>
                        Don't have an account?
                        <Link to={'/signup'} className='text-blue-600 hover:text-blue-800 font-semibold cursor-pointer px-2'>
                            Sign Up
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default UserLoginPage;