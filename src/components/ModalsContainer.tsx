import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
  fullScreen: boolean;
  title: string;
  id: string;
}

const ModalsContainer = ({ children, fullScreen, title, id }: Props) => {
  return createPortal(
    //tabindex="-1"
    <div className="modal fade" id={id} aria-hidden="true">
      <div className={`modal-dialog ${fullScreen ? "modal-fullscreen" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title flex-fill" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modals-root")!
  );
};
export default ModalsContainer;
