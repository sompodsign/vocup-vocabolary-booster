import {Link} from 'react-router-dom'
import {LockClosedIcon} from '@heroicons/react/solid'
import {tabTitle} from "../utils/generalFunctions";
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { register } from "../redux/actions/userActions";
import {VerifyEmail} from "../components/verify_account";

import notify from "../utils/notification";
import { USER_REGISTER_RESET } from '../redux/constants/userConstants';





export default function JoinScreen() {

    tabTitle('Sign Up - VOCUP')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userRegisterInfo } = userRegister

    if (userRegisterInfo) {
        navigate("/login");
        notify("Registration Successful. You can login now.", "success");
        dispatch({type: USER_REGISTER_RESET});
    } else if(error) {
        notify("Something went wrong", "error")
        dispatch({type: USER_REGISTER_RESET});
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(register(firstName, lastName, email, password, confirmPassword));
    }

    return (
        <>
            {/* {userInfo ? <VerifyEmail /> : */}
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            {/* <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            /> */}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Get Started Now</h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitHandler}>
                            <input type="hidden" name="remember" defaultValue="true"/>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>


                                    <label htmlFor="fname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        id="fname"
                                        name="fname"
                                        type="text"
                                        autoComplete="fname"
                                        //   required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="First Name"
                                        onChange={event => setFirstName(event.target.value)}
                                    />

                                    <label htmlFor="lname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        id="lname"
                                        name="lname"
                                        type="text"
                                        autoComplete="lname"
                                        //   required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Last Name"
                                        onChange={event => setLastName(event.target.value)}
                                    />

                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        //   required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email Address"
                                        onChange={event => setEmail(event.target.value)}
                                    />

                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        //   required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <label htmlFor="confirm-password" className="sr-only">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        autoComplete="current-password"
                                        //   required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Confirm Password"
                                        onChange={event => setConfirmPassword(event.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="flex flex-row-reverse">
                                <div className="text-sm">
                                    <Link to="/login">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Login Instead?
                                        </a>
                                    </Link>
                                </div>
                            </div>


                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            {/* } */}

        </>
    )
}
