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
        <Disclosure as="nav" className="bg-gray-800">
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
                                                    locationPathName === '/tutorials' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName === '/tutorials' ? 'page' : undefined}
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



                                        <Link to="/tools/image-resize">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    locationPathName.includes('/tools') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={locationPathName.includes('/tools') ? 'page' : undefined}
                                            >
                                                Tools
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
                                                    src="data:image/jpeg;base64,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"
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
                                    area-current={locationPathName === '/tutorials' ? 'page' : undefined}
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
                                        'px-3 py-2 rounded-md text-base font-medium hidden'
                                    )}
                                    area-current={locationPathName === '/portfolio' ? 'page' : undefined}
                                >
                                    Portfolio
                                </Disclosure.Button>
                            </Link>

                            <Link to="/tools/image-resize">
                            <Disclosure.Button
                                as="a"
                                href="/tools"
                                className={classNames(
                                    locationPathName === '/todo' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                area-current={locationPathName === '/tasks' ? 'page' : undefined}
                            >
                                Tools
                            </Disclosure.Button>
                            </Link>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
