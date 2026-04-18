import styled from "styled-components";

export const lightTheme = {
  color: "var(--text-light)",
  background:
    "linear-gradient(324deg, rgba(255,255,255,1) 0%, rgba(219,219,219,1) 100%)",
  HeroTitleColor: "#1E1E1E",
  HeroDecColor: "var(--sub-text-2-light)",
  colorProjectsCompleted: "#1E1E1E",
  tabHover: "#00000007",
  cardBack: "white",
  border: "1px solid #eeeded",
  borderColorTag: "1px solid #00000015",
  borderColorTagActive: "2px solid #0015ff",
  cardPhotoBack: "#f9f9f9",
};

export const darkTheme = {
  color: "var(--text-dark)",
  background: "#181818",
  HeroTitleColor: "white",
  HeroDecColor: "var(--sub-text-2-dark)",
  colorProjectsCompleted: "white",
  tabHover: "#202020",
  cardBack: "#202020",
  border: "1px solid var(--surface-dark)",
  borderColorTag: "1px solid rgba(255, 255, 255, 0.05)",
  borderColorTagActive: "2px solid #4b5aff",
  cardPhotoBack: "#2d2d2d",
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;

export const Hero = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  direction: ${(props) => (props.en ? "ltr" : "rtl")};

  @media (max-width: 700px) {
    width: 85%;
    margin-top: 60px;
  }
`;

export const TitleHero = styled.span`
  color: ${(props) => props.theme.HeroTitleColor};
  text-align: center;
  font-size: 24px;
  font-weight: 650;
  position: relative;
`;

export const BadgeHero = styled.span`
  position: absolute;
  bottom: 105%;
  background-color: #564bc50f;
  color: #756be1;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 12px;
  border-radius: ${(props) => (props.fa ? "8px 8px 0 8px" : "8px 8px 8px 0")};
`;

export const DecHero = styled.span`
  width: 80%;
  color: ${(props) => props.theme.HeroDecColor};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
`;

export const ProjectsCompleted = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.borderTop};

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ProjectsCompletedLogo = styled.div`
  margin: 0 -10px;
  border: 3px solid ${(props) => props.borderColor};
  width: 42px;
  height: 42px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
`;

export const ProjectsCompletedText = styled.div`
  color: white;
  font-size: 15px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;

export const AboutMe = styled.div`
  padding: 24px;
  margin: 0 240px;
  margin-top: 42px;

  @media (max-width: 700px) {
    margin: 0;
    margin-top: 32px;
  }
`;

export const AboutMeTitle = styled.span`
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.color};
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 6px 10px;
    height: 8px;
    width: 70px;
    background: #ffbf009a;
    z-index: -1;
  }

  & {
    isolation: isolate;
  }
`;

export const AboutMeContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AboutMeContentText = styled.div`
  padding: 12px;
  width: 40%;
  font-size: 16px;
  text-align: ${(props) => (props.fa ? "right" : "left")};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 56px;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const AboutMeContentTagBox = styled.div`
  padding: 6px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.en ? "left" : "right")};
  flex-wrap: wrap;
  gap: 12px;
`;

export const AboutMeContentTag = styled.span`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 6px;
  border-radius: 6px;
  color: ${(props) => props.theme.color};
  background-color: transparent;
  border: ${(props) => props.theme.borderColorTag};
  font-size: 12px;
  direction: ltr;
`;

export const MyPortfolio = styled.div`
  padding: 24px;
  padding: 0 270px;
  margin-top: 42px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 24px;
  }
`;

export const MyPortfolioTitle = styled.span`
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.color};
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 6px 24px;
    height: 8px;
    width: 100px;
    background: #ffbf009a;
    z-index: -1;
  }

  & {
    isolation: isolate;
  }
`;

export const MyPortfolioCategory = styled.div `
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  overflow: auto;
`

export const CategoryTag = styled.div `
  border-bottom: ${(props) =>  
    props.active ? props.theme.borderColorTagActive : props.theme.borderColorTag
  };
  color: ${(props) => props.theme.color};
  padding: 4px 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;

  &: hover{
    background-color: ${(props) => props.theme.tabHover};
  }
`


export const MyPortfolioContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 42px;
  margin-top: 24px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const MyPortfolioCard = styled.div`
  background-color: ${(props) => props.theme.cardBack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: ${(props) => props.theme.color};

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const MyPortfolioCardHeader = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const MyPortfolioCardHeaderLinkBox = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  background-color: ${(props) => props.theme.cardPhotoBack};
  border-radius: 990px;
  font-size: 12px;
`;

export const MyPortfolioCardPhoto = styled.div`
  width: 100%;
  height: 100%;
  padding: 42px 42px 0 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.cardPhotoBack};
  border-radius: 8px;

  @media (max-width: 700px) {
    padding: 32px 32px 0 32px;
  }
`;

export const MyPortfolioLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const ContactUs = styled.div`
  padding: 24px;
  padding: 0 64px;
  margin-top: 42px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 24px;
    margin-top: 0;
  }
`;

export const ContactUsTitle = styled.span`
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.color};
  text-align: center;
  margin-bottom: 32px;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 6px 20px;
    height: 8px;
    width: 70px;
    background: #ffbf009a;
    z-index: -1;
  }

  & {
    isolation: isolate;
  }
`;

export const ContactUsContent = styled.div`
  width: 95%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  direction: ${(props) => (props.en ? "ltr" : "rtl")};
  border: ${(props) => props.theme.borderColorTag};
  color: ${(props) => props.theme.color};
  border-radius: 12px;
  padding: 24px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 18px;
    text-align: center;
  }
`;

export const ContactUsSocialBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const ContactUsSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.borderColorTag};
  color: ${(props) => props.theme.color};
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0.7;

  &:hover {
    scale: 1.3;
    opacity: 1;
  }

  @media (max-width: 700px) {
    padding: 12px;
    opacity: 1;
  }
`;

export const CursorBox = styled.div`
  position: absolute;
  top: 280px;
  left: 55%;
  z-index: 1000;
  animation-name: cursor-animation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes cursor-animation {
    0% {
      top: 20%;
      left: 50%;
    }
    40% {
      top: 25%;
      left: 60%;
    }
    80% {
      top: 40%;
      left: 30%;
    }
    100% {
      top: 20%;
      left: 50%;
    }
  }
`;
