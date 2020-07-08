import { useRef } from 'react';

const Modal = () => {
  let closeButton = useRef(null);

  const submitModal = () => {
    alert('Submitting Modal');
    closeButton.current.click();
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal">
        Create Movie
      </button>

      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Create Movie
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button ref={closeButton} type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button onClick={submitModal} type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
