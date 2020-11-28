import React, {useEffect, useState} from 'react';
import './home.scss';
import {BlogItem, Button, Gap} from '../../components';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/v1/blog/posts')
            .then(result => {
                console.log('Data API: ', result)
                const responseAPI = result.data;

                setDataBlog(responseAPI.data)
            })
            .catch(err => {
                console.log('error: ', err)
            })
    })
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog" onClick={() => history.push('/create-blog') } />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                                key={blog._id} 
                                image={`http://localhost:4000/${blog.image}`}
                                title={blog.title}
                                body={blog.body}
                                name={blog.author.name}
                                date={blog.createdAt} />
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
                <Gap height={20} />
            </div>
        </div>
    )
}

export default Home
