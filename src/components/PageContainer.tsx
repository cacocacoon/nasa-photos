import { Flex } from '@chakra-ui/react'
type PageContainerProps = {
    children?: React.ReactNode
}
export default function PageContainer(props: PageContainerProps) {
    const { children } = props

    return (
        <Flex as="main">
            <Flex flex={1}>{children}</Flex>
        </Flex>
    )
}
