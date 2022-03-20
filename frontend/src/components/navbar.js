/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/userActions";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Nav() {

    const locationPathName = useLocation().pathname;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <Disclosure as="nav" className="bg-gray-800 mb-3">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div
                                className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">

                                    <h3 style={{color:"white"}}
                                        className="hidden lg:block h-8 w-auto p-0 m-0"
                                    >VOCUP</h3>
                                    <h3 style={{color:"white"}} className="block lg:hidden"><b>VOCUP</b></h3>
                                </div>
                                <div className="hidden sm:block sm:ml-6">

                                    <div className="flex space-x-4">

                                        <Link to="/">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName === '/home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName === '/home' ? 'page' : undefined}
                                            >
                                                Home
                                            </a>
                                        </Link>


                                        <Link to="/vocabulary">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName === '/vocabulary' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName === '/vocabulary' ? 'page' : undefined}
                                            >
                                                Vocabulary
                                            </a>
                                        </Link>


                                        <Link to="/dictionary">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName === '/dictionary' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName === '/dictionary' ? 'page' : undefined}
                                            >
                                                Dictionary
                                            </a>
                                        </Link>

                                        {!userInfo &&
                                            <Link to="/login">
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        locationPathName === '/login' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={locationPathName === '/login' ? 'page' : undefined}
                                                >
                                                    Login
                                                </a>
                                            </Link>
                                        }


                                        {!userInfo &&
                                            <Link to="/join">
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        locationPathName === '/join' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={locationPathName === '/join' ? 'page' : undefined}
                                                >
                                                    Join
                                                </a>
                                            </Link>
                                        }

                                        <Link to="/tutorials">
                                            <a
                                                href=""
                                                className={classNames(
                                                    locationPathName === '/blog' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName === '/blog' ? 'page' : undefined}
                                            >
                                                Tutorials
                                            </a>
                                        </Link>

                                        <Link to="/portfolio">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName === '/portfolio' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium hidden'
                                                )}
                                                aria-current={locationPathName === '/portfolio' ? 'page' : undefined}
                                            >
                                                Portfolio
                                            </a>
                                        </Link>



                                        <Link to="/tasks">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName === '/tasks' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium hidden'
                                                )}
                                                aria-current={locationPathName === '/tasks' ? 'page' : undefined}
                                            >
                                                Tasks
                                            </a>
                                        </Link>




                                    </div>
                                </div>
                            </div>
                            {userInfo &&
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button
                                                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >

                                            <Menu.Items
                                                className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userInfo &&

                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>}
                                                {userInfo &&
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}

                                                    </Menu.Item>}

                                                {userInfo &&
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                onClick={handleLogout}
                                                            >
                                                                Logout
                                                            </a>
                                                        )}

                                                    </Menu.Item>}


                                            </Menu.Items>


                                        </Transition>
                                    </Menu>
                                </div>
                            }
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">

                            <Link to="/">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        locationPathName === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    area-current={locationPathName === '/' ? 'page' : undefined}
                                >
                                    Home
                                </Disclosure.Button>

                            </Link>


                            <Link to="/vocabulary">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        locationPathName === '/vocabulary' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    area-current={locationPathName === '/vocabulary' ? 'page' : undefined}
                                >
                                    Vocabulary
                                </Disclosure.Button>
                            </Link>


                            <Link to="/dictionary">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        locationPathName === '/dictionary' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    area-current={locationPathName === '/dictionary' ? 'page' : undefined}
                                >
                                    Dictionary
                                </Disclosure.Button>
                            </Link>


                            {
                                !userInfo &&
                                <Link to="/login">
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className={classNames(
                                            locationPathName === '/login' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        area-current={locationPathName === '/login' ? 'page' : undefined}
                                    >
                                        Login
                                    </Disclosure.Button>
                                </Link>
                            }


                            {
                                !userInfo &&
                                <Link to="/join">
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className={classNames(
                                            locationPathName === '/join' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        area-current={locationPathName === '/join' ? 'page' : undefined}
                                    >
                                        Join
                                    </Disclosure.Button>
                                </Link>
                            }
                            <Link to="/tutorials">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        locationPathName === '/blog' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    area-current={locationPathName === '/blog' ? 'page' : undefined}
                                >
                                    Tutorials
                                </Disclosure.Button>
                            </Link>

                            <Link to="/portfolio">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        locationPathName === '/portfolio' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium hidden'
                                    )}
                                    area-current={locationPathName === '/portfolio' ? 'page' : undefined}
                                >
                                    Portfolio
                                </Disclosure.Button>
                            </Link>

                            <Link to="/tasks">
                            <Disclosure.Button
                                as="a"
                                href="/tasks"
                                className={classNames(
                                    locationPathName === '/todo' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                area-current={locationPathName === '/tasks' ? 'page' : undefined}
                            >
                                Tasks
                            </Disclosure.Button>
                            </Link>



                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
