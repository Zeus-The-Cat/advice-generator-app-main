import { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    align-items:center;
    position: relative;
    background: #313a49;
    border-radius: 0.75rem;
    box-shadow:${(props)=>props.theme.boxShadow.dp4};
    padding:40px;
    padding-bottom:60px;
`
const AdviceHeader = styled.h3`
    text-align: center;
    letter-spacing: 3px;
    font-size:clamp(0.85rem,2vw,1rem);
    font-weight:600;
    color:#56fea9;
`
const Quote = styled.h2`
    font-weight:600;
    font-size:clamp(1.5rem,2vw,2rem);
    text-align:center;
    color: #f0f0f0;
    max-width:350px;
    margin-bottom: 40px;
    &::before{
        content:open-quote;
    }
    &::after{
        content:close-quote;
    }
`
const FetchButton = styled.button`
    position:absolute;
    bottom:-25px;
    left:calc(50%-25px);
    border-radius: 50%;
    background: #56fea9;
    padding:15px;
    border:none;
    display:flex;
    &:hover{
        cursor:pointer;
        box-shadow: 0px 2px 5px -3px #56fea9,
                    0px 3px 12px 1px #56fea9,
                    0px 2px 14px 2px #56fea9
    }
`

/**
 * Self contained card with a quote from Advice Slip
 */
export const AdviceCard = (): JSX.Element => {
    // Custom State
    const [trigger, setTrigger] = useState(false)
    const [number, setNumber] = useState(0)
    const [quote, setQuote] = useState("")

    useEffect(() =>{
        const getAPI = async() =>{
            try{
                await fetch('https://api.adviceslip.com/advice')
                .then(res => res.json())
                .then(data => {
                      console.log('Fetched')
                    // Parse Data from adviceslip
                    setNumber(data.slip.id)
                    setQuote(data.slip.advice)
                })
            }catch{
                console.log("Issue fetching and parsing Advice Data")
            }
        }
        getAPI()
    },[trigger,setNumber,setQuote])

  return (
    <Card>
        <AdviceHeader> ADVICE #{number||"---"}</AdviceHeader>
        <Quote>{quote?quote:"Grabbing Quote..."}</Quote>
        <Image src="/pattern-divider-desktop.svg" 
            alt="Visual Divider"
            height={15} width={350}></Image>
        <FetchButton onClick={()=>setTrigger(!trigger)}>
            <Image src="/icon-dice.svg" 
                alt="Click for new Quote"
                width="22" height="22"></Image>
        </FetchButton>
    </Card>
  )
}