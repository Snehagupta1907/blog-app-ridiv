import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { banner_image } from '../../utils/images';
import Title from '../../components/Title/Title';
import SingleBlog from '../../components/SingleBlog/SingleBlog';
import { useBlogsContext } from '../../context/blogsContext';

const SingleBlogPage = () => {
  const { fetchSingleBlog, singleBlog } = useBlogsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleBlog(id);
  }, [singleBlog.userId, singleBlog.id, id]);

  return (
    <div className="bg-light-blue ">
      <header
        className="header bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image})` }}
      >
        <div className="mx-auto py-20">
          <div className="text-center">
            <Title title="Blog Details" color="#fff" />
          </div>
        </div>
      </header>
      <section>
        <div className=" mx-auto">
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <SingleBlog blog={singleBlog} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
