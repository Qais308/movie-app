// ReviewsSection.jsx
import React from "react";

const ReviewsSection = ({ reviews }) => {
  if (!reviews || reviews.length === 0)
    return <p className="text-gray-400 mt-2">No reviews available.</p>;

  return (
    <div className="mt-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
  User Reviews <span className="text-sm text-gray-400">(via TMDb)</span>
</h2>

      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800/70 p-4 rounded-lg shadow-md text-white"
          >
            <div className="flex items-center gap-3 mb-2">
              {review.author_details.avatar_path ? (
                <img
                  src={
                    review.author_details.avatar_path.startsWith("/https")
                      ? review.author_details.avatar_path.slice(1) // TMDb sometimes prepends '/'
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
                  <p className="text-yellow-400 text-sm">⭐ {review.author_details.rating}/10</p>
                )}
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-base">{review.content}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(review.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;


