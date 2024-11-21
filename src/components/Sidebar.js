import React from 'react';

const Sidebar = ({ setFilter }) => {
    return (
        <aside className="w-1/5 bg-white p-4 border-r border-gray-200">
            <nav>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-orange-600">
                            <i className="fas fa-home mr-2"></i> Home
                        </a>
                    </li>
                    <li className="mb-4">
                        <span className="flex items-center text-gray-500">
                            <i className="fas fa-globe mr-2 text-orange-500"></i> PUBLIC
                        </span>
                        <ul className="ml-4 mt-2">
                            <li className="mb-2">
                                <button onClick={() => setFilter('activity')} className="text-gray-700">Questions</button>
                            </li>
                            <li className="mb-2"><a href="#" className="text-gray-700">Tags</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700">Users</a></li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <span className="flex items-center text-gray-500">
                            <i className="fas fa-users mr-2 text-orange-500"></i> COLLECTIVES
                        </span>
                        <ul className="ml-4 mt-2">
                            <li className="mb-2"><a href="#" className="text-gray-700">Explore Jobs</a></li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <span className="flex items-center text-gray-500">
                            <i className="fas fa-briefcase mr-2 text-orange-500"></i> FIND JOBS
                        </span>
                        <ul className="ml-4 mt-2">
                            <li className="mb-2"><a href="#" className="text-gray-700">Jobs</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700">Companies</a></li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <span className="flex items-center text-gray-500">
                            <i className="fas fa-users-cog mr-2 text-orange-500"></i> TEAMS
                        </span>
                        <ul className="ml-4 mt-2">
                            <li className="mb-2"><a href="#" className="text-gray-700">+ Create a team</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;