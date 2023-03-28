import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Content from './Content';




const App = () => {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        const fetchContent = async()=>{
            const response = await axios.get('/api/content');
            setContent(response.data);
        };
        fetchContent();
    }, []);

    return (
        <div>
            <h1><Link to='/'>Personal Site (under construction) ({content.length})</Link></h1>
            <ul>
                {
                    content.map( item => {
                        return (
                            <li key={item.id}>
                                <Link to={`/content/${item.id}`}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <Routes>
                <Route path='/content/:id' element={ <Content content={ content }/>} />
            </Routes>
        </div>
    );
};

export default App;