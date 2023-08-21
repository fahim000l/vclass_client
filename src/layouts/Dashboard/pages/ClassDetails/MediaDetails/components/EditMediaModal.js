import React from "react";

const EditMediaModal = ({ mediaDetails }) => {
  return (
    <div>
      <input type="checkbox" id="editMediaModal" className="modal-toggle" />
      <div className="modal modal-bottom lg:modal-middle">
        <div className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="editMediaModal">
          Close
        </label>
      </div>
    </div>
  );
};

export default EditMediaModal;
