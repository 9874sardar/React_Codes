import React from 'react'

export const Post = ({ post, loading }) => {
    if (loading) {
        return <h2> loading .. </h2>;
    }

    return (<ul className="list-group mb-4">
        {post.map(post => (
            <div className="col-10 col-md-4 mt-4" key={post.id}>
                <div className="card group">
                    <div className="d-flex align-items-center">
                        <div className="image"><img src={post.thumbnailUrl} className="rounded" alt="" /> </div>
                        <div className="mi-3 w-100">
                            <h4 className="mb-0 mt-0 textleft">{post.title}</h4>

                        </div>

                    </div>

                </div>
            </div>
        ))}
    </ul>


    );
};
export default Post;