import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          style={{
            transform: "msfilter",
            padding: "0 10px",
          }}
        >
          <path d="m20.25 5.025-7.898-2.962-.703 1.873L14.484 5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.018-.767-1.85-1.75-1.975zM4 19v-7h16v-2H4V7h16l.001 12H4z"></path>
          <circle cx="16.5" cy="15.5" r="2.5"></circle>
          <path d="M6 15h4.999v2H6z"></path>
        </svg>
        <h3 className="navbar-heading">Monogram</h3>
      </a>
      <div>
        <a href="/how-it-works" className="navbar-link">
          {" "}
          HOW IT WORKS{" "}
        </a>
        <a href="/download" className="navbar-link">
          {" "}
          DOWNLOAD{" "}
        </a>
        <a href="/blog" className="navbar-link">
          {" "}
          BLOG{" "}
        </a>
        <a href="/support" className="navbar-link">
          {" "}
          SUPPORT{" "}
        </a>
        <a href="/shop" className="navbar-link">
          {" "}
          SHOP{" "}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
