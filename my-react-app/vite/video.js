function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }

const container = document.getElementById('mydiv2');
const root = ReactDOM.createRoot(container);
root.render(<Video />)