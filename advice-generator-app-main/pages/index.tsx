import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.div`
  background: #313a49;
  border-radius: 10px;
  width:100px;
  height:100px;
  color: white;
  &:hover{
    background: red;
  }
`
const Quote = styled.h2`
  color: white;
  font-size: clamp(0.5rem,2vw,1rem);
  font-weight:500;
`
const Home: NextPage = () => {
  return (
    <Box>
      <Quote>I can fly too you know</Quote>
    </Box>
  )
}

export default Home
