import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-5">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="geolocation">Geolocation</Link>
            </li>
            <li className="list-group-item">
              <Link to="refs">Refs Example</Link>
            </li>
            <li className="list-group-item">
              <Link to="accordian">Accordian Component</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
