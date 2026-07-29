import React, { useState } from "react";

const BlogCard = ({ title, content, comments }) => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="blog-card">
      <h4>{title}</h4>
      <p>{content}</p>

      <div className="blog-actions">
        {/* Voting Section */}
        <div className="votes">
          <button className="upvote-btn" onClick={handleUpvote} aria-label="Upvote">
            ▲
          </button>
          <span>{votes}</span>
          <button className="downvote-btn" onClick={handleDownvote} aria-label="Downvote">
            ▼
          </button>
        </div>

        <span>💬 {comments} Comments</span>
        <span>🔗 Share</span>
      </div>
    </div>
  );
};

export default BlogCard;
