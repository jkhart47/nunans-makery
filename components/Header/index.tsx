//components/Header/index.tsx
import { HeaderContainer, TitleContainer, IconContainer } from "./styles";
import { Menu, ChevronLeft } from "@styled-icons/material";



// type HeaderProps = {
//  isOpened: boolean,
//  toggleDrawer: () => void,
// };

// <IconContainer onClick={toggleDrawer}>
// {isOpened ? <ChevronLeft /> : <Menu />}
// </IconContainer>
// isOpened, toggleDrawer }: HeaderProps

export default function Header() {
  
  return (
    <HeaderContainer>
      <TitleContainer>Nunan&apos;'s Makery</TitleContainer>
    </HeaderContainer>
  );

}
