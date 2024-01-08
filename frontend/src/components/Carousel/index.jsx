import React, { useState } from 'react';
import './styles.scss';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMemo } from 'react';

export default function CarouselItem({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photoList = useMemo(() => (photos.map((photo, index) =>  (
    <div key={index} className='carousel-content'>
      <img src={photo} alt="" className='carousel-content-photo' />
    </div>
  ))), [photos]);

  const leftArrow = useMemo(() =>(
    <LeftOutlined />
  ),[])

  const rightArrow = useMemo(() =>(
    <RightOutlined />
  ),[])


  const goToPrevSlide = () => {
    const newIndex = (currentSlide - 1 + photoList.length) % photoList.length;
    setCurrentSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlide + 1) % photoList.length;
    setCurrentSlide(newIndex);
  };



  return (
    <div className='carousel'>
      {photoList[currentSlide]}
      {photoList.length > 1 && (
        <div className='carousel-arrows'>
          <div className='arrow-prev' onClick={goToPrevSlide}>
            {leftArrow}
          </div>
          <div className='arrow-next' onClick={goToNextSlide}>
           {rightArrow}
          </div>
        </div>
      )}
      {photoList.length > 1 && (
        <div className='carousel-dots'>
          {currentSlide + 1}/{photoList.length}
        </div>
      )}
    </div>
  );
}
