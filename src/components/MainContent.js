import React from 'react';
import QuestionCard from './QuestionCard';
import BlogSection from './BlogSection'; // Import the BlogSection component

const MainContent = ({ questions, filter, setFilter }) => {
    return (
        <div className="flex min-h-screen"> {/* Use flex to arrange MainContent and BlogSection side by side */}
            <main className="w-4/5 p-6 bg-white"> {/* Increased width of MainContent to 80% */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Top Questions</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full border border-blue-500">ASK QUESTION</button>
                </div>
                <div className="flex mb-4 space-x-2">
                    {['activity', 'votes', 'hot', 'week', 'month'].map((f) => (
                        <button 
                            key={f} 
                            onClick={() => setFilter(f)} 
                            className={`px-4 py-2 rounded-full ${filter === f ? 'bg-orange-500 text-white' : 'text-gray-700 border border-gray-300'}`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
                {questions.map(question => (
                    <QuestionCard key={question.question_id} question={question} />
                ))}
            </main>
            <BlogSection /> {/* Include the BlogSection here */}
        </div>
    );
};

export default MainContent;