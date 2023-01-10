import { useState } from "react";
import PostItem from "../PostItem/PostItem";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then( posts => {
        setPosts(posts);
    });


    return (
        <div>
            <h2>Posts ({posts.length})</h2>
            {/* {posts.map(post => <PostItem key={post.id} title={post.title} body={post.body} />)} */}
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                );
            })}

        </div>
    );
}

export default Posts;