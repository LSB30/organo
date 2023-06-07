import banner from "../../assets/banner.png";
import { Banner } from "./styles";
function Header() {
  return (
    <Banner>
      <img src={banner} alt="banner da pagina" />
    </Banner>
  );
}

export default Header;
