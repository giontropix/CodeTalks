import { Icon } from '@tabler/icons-react';
import { TranslationId } from '../translations';

export type MenuItem = {
  translationId: TranslationId;
  Icon: Icon;
  path: string;
  dataTestId: string;
};
