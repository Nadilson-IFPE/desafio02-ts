import { Box, Center, Input } from "@chakra-ui/react"
import { AppButton } from "./AppButton"

interface ICard {
  id: number,
  paragraph: string,
  details: string
  userName?: string
}

export const Card = ({ id, paragraph, details, userName }: ICard) => {
  return (
    <div id={`${id}`}>
      {/* <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p> */}
      <Box minHeight='100vh' backgroundColor='#bad4aa' padding='25px'>
        <Box backgroundColor='#ebf5df' borderRadius='25px' padding='15px' >
          <Center marginBottom={5} fontWeight="bold">
            <h1>{paragraph}</h1>
          </Center>
          <Input placeholder="Informe seu e-mail..." borderColor="#bad4aa" marginBottom={5} />
          <Input type={'password'} placeholder="Informe sua senha..." borderColor="#bad4aa" marginBottom={5} />
          <Center>
            <AppButton caption={details} />
          </Center>
        </Box>
      </Box>
    </div>
  )
}