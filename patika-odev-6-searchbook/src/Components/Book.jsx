import { useState, useEffect } from "react";

function Book({ imageLinks, description, authors, title, pageCount }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setShowModal(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      setShowModal(false);
    };
  }, []);

  return (
    <div className="book">
      <div className="book-img">
        <img src={imageLinks} alt={title} />
      </div>
      <button className="details-btn" onClick={() => setShowModal(true)}>
        Details
      </button>
      <div className="info">
        <div className="title">{title}</div>
        <div className="author">{authors}</div>
      </div>

      {showModal && (
        <div className="model-overlay">
          <div className="modal">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="close-btn"
            >
              &times;
            </button>
            <div className="modal-content">
              <div className="description">
                <h2 style={{ marginBottom: "6px" }}>Description</h2>
                {description}
              </div>
              <div className="page">
                <h2>Page Count: {pageCount}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
