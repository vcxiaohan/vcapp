// 轮播图
import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'antd-mobile'
import {
  CarouselItem
} from '@/model/Home'
import './index.scss'

export interface Props {
  data: CarouselItem[]
}

const VCarousel: React.FC<Props> = (props) => {

  return (
    <div className='VCarousel'>
      <Carousel
        autoplay
        autoplayInterval={5000}
        infinite
      >
        {
          props.data.map(item => (
            <Link key={item.id} to={item.link}>
              <img src={item.src} />
            </Link>
          ))
        }
      </Carousel>
    </div>
  );
}

VCarousel.defaultProps = {
  data: []
}

VCarousel.displayName = 'VCarousel'

export default VCarousel;
