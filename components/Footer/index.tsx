//components/Footer/index.tsx
import React from "react";
import Link from "next/link";

import styled from 'styled-components'
//import styles from "./Footer.module.css" ;

const BottomBar = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #009999;
`;

const Footer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  padding: 10px;
  font-size: 16px;
  line-height: 1.33;
  color: #fff;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

  // This creates a custom component that wraps an <a> tag
  const BlackLink = styled.a`
  color: black; `

function FooterApp() {    
	return (
    <BottomBar>
    <Footer>
    <Policy>
    <PolicyRow>Copyright &copy; {new Date().getFullYear()} Nunan's Makery</PolicyRow>
  </Policy> 

  <Link href="/disclaimer" passHref>
    <BlackLink>Legal Notice</BlackLink>
  </Link>

  </Footer>
  </BottomBar>

	);
}

export default FooterApp
	
