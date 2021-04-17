import React from 'react';
import blogData from './blogData.json';
import { useParams } from 'react-router-dom';

function BlogPage({ children }) {

    let { pageNum } = useParams();
    console.log({ pageNum });      
   
    return (
        <div className='row'>
            <div className='col'>
                {
                    pageNum < blogData.length ?
                        <>
                            <h1>{blogData[pageNum].title}</h1>
                            <div>
                            <p>
                                {blogData[pageNum].body.map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })}
                            </p>
                            </div>
                        </>
                        :
                        "that blog page was not found"}
                {children}
            </div>
        </div>
    )
}

export default BlogPage;