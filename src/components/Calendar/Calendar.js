import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Calendar.scss";

const Calendar = props => {
  return (
    <Fragment>
      <section className="add_container">
        <Link to={`/editor`} className="add_link">
          <p>+</p>
        </Link>
      </section>
      <section>
        <div className="face"> </div>
      </section>
    </Fragment>
  );
};

export default Calendar;
