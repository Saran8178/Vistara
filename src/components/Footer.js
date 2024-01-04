import React from 'react';
import '../Assests/CSS/Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://3.bp.blogspot.com/-714l62jInP0/VfhHWnWB-4I/AAAAAAAAZMg/xZ8ba1mmy5w/s1600/facebook-icon-960x1024.jpg" alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg" alt="Google" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2019/instagram.jpg" alt="Instagram" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
      <p>&copy; 2023 Vistara Furnitures. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
