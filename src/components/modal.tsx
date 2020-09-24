import React from "react";

type ModalType = {
    message: string,
    onClose():void
}
const Modal: React.FC<ModalType> = ({message, onClose}) => {
    return (
        <div className="d-flex justify-content-center mb-3" >
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={{opacity:1}}>
                <div className="toast-header">
                    <strong className="mr-auto">Notification</strong>
                    <small className="text-muted">just now</small>
                    <button type="button" onClick={()=> onClose()} className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Modal