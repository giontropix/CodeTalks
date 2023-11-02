import { Overlay, Container, Title, Button, Text, Anchor } from '@mantine/core';
import { FormattedMessage } from 'react-intl';
import classes from './Dashboard.module.css';

const Dashboard = () => (
  <div className={classes.hero}>
    <Overlay
      data-testid="dashboard-test"
      gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
      opacity={1}
      zIndex={0}
    />
    <Container className={classes.container}>
      <Title className={classes.title}>
        <FormattedMessage id="dashboard.title" />
      </Title>
      <Text className={classes.description} size="xl" mt="xl">
        <FormattedMessage
          id="dashboard.abstract"
          values={{ br: <br />, strong: (children) => <strong>{children}</strong> }}
        />
      </Text>

      <Anchor href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank">
        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          <FormattedMessage id="dashboard.button" />
        </Button>
      </Anchor>
    </Container>
  </div>
);

export default Dashboard;
