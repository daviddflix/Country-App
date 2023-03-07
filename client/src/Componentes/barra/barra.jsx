import { SearchBar } from "../SearchBar/searchbar";
import { useContext, useState } from "react";
import {
  Buscador,
  Close,
  ContainerRutas,
  Link,
  LinkLogo,
  Logo,
  MainContainer,
  Menu,
  MobileIcon,
  Wrapper,
  FilterIcon,
  ActivityIcon,
  HomeIcon
} from "./styles";
import FilterContext from "../Context/filterContext";


export function Nav() {
  const { filter, setFilter } = useContext(FilterContext);
  const [show, setShow] = useState(false);

  const showRoutes = () => {
    setShow(!show);
  };

  return (
    <MainContainer>
      <Wrapper>
        <LinkLogo to="/">
          <Logo />
        </LinkLogo>

        <MobileIcon onClick={showRoutes} />

        <Menu open={show}>
          <Close onClick={showRoutes} />

          <ContainerRutas>
            <HomeIcon/>
            <Link to="/home">Home</Link>
          </ContainerRutas>
        

          <ContainerRutas>
            <ActivityIcon/>
            <Link to="/form" exact>
              Create Activity
            </Link>
          </ContainerRutas>

          </Menu>
        <Buscador>
          <SearchBar />
        </Buscador>

        <FilterIcon onClick={() => setFilter(!filter)} />
      </Wrapper>
    </MainContainer>
  );
}
