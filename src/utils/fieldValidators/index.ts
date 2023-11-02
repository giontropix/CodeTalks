import { IntlShape } from 'react-intl';
import { REGEXP_MAIL } from '../regex';

export const email = (intl: IntlShape) => ({
  pattern: {
    value: REGEXP_MAIL,
    message: intl.formatMessage({ id: 'field_error.error' }),
  },
});

export const required = (intl: IntlShape) => ({
  required: intl.formatMessage({ id: 'field_error.required' }),
});
