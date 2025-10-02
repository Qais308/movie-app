import React, { useState } from "react";

const ReviewsSection = ({ reviews }) => {
  if (!reviews || reviews.length === 0)
    return <p className="text-gray-400 mt-2">No reviews available.</p>;

  // Component to handle individual review with show more/less
  const ReviewItem = ({ review }) => {
    const [showFull, setShowFull] = useState(false);
    const maxLength = 200; // max chars to show initially

    const toggleShow = () => setShowFull((prev) => !prev);

    const content =
      review.content.length > maxLength
        ? showFull
          ? review.content
          : review.content.slice(0, maxLength) + "..."
        : review.content;

    return (
      <div className="bg-gray-800/70 p-4 rounded-lg shadow-md text-white">
        <div className="flex items-center gap-3 mb-2">
          {review.author_details.avatar_path ? (
            <img
              src={
                review.author_details.avatar_path.startsWith("/https")
                  ? review.author_details.avatar_path.slice(1)
                  : `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
              }
              alt={review.author}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-sm text-white">
              {review.author[0].toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-semibold">{review.author}</p>
            {review.author_details.rating && (
              <p className="text-yellow-400 text-sm">
                ⭐ {review.author_details.rating}/10
              </p>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-base">{content}</p>
        {review.content.length > maxLength && (
          <button
            onClick={toggleShow}
            className="text-blue-400 text-xs mt-1 hover:underline"
          >
            {showFull ? "Show Less" : "Show More"}
          </button>
        )}
        <p className="text-xs text-gray-400 mt-1">
          {new Date(review.created_at).toLocaleDateString()}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
        User Reviews <span className="text-sm text-gray-400">(via TMDb)</span>
      </h2>

      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
