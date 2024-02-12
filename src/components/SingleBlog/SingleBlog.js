import React from 'react';
import { BiUser, BiCommentDots } from 'react-icons/bi';
import { MdOutlineAddReaction } from 'react-icons/md';
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';

const SingleBlog = ({ blog }) => {
  const { singleBlogLoading } = useBlogsContext();

  if (singleBlogLoading) {
    return <Loader />;
  }

  return (
    <div className=" h-[450px] flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <MdOutlineAddReaction className="text-purple-500" />
          <span className="ml-2 font-medium">{blog?.reactions}</span>
        </div>
        <h2 className="text-xl font-semibold text-purple-900 mb-4">{blog?.title}</h2>
        <p className="text-gray-700">{blog?.body}</p>
        <div className="flex items-center mt-4">
          <span className="mr-2 font-semibold">Popular Tags:</span>
          <div className="flex flex-wrap">
            {blog?.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="mr-2 mb-2 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
