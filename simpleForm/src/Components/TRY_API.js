import React, { useEffect, useState } from 'react'

const TRY_API = () => {

    const [user, setUser] = useState([]);
    const [loading , setloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(50);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        setUser(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    const indexOfTheLastPost = currentPage * postsPerPage ;
    const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
    //const currentPosts = posts.slice(indexOfTheFirstPost , indexOfTheLastPost);

    return (<>
        <div className="container-fluid mt-5">
        <center><h1>PICTURE AND TITLE</h1></center>
            <div className="row text-center">
                {
                    user.map((curElem) => {
                        return (
                            <>
                          
                            <div className="col-5 col-md-3 mt-4" key={curElem.id}>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image"><img src={curElem.thumbnailUrl} className="rounded" alt="" /> </div>
                                        <div className="mi-3 w-100">
                                            <h4 className="mb-0 mt-0 textleft">{curElem.title }</h4>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            </>
                        )
                    })
                }




            </div>


        </div>
    </>
    )
}

export default TRY_API
