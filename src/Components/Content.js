import React from 'react';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';

const Content = ({content}) => {
    const { id } = useParams();
    const item = content.find(item => item.id === id * 1);
    
    if(!item){
        return null;
    }

    return (
        <div>
            <h2>{ item.name }</h2>
            <p>
                { item.description }
            </p>
        </div>
    );
}

export default Content;