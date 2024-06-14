import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usedFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author} </p>
          <div>{data.body} </div>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
