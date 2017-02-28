var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return(
      <div className="top-bar">
        <div className = "top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <IndexLink to= "/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>
                Timer
              </IndexLink>
            </li>
            <li>
              <Link to= "/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>
                Location
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by: <a target="_blank" href="https://github.com/937aaron">Aaron</a></li>
          </ul>
        </div>
      </div>
    )
}

module.exports = Nav;
