import React from "react";
import { banner_image } from "../../utils/images";
import Title from "../../components/Title/Title";
import BlogList from "../../components/BlogList/BlogList";
import { useBlogsContext } from "../../context/blogsContext";

const HomePage = () => {
  const { blogs } = useBlogsContext();

  return (
    <div className="bg-light-blue">
      <header
        className="header bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image})` }}
      >
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h1 className="text-4xl text-white font-semibold max-w-lg mx-auto mb-8">A beautiful blog with no images required</h1>
          </div>
        </div>
      </header>

      <section className="py-7">
        <div className="container mx-auto">
          <div className="section-content">
            <Title title="Blogs" color={"#0D1741"} />
            {<BlogList blogs={blogs} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
