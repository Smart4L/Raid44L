import React from "react";
import Img from './Sponsors_img'

export default class Sponsors extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-orange">
          <div className="remerciements">
            <h1>Merci à eux !</h1>
          </div>
        </div>
        <Img />
      </div>
    );
  }
}
