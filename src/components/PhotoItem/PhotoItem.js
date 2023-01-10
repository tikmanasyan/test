const PhotoItem = memo(({photo}) => {
    return (
        <div>
            <img src={photo.url} title={photo.title} />
        </div>
    );
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps));

export default PhotoItem;