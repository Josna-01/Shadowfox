import React, {useEffect} from 'react';
import '../App.css'; 
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{
          backgroundImage: `url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/m-chinnaswamy-stadium-in-bengaluru-214624648-16x9.jpg?VersionId=OMbIjBeLKB8gL9gT28wXy_OHA5tfHMRI')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
          minHeight: '100vh',
          position: 'fixed', 
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1, // Hero background stays behind the content
        }}
      >
        {/* Black transparent overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>
      </section>

      {/* Scrollable Content Section */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Content */}
        <motion.div 
          className="hero-content" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', padding: '20px', paddingTop: '80px' }}
        >
          <h1 className='hero-title'>Welcome to Royal Challengers Bengaluru</h1>
          <p className='hero-tagline'>#PLAY BOLD</p>
        </motion.div>

        {/* About Section */}
        <section className="home-about" style={{ position: 'relative', padding: '40px 20px' }}>
          {/* Blur Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              zIndex: 1,
              borderRadius: '10px',
            }}
          />
          <div style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
            <div style={{
              backgroundColor: 'rgba(227, 24, 24, 0.5)',
              backdropFilter: 'blur(6px)',
              borderRadius: '10px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              padding: '30px',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}>
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  color: 'white',
                  fontSize: '2.5rem',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                About RCB
              </motion.h2>
              <p style={{
                color: '#fff',
                fontSize: '20px',
                textShadow: '2px 2px 4px rgba(159, 157, 96, 0.5)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                The Royal Challengers Bangalore is a franchise cricket team based in Bangalore, India. 
                Royal Challengers Bengaluru, formerly known as Royal Challengers Bangalore, commonly known as RCB, is a professional franchise cricket team based in Bengaluru, Karnataka, competing in the Indian Premier League. 
                Founded in 2008 by United Spirits, currently managed by Prathamesh Mishra, the team is named after the liquor brand, Royal Challenge. 
                The M. Chinnaswamy Stadium in Bengaluru is their home ground.
              </p>
            </div>
          </div>
        </section>

{/* Upcoming Matches Section */}
<section className="home-upcoming-matches" style={{ position: 'relative', padding: '40px 20px' }}>
  {/* Blur Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 1,
      borderRadius: '10px',
    }}
  />
  <div style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
    <div className="upcoming-matches-box">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            color: 'white',
            fontSize: '2.5rem',
            textAlign: 'start',
            marginBottom: '20px',
            paddingLeft: '20px'
          }}
        >
          Upcoming Matches
        </motion.h2>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          fontSize: '20px',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '1.8',
          width: '100%',  // Ensures that the list takes up the full width
        }}>
          {/* Match 1 */}
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
            {/* Date on the left */}
            <div style={{ fontSize: '18px', marginRight: '30px', minWidth: '120px' }}>
              9th May 2025
            </div>

            {/* Teams and logos section */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {/* RCB Logo and Team Name */}
              <div style={{ textAlign: 'center', marginRight: '30px' }}>
                <img src="/images/rcb_logo.png" alt="RCB Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>RCB</div>
              </div>

              {/* VS Divider */}
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>vs</div>

              {/* LSG Logo and Team Name */}
              <div style={{ textAlign: 'center', marginLeft: '30px' }}>
                <img src="/images/lsg_logo.png" alt="LSG Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>LSG</div>
              </div>
            </div>
          </li>

          {/* Match 2 */}
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
            {/* Date on the left */}
            <div style={{ fontSize: '18px', marginRight: '30px', minWidth: '120px' }}>
              13th May 2025
            </div>

            {/* Teams and logos section */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {/* RCB Logo and Team Name */}
              <div style={{ textAlign: 'center', marginRight: '30px' }}>
                <img src="/images/rcb_logo.png" alt="RCB Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>RCB</div>
              </div>

              {/* VS Divider */}
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>vs</div>

              {/* SRH Logo and Team Name */}
              <div style={{ textAlign: 'center', marginLeft: '30px' }}>
                <img src="/images/srh_logo.png" alt="SRH Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>SRH</div>
              </div>
            </div>
          </li>

          {/* Match 3 */}
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
            {/* Date on the left */}
            <div style={{ fontSize: '18px', marginRight: '30px', minWidth: '120px' }}>
              17th May 2025
            </div>

            {/* Teams and logos section */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {/* RCB Logo and Team Name */}
              <div style={{ textAlign: 'center', marginRight: '30px' }}>
                <img src="/images/rcb_logo.png" alt="RCB Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>RCB</div>
              </div>

              {/* VS Divider */}
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>vs</div>

              {/* KKR Logo and Team Name */}
              <div style={{ textAlign: 'center', marginLeft: '30px' }}>
                <img src="/images/kkr_logo.png" alt="KKR Logo" style={{ width: '50px' }} />
                <div style={{ marginTop: '5px' }}>KKR</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}

export default Home;
