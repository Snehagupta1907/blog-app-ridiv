import React, { useState } from 'react';
import { MdAddReaction } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';

const BlogList = ({ blogs }) => {
  const { blogsLoading } = useBlogsContext();
  const blogLimit = 6;
  const [paginate, setPaginate] = useState(1 * blogLimit);
  const paginateHandler = (value) => setPaginate(value * blogLimit);

  if (blogsLoading ) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-12">
        {blogs.slice(paginate - 6, paginate).map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg p-6 transition-colors duration-300 hover:bg-purple-200 hover:text-purple-900">
            <div className="font-rubik font-semibold text-lg mb-2">{blog.title}</div>
            <div className="text-sm text-gray-600 mb-4">{blog.body.substring(0, 100)}...</div>
            <div className="flex items-center mb-2">
              <MdAddReaction className="text-purple-500" />
              <span className="ml-1 text-sm">{blog.reactions}</span>
            </div>
            <div className="flex flex-wrap mb-2">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="mr-2 mb-2 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <Link to={`/post/${blog.id}`} className="inline-block text-purple-600 border border-purple-600 px-3 py-1 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-300">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
    </>
  );
};

export default BlogList;
