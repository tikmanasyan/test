import { useEffect, memo } from "react";

const Element = memo(({text, post}) => {
    useEffect(() => {
        console.log("Update Element");
    });
    return (
        <div>
            <h1>{text}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps) );

export default Element;