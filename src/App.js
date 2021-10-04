import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Container from './Container'
import Logo from './Logo'
import Grid from './components/Grid/Grid'

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          <Grid>
          </Grid>
          {/* Build your app here */}
        </Container>
      </>
    </ClientContext.Provider>
  );
}
