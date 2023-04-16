import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagramSquare,
  faLine,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const iconCheck = (iconName: string) => {
  switch (iconName) {
    case 'faFacebook':
      return faFacebook;
    case 'faInstagramSquare':
      return faInstagramSquare;
    case 'faLine':
      return faLine;
    case 'faLinkedin':
      return faLinkedin;
    default:
      return null;
  }
};
function Icon(iconName: string) {
  const icon = iconCheck(iconName);
  return (
    <div>
      {
      icon
        ? (
          <div style={{ marginRight: '3px' }}>
            <FontAwesomeIcon icon={icon} />
          </div>

        )
        : ''
      }
    </div>

  );
}

export default Icon;
