import styled from 'styled-components';
import HeroImgSrc from 'assets/Images/hero-img.png';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  height: 640px;
  background-image: url(${HeroImgSrc});
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export { Header, HeaderWrapper };
