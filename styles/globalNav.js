// styles/globalNav.js
import css from 'styled-jsx/css';

  export default css.globalNav`
  
    nav {
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e91e63;
      box-shadow: 0 5px 10px #ccc;
    }
    
    /* Basic styles for nav links */
    nav a {
      display: flex;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
      height: 100%;
      text-transform: uppercase;
      text-decoration: none;
    }
    
    /* Specific styles for non-active links */
    .non-active {
      color: white;
    } 
      
    /* Specific styles for active links */
    .active {
      color: black;
      background: orange;
    }
  
`;