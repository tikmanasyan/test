const style = {
    border:'1px solid red', 
    marginBottom:'10px',  
    padding:'10px'
};

const PostItem = ({title, body}) => {
    return (
        <div style={style}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;