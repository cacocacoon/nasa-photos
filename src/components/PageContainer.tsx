import { Flex } from '@chakra-ui/react'
import SideBar from '@/components/Sidebar'
type PageContainerProps = {
    children?: React.ReactNode
}
export default function PageContainer(props: PageContainerProps) {
    const { children } = props

    return (
        <Flex as="main">
            <SideBar />
            <Flex flex={1}>{children}</Flex>
        </Flex>
    )
}
