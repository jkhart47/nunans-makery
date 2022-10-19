// components/NavBar.js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Navigation Bar
// This component will be used on all pages
const NavBar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav>

            <Link href="/">
                <a className={currentRoute === "/" ? "active" : "non-active"}>HOME</a>
            </Link>

            <Link href="/about">
                <a className={currentRoute === "/about" ? "active" : "non-active"}>ABOUT</a>
            </Link>            
            
            <Link href="/sale">
                <a className={currentRoute === "/sale" ? "active" : "non-active"}>SALE</a>
            </Link>

            <Link href="/contact">
              <a className={currentRoute === "/contact" ? "active" : "non-active"}>CONTACT US</a>
            </Link>
            
            {/* Style the nav bar */}
            {/* This example uses Styled JSX but you can use other approach if you like */}
            <style jsx>{`
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
            `}</style>
        </nav> 
    );

};

export default NavBar;