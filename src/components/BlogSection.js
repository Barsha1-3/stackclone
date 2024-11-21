import React from 'react';

const BlogSection = () => {
    return (
        <aside className="w-1/4 md:w-1/3 lg:w-1/4 p-6 bg-white min-h-screen"> {/* Adjusted width for responsiveness */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">The Overflow Blog</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="text-gray-700">The unexpected benefits of mentoring others</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700">Podcast 354: Building for AR with Niantic Labs’ augmented reality SDK</a></li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Featured & meta</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="text-gray-700">Beta release of Collectives™ on Stack Overflow</a></li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Hot meta post</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="text-gray-700">Tags [driver] and [device-driver] appear to be redundant</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700">How to handle dupes where A is closed as dup of B but I have an answer that...</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700">Ambiguous tag [containers]</a></li>
                </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Custom filter</h2>
                <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded">add custom filters</button>
            </div>
        </aside>
    );
};

export default BlogSection;