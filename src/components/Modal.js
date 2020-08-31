import React, { Component } from 'react';
export default class Modal extends Component {
    render() {
        let item = this.props.item;
        let handleClose = this.props.handleClose;
        let i = this.props.index;

        return (

            <div className="popup-modal">
                <div className="modal-content">
                    <div className="description-box">
                        <button className="closeBtn" onClick={handleClose}>X</button>
                        {console.log(i)}
                        <h4>{item.name}</h4>
                        <p>This is a test</p>
                        <a href="#">This is a clickable link</a>
                    </div>
                </div>
            </div >
        )
    }
}