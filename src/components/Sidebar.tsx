import { Flex } from '@chakra-ui/react'

export default function SideBar() {
    return (
        <Flex
            as="nav"
            position="relative"
            left={0}
            width="300px"
            height="100vh"
            backgroundColor="black"
        >
            sidebar
        </Flex>
    )
}
