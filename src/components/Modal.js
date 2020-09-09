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
                        {console.log(item)}
                        <img src={item.imgurl} className="img-modal" />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>{item.languages}</p>
                        <a href={item.github}>This is a clickable link</a>
                        <a href={item.demo ? item.demo : item.deployed}>This is a 2nd clickable link</a>
                    </div>
                </div>
            </div >
        )
    }
}