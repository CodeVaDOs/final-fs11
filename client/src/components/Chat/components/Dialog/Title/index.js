import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Title = ({ date }) => (
  <div className="title">
    {date}
  </div>
);

Title.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Title;