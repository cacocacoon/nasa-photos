import PageContainer from 'components/PageContainer'
import { useAstronomyPictureInfos } from 'hooks/nasa'

export default function Home() {
    const { astronomyPictureInfos, loadingSpinner } = useAstronomyPictureInfos()
    console.log({ astronomyPictureInfos })
    return <PageContainer>Home{loadingSpinner}</PageContainer>
}
