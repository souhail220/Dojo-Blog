import BlogList from "./Blog";
import useFetch from "./usedFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <BlogList blogs={data} title={"All Blog!"} />}
      </div>
    </div>
  );
};

export default Home;
