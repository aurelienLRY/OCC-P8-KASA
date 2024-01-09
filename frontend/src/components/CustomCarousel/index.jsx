import React, { useState , useMemo} from 'react';
import PropTypes from 'prop-types'
import './styles.scss';
//components tiers
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


/**
 * Renders a custom Carousel component with the given photos
 * @param {string[]} photos - an array of photo URLs
 */
export default function CustomCarousel({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Creates a list of photo components based on the given photos
   */
  const photoList = useMemo(() => (photos.map((photo, index) =>  (
    <div key={index} className='carousel-content'>
      <img src={photo} alt="" className='carousel-content-photo' />
    </div>
  ))), [photos]);

  /**
   * Creates the left arrow component
   */
  const leftArrow = useMemo(() =>(
    <LeftOutlined />
  ),[])

  /**
   * Creates the right arrow component
   */
  const rightArrow = useMemo(() =>(
    <RightOutlined />
  ),[])


  /**
   * Navigates to the previous slide
   */
  const goToPrevSlide = () => {
    const newIndex = (currentSlide - 1 + photoList.length) % photoList.length;
    setCurrentSlide(newIndex);
  };

  /**
   * Navigates to the next slide
   */
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

CustomCarousel.propTypes = {
  photos: PropTypes.object.isRequired
}