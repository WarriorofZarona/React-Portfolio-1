import React, { Component } from 'react';
export default class Modal extends Component {
    render() {
        console.log("Inside the props are", this.props)
        let item = this.props.item;
        let handleClose = this.props.handleClose;
        console.log(handleClose)
        return (

            // <div className="mfp-fade mfp-wrap">
            //     <div className="mfp-content">
            <div className="popup-modal">
                <div className="modal-content">
                    <div className="description-box">
                        <button onClick={handleClose}>X</button>
                        <h4>Testing</h4>
                        <p>This is a test</p>
                        <a href="#">This is a clickable link</a>
                    </div>
                </div>
            </div >
            //     <g
        )
    }
}