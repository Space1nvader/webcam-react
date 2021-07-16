import React from 'react';
import { Link } from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { pathTo } from '../until';

const NavCrubms = (props) => {
  const { route, ...other } = props;
  return (
    <Breadcrumbs
      separator={
        <FiberManualRecordIcon style={{ width: 6, margin: '0 8px', fill: 'var(--gray-40)' }} />
      }
      aria-label="breadcrumb"
      style={{ marginBottom: 26 }}
    >
      {pathTo(route).map((crumb, index, breadcrumbs) => (
        <Typography
          key={crumb.label}
          style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray-40)' }}
        >
          {index < breadcrumbs.length - 1 ? (
            <Link style={{ fontWeight: 500, color: 'var(--gray-80)' }} to={crumb.path}>
              {crumb.label}
            </Link>
          ) : (
            crumb.label
          )}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default NavCrubms;
