import React, { Component } from 'react';
import Modal from './Modal';
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      item: {}
    };
    this.handleClose = e => {
      e.stopPropagation();
      console.log("Is this working?")
      this.setState({ modalIsOpen: false })
    };
    this.handleClick = (item) => {
      this.setState({ item: item })
      this.setState({ modalIsOpen: true });
    }
  }

  render() {
    let resumeData = this.props.resumeData;
    //need a function that handles the onClick event so that it passes the targeted project data to the modal


    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item, index, array) => {
                  return (
                    <div className="columns portfolio-item" key={index}>
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay" onClick={e => this.handleClick(item)} >
                          {this.state.modalIsOpen ? <Modal item={this.state.item} handleClose={this.handleClose} /> : <div />}
                          < div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section >
    );
  }
}