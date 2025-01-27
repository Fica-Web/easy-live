import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import FormInput from '../components/reusable/FormInput';

const SignUp = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            username: '',
            name: '',
            password: '',
        },
    });

    const { handleSubmit } = methods;

    const handleSignUp = (data) => {
        alert(JSON.stringify(data, null, 2)); // Simulate form submission
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="pt-4 pb-6 px-6 lg:px-10 max-w-md min-w-80 shadow-2xl bg-white rounded-md lg:min-w-[370px] ">
                <h2 className="text-3xl my-6 text-center font-semiBold text-dark-green">Sign Up</h2>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <FormInput
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            Icon={GoMail}
                            validation={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                },
                            }}
                        />
                        <FormInput
                            type="text"
                            name="username"
                            placeholder="Create a username"
                            Icon={FaRegUser}
                            validation={{
                                required: 'Username is required',
                                minLength: {
                                    value: 3,
                                    message: 'Username must be at least 3 characters long',
                                },
                            }}
                        />
                        <FormInput
                            type="text"
                            name="name"
                            placeholder="Enter your Full Name"
                            Icon={FaRegUser}
                            validation={{
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters long',
                                },
                            }}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            Icon={FaRegUser}
                            validation={{
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            }}
                        />
                        <button
                            type="submit"
                            className="bg-easy-primary-dark hover:bg-dark-green text-white w-full rounded-md p-3 mt-4"
                        >
                            Sign Up
                        </button>
                    </form>
                </FormProvider>
                <div className="my-4">
                    <h1 className='text-gray-600 text-center'>
                        Already have an account? 
                        <Link to={'/login'} className='text-blue-600 hover:text-blue-800 font-semibold cursor-pointer px-2'>
                            Login
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;