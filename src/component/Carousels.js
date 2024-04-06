import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  const [index, setIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState('60vh');
  const [captionFontSize, setCaptionFontSize] = useState('3rem');

  const handleResize = () => {
    const newHeight = window.innerHeight * 0.6; // 60% of viewport height
    setCarouselHeight(`${newHeight}px`);
    // Adjust font size based on screen width
    if (window.innerWidth < 768) {
      setCaptionFontSize('2rem'); // For small devices
    } else {
      setCaptionFontSize('3rem'); // For larger devices
    }
  };

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize); // Listen for resize events
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []); // Run only on mount and unmount

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="https://wallpapercave.com/wp/wp7298413.jpg"
          style={{ height: carouselHeight, width: '100%', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption>
          <h3 className="bordered-text" style={{ fontFamily: 'Racing Sans One', fontSize: captionFontSize }}>
            Make yourself stronger than your excuses.
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114163.jpg"
          style={{ height: carouselHeight, width: '100%', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption>
          <h3 className="bordered-text" style={{ fontFamily: 'Racing Sans One', fontSize: captionFontSize }}>
            Power, perseverance, and discipline.
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://png.pngtree.com/background/20230528/original/pngtree-dark-gym-with-equipments-picture-image_2773570.jpg"
          style={{ height: carouselHeight, width: '100%', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption>
          <h3 className="bordered-text" style={{ fontFamily: 'Racing Sans One', fontSize: captionFontSize }}>
            Decide. Commit. Succeed.
          </h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
