import React, { Component } from 'react';
export default class Modal extends Component {
    render() {
        let item = this.props.item;
        let handleClose = this.props.handleClose;
        let state = this.props.state;
        return (

            <div className="popup-modal">
                <div className="modal-content">
                    <div className="description-box">
                        <button className="closeBtn" onClick={handleClose}>X</button>
                        <h4>Testing</h4>
                        <p>This is a test</p>
                        <a href="#">This is a clickable link</a>
                    </div>
                </div>
            </div >
        )
    }
}