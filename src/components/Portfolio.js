import React, { Component } from 'react';
import Modal from './Modal';
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.handleClose = e => {
      e.stopPropagation();
      console.log("Is this working?")
      this.setState({ modalIsOpen: false })
    };
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay" onClick={() => this.setState({ modalIsOpen: true })} >
                          {this.state.modalIsOpen ? <Modal item={item} handleClose={this.handleClose} /> : <div />}
                          <div className="portfolio-item-meta">
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
      </section>
    );
  }
}