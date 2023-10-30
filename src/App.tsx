import './styles/index.css';
import { MantineProvider } from '@mantine/core';
import { IntlProvider } from 'react-intl';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Router } from './Router';
import { theme } from './theme';
import { Locale, translations } from './translations';

type Props = {
  locale: Locale;
};

export default function App({ locale }: Props) {
  const messages = translations[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <Notifications position="top-right" />
          <Router />
        </ModalsProvider>
      </MantineProvider>
    </IntlProvider>
  );
}
