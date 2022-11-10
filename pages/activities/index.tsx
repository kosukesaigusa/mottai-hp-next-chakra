import { Box } from '@chakra-ui/react'
import MainVisual from '../../components/MainVisual'
import SectionContainer from '../../components/top-page/SectionContainer'
import ContentContainer from '../../components/ContentContainer'
import TrapOwner from '../../components/activities-page/TrapOwner'
import MottaiNight from '../../components/activities-page/MottaiNight'

export default function AboutPage() {
  return (
    <Box>
      <MainVisual title={'MOTTAI の活動'} />
      <ContentContainer>
        <SectionContainer title={'罠オーナー制度'}>
          <TrapOwner />
        </SectionContainer>
        <SectionContainer title={'モッタイNight'}>
          <MottaiNight />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}