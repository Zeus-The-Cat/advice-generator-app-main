import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

// Custom Components
import { AdviceCard } from '../components/AdviceCard'

const Container = styled.div`
  width:100%;
  margin:0px;
  height:100vh;
  background: #f0f0f0;
  padding-left:50px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`
const Squiggle = styled.div`
  align-self:flex-end
`
const MainBlock = styled.div`
  background: #202632;
  width:90vw;
  height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: ${(props)=>props.theme.boxShadow.dp1}
`
const LowerContainer = styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  width:100%;
  padding-right:8vw;
`
const Home: NextPage = () => {
  return (
    <Container>
      <Image src="/L-shape_90x90.svg"
        alt="L shaped design element"
        width="90" height="90"
        ></Image>
      <Squiggle>
        <Image src="/squiggle_180x45.svg"
          alt="Squiggle Retro bus shape"
          width="180" height="45"
          ></Image>
        </Squiggle>
      <MainBlock>
        <AdviceCard ></AdviceCard>
      </MainBlock>
      <LowerContainer>
        <Image src="/dots_90x90.svg"
          alt="design element, 12 dots in a grid"
          width="180" height="180"
          ></Image>
        <Image src="/Ring_300x100.svg"
          alt="design element, half of a ring"
          width="300" height="100"
          ></Image>
      </LowerContainer>
    </Container>
  )
}

export default Home
