import React from 'react';

const Modal = (props) => {
    return (
        <div>
        	{ props.show && <div onClick={props.close} className="back-drop"></div> }
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translate(-50%,-50%)' : 'translate(-50%, -300%)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h5>{props.title}</h5>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <h3>
                        {props.children}
                    </h3>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Cancel</button>
                    <button className="btn-continue" onClick={props.confirm}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;