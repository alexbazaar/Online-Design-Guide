import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

/**
 * Dropdown pre-populated with 50 US states, territories and armed forces
 * @returns {node} rendered DOM node
 */
export default function StatePicker({ id, label, territories, armedForces, ...props }) {
  return (
    <Dropdown
      id={id}
      label={label}
      data-component="StatePicker"
      {...props}
    >
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>

      {territories
        ? <option value="AS">American Samoa</option>
        : null
      }

      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>

      {armedForces
        ? <option value="AA">Armed Forces Americas</option>
        : null
      }
      {armedForces
        ? <option value="AP">Armed Forces Pacific</option>
        : null
      }
      {armedForces
        ? <option value="AE">Armed Forces Others</option>
        : null
      }

      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>

      {territories
        ? <option value="GU">Guam</option>
        : null
      }

      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>

      {territories
        ? <option value="MP">Northern Mariana Islands</option>
        : null
      }

      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>

      {territories
        ? <option value="PR">Puerto Rico</option>
        : null
      }

      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>

      {territories
        ? <option value="UM">United States Minor Outlying Islands</option>
        : null
      }

      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>

      {territories
        ? <option value="VI">Virgin Islands</option>
        : null
      }

      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>

    </Dropdown>
  );
}

StatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  territories: PropTypes.bool,
  armedForces: PropTypes.bool,
  label: PropTypes.string
};

StatePicker.defaultProps = {
  territories: false,
  armedForces: false,
  label: 'State'
};
