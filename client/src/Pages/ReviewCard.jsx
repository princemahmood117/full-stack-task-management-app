import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from "../assets/quotes.png";
import { Helmet } from "react-helmet";
const ReviewCard = ({ review }) => {
  const { name, image, date, short, details, rating } = review;
  return (
    <div className="max-w-xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 md:p-4 p-3 mt-18">
      <Helmet>
        <title>Customer reviews</title>
      </Helmet>
      {/* Image */}
      <img className="object-cover w-full  h-64" src={image} alt="Article" />

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Description */}
        <div>
          <p
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600"
            tabIndex="0"
            role="link"
          >
            {short}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <img src={quote} />
            {details}
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-4">
          <div className="flex items-center">
            {/* Author Section */}
            <div className="flex items-center">
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                {name}
              </a>
            </div>
            {/* Date */}
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {date}
            </span>
            <Rating
              className="ml-10"
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
