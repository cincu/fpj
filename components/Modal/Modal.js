import React, { useRef, useState } from "react";

export default function Modal({ visible, setVisible, addWork }) {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWork(formData);
    setVisible(false); // Close the modal
  };
  return (
    <>
      {visible ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            direction: "row",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: "100",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setVisible(false);
          }}
        >
          <div style={{ backgroundColor: "purple" }} ref={modalRef}>
            <h1>My modal</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="input1">Input 1:</label>
              <input
                type="text"
                name="input1"
                value={formData.input1}
                onChange={handleInputChange}
              />
              <label htmlFor="input2">Input 2:</label>
              <input
                type="text"
                name="input2"
                value={formData.input2}
                onChange={handleInputChange}
              />
              <label htmlFor="input3">Input 3:</label>
              <input
                type="text"
                name="input3"
                value={formData.input3}
                onChange={handleInputChange}
              />
              <label htmlFor="input4">Input 4:</label>
              <input
                type="text"
                name="input4"
                value={formData.input4}
                onChange={handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setVisible(false)}>Close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
