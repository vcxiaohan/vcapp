import React from 'react';
import VCarousel from '@/pages/Home/components/VCarousel'
import VQuickLink from '@/pages/Home/components/VQuickLink'
import VNearLottery from '@/pages/Home/components/VNearLottery'
import VPastPrize from '@/pages/Home/components/VPastPrize'
import HomeApi from '@/api/HomeApi'
import './index.scss'

export interface Props {
}

const defaultVCarouselData = [{ id: '', src: '', link: '' }]
const defaultVQuickLinkData = [{ id: '', src: '', link: '', title: '' }]

const Home: React.FC<Props> = () => {
  const [VCarouselData, setVCarouselData] = React.useState(defaultVCarouselData)
  const [VQuickLinkData, setVQuickLinkData] = React.useState(defaultVQuickLinkData)

  React.useEffect(() => {
    (async () => {
      setVCarouselData((await HomeApi.getCarouselData({ a: 1, b: 2 })).list)
      setVQuickLinkData((await HomeApi.getQuickLink({ a: 1, b: 2 })).list)
    })()
  }, [])

  return (
    <div className='Home'>
      <VCarousel data={VCarouselData}></VCarousel>
      <VQuickLink data={VQuickLinkData}></VQuickLink>
      <VNearLottery data={VQuickLinkData}></VNearLottery>
      <VPastPrize data={VQuickLinkData}></VPastPrize>
    </div>
  );
}

export default Home;
