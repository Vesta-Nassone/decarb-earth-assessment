import React from 'react';

const Sidebar = ({ logout, updateProfile, seo, performance }) => {
    return (
        <div className="relative flex flex-col min-h-screen bg-white border-r border-gray-200">
            {/* Logo Section */}
            <img src='/images/logo.svg' alt='logo' className="px-5 pt-5" />
            <hr className='mt-4' />

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
                <div className="px-3 space-y-1 bg-white divide-y divide-gray-200">
                    <ul className="pb-2 space-y-2">
                        {/* Menu Items */}
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-500 transition duration-75"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <p
                                onClick={seo}
                                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                <svg className="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"></path></svg>
                                <span className="ml-3">SEO</span>
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={performance}
                                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" classname="w-6 h-6 text-gray-500 transition duration-75" width="24px" fill="currentColor"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" /></svg>

                                <span className="ml-3">Performance</span>
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={updateProfile}
                                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                <svg className="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                <span className="ml-3">Update Profile</span>
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Vesta-Nassone/decarb-earth-assessment"
                                target="_blank"
                                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100" rel="noreferrer"
                            >
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.1 7.9 17 23.6 17 47.5 0 34.4-.3 77.5-.3 86.7 0 6.5 4.6 14.4 17.3 12.1C426.2 457.8 496 363.1 496 252c0-138.7-106.1-244-251.2-244z" /></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">GitHub</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200">
                <button
                    onClick={logout}
                    className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100"
                >
                    <svg className="h-6 w-6 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                    <span className="ml-3">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
