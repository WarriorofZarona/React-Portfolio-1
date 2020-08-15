import React, { Component } from 'react';
export default class Modal extends Component {
    render() {
        let item = this.props.item;
        return (

            // <div className="mfp-fade mfp-wrap">
            //     <div className="mfp-content">
            <div className="popup-modal" id="modal-01">
                <div className="description-box">
                    <h4>Testing</h4>
                    <p>This is a test</p>
                    <a href="#" className="popup-modal-dismiss">This is a clickable link</a>
                </div>
            </div>
            //     <g
        )
    }
}