import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';

const App = () => {
  const [post,setPost] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  useEffect( ()=> {
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPost(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);

  const indexOfTheLastPost = currentPage * postsPerPage ;
  const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
  const currentPost = post.slice(indexOfTheFirstPost , indexOfTheLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (<>
      <h1>Images and Titles</h1>
      <Post post={currentPost} loading={loading}></Post>
      <Pagination postPerPage={postsPerPage} totalPosts={post.length} paginate={paginate}/>
  </>
  );
}

export default App;
