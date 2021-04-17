import React from 'react';
import blogData from './blogData.json';

function BlogPage1(){
    return (
        <div className='row'>
            <div className='col'>
                <h1>{blogData[0].title}</h1>
                <div>
                    <p>{blogData[0].body[0]}</p>
                    <p>{blogData[0].body[1]}</p>
                    <p>{blogData[0].body[2]}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage1;