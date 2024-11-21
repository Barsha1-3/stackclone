import React from 'react';

const QuestionCard = ({ question }) => {
    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <p className="text-lg mb-2">{question.title}</p>
            <div className="flex mb-2">
                {question.tags.map(tag => (
                    <span key={tag} className="text-gray-700 px-2 py-1 rounded mr-2">{tag}</span>
                ))}
            </div>
            <div className="flex justify-between text-gray-500">
                <div className="flex items-center">
                    <i className="fas fa-caret-up mr-1"></i> {question.score}
                </div>
                <div className="flex items-center">
                    <i className="fas fa-comment-alt mr-1"></i> {question.answer_count}
                </div>
                <div className="flex items-center">
                    <i className="fas fa-eye mr-1"></i> {question.view_count}
                </div>
                <div>asked {new Date(question.creation_date * 1000).toLocaleString()} by {question.owner.display_name}</div>
            </div>
        </div>
    );
};

export default QuestionCard;