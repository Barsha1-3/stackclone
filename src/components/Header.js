import React from 'react';

const Header = ({ searchQuery, setSearchQuery, handleSearch, setFilter }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow">
            <div className="flex items-center">
                <img 
                    src="/image/Screenshot 2024-11-20 175658.jpg" 
                    alt="Stack Overflow logo" 
                    className="mr-2" 
                />
            </div>
            <form onSubmit={handleSearch} className="flex items-center flex-grow mx-4 relative">
                <input 
                    type="text" 
                    placeholder="Search Your Answers Here..." 
                    className="w-full p-2 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <div className="flex items-center space-x-4">
                <span className="text-gray-500">Products</span>
                <i className="fas fa-comment-alt text-gray-500"></i>
                <i className="fas fa-trophy text-gray-500"></i>
                <i className="fas fa-envelope text-gray-500"></i>
                <img 
                    src="/image/Barsha30x30.jpg" 
                    alt="User  avatar" 
                    className="rounded-full" 
                />
            </div>
        </header>
    );
};

export default Header;