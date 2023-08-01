import ContactSection from './components/ContactSection';
import AboutMeSection from './components/AboutMeSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import HomeSection from './components/HomeSection';
import EducationSection from './components/EducationSection';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function App({ to }) {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <div className='relative'>
     
      {/* <LeftSideBar/> */}
      {/* <div className='bg-blue-900 blur-3xl w-36 h-36  fixed right-16 top-1/2 '></div>
      <div className='bg-pink-600 blur-3xl w-36 h-36  fixed left-16 top-1/2 '></div> */}
      <main className='absolute top-0 right-0 left-0 '>

        <HomeSection />
        <AboutMeSection />
        <EducationSection />
        {/* <ChosseMeSection/> */}
        <SkillSection />
        <ProjectSection />
        <ContactSection />

      </main>
      {
        // showScroll && <div className='fixed bottom-16 md:bottom-10 right-5 md:right-8'>
        //   <button className='bg-white border-2 border-[#14A850] rounded-full p-2' onClick={scrollToTop}><FaArrowUpLong /></button>
        // </div>
      }
    </div>
  )
}

export default App
