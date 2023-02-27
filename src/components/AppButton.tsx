import { login } from "../services/login"
import { Button } from "@chakra-ui/react"

interface IButton {
    caption: string,
}

export const AppButton = ({ caption }: IButton) => {

    const buttonClick = () => {
        login()
    }


    return (
        <Button onClick={() => { buttonClick() }} fontWeight="bold" colorScheme='teal' size='sm' width='100%' marginTop='5px' marginBottom={2}>
            {caption}
        </Button>
    )
}