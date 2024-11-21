import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [filter, setFilter] = useState('activity');
    const [searchQuery, setSearchQuery] = useState('');

    const fetchQuestions = useCallback(() => {
        fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`)
            .then(response => response.json())
            .then(data => setQuestions(data.items));
    }, [filter]);

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=${filter}&q=${searchQuery}&site=stackoverflow`)
            .then(response => response.json())
            .then(data => setQuestions(data.items));
    };

    return (
        <div>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            <div className="flex">
                <Sidebar setFilter={setFilter} />
                <MainContent questions={questions} filter={filter} setFilter={setFilter} />
            </div>
        </div>
    );
};

export default App;
