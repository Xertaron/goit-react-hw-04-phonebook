import React from 'react';
import data from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={data.filter}>
    <label className={data.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={data.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;