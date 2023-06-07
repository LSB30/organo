import { Container, ListSocial, SocialItems} from "./styles"
import logo from "../../assets/logo.png"
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png"
import ig from "../../assets/ig.png"


export default function Footer () {
  return (
    <Container> 
      <ListSocial>
    <SocialItems>
      <img src={fb} alt="logo facebook" />
    </SocialItems>
    <SocialItems>
      <img src={tw} alt="logo twitter" />
    </SocialItems>

    <SocialItems>
      <img src={ig} alt="logo instagram" />
    </SocialItems>
      </ListSocial>

      <img src={logo} alt="logo do site ORGANO" />

      <p>Desenvolvido por LS30🥶.</p>
    </Container>
  )
}