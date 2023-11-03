import { Title, Text, Container } from '@mantine/core';
import classes from './NotFoundTitle.module.css';

export function EmptyState() {
  return (
    <Container data-testid="empty-state" className={classes.root}>
      <div className={classes.label}>ATTENZIONE!</div>
      <Title className={classes.title}>Tabella vuota</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Purtroppo non ci sono utenti disponibili al momento. Forse è un giorno di vacanza. Forse
        sono solo pigri.
      </Text>
    </Container>
  );
}
