import styled from 'styled-components'
import NavBar from '@bit/egiray.erdemorbit.nav-bar'

const Title = styled.h1`
  font-size:20px;
  color:blue;
`

const Home = () => (
  <div>
    <NavBar></NavBar>
    <Title>Welcome to Next.js!</Title>
  </div>
  
)


export default Home