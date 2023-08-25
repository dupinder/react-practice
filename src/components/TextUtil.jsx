import React from "react";

export default function TextUtil() {
  return (
    <>
      <div className="form-floating" >
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{height: '100px', width: '70%', margin: '50px'}}
        ></textarea>
        <label style={{height: '100px', width: '70%', margin: '50px'}} htmlFor="floatingTextarea2">Add text to me ✍️</label>
      </div>
    </>
  );
}
