import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Container from './Container'
import Logo from './Logo'
import styles from './Logo.module.css';
import Grid from './components/Grid/Grid'

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});


export default function App() {
  return (
    <ClientContext.Provider value={client}>
        <Container>
          <Logo className={styles.logo} />
          <Grid>
          </Grid>
        </Container>
    </ClientContext.Provider>
  );
}
