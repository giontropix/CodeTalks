import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../../../types';
import classes from './index.module.scss';

type Props = MenuItem;

const Item = ({ path, translationId, Icon }: Props) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      isActive ? `${classes.link} ${classes['link--active']}` : classes.link
    }
  >
    <span className={classes.link__icon}>
      <Icon size={24} stroke={1.5} />
    </span>

    <span className={classes.link__title}>
      <FormattedMessage id={translationId} />
    </span>
  </NavLink>
);

export default Item;
