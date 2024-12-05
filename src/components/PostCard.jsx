const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 bg-white">
      {/* Post Image */}
      {post.imageUrl && (
        <img className="w-full h-64 object-cover" src={post.imageUrl} alt="Post" />
      )}

      <div className="px-6 py-4">
        {/* Post Content */}
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base">{post.body}</p>
      </div>

      <div className="px-6 py-4">
        {/* Post Author */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={post.authorProfileImage}
            alt="Author"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{post.authorName}</p>
            <p className="text-gray-600">{post.timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
