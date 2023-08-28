import "../styles/Cover.css";
function Cover() {
  return (
    <div className="cover">
      <div className="cover-text">
        <h2 className="cover-heading">A CONSOLE FOR EVERY WORKFLOW</h2>
        <span className="cover-subheading">
          Discover the perfect console for yours.
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="cover-arrow"
      >
        <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
      </svg>
    </div>
  );
}

export default Cover;
