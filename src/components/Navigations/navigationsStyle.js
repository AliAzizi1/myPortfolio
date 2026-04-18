import styled from "styled-components";

export const lightTheme = {
  color: "var(--text-light)",
  colorActive: "var(--sub-text-2-light)",
  navigationbackgroundColor: "#e4e4e4bd",
  borderMunu: "1px solid var(--surface-highest-light)",
  menuHambergerColor: "white",
  ItemMenuNavigationsMobileColor: "#E4E4E44A",
  backgroundColor: 'transparent',
};

export const darkTheme = {
  color: "var(--text-dark)",
  colorActive: "var(--sub-text-2-dark)",
  navigationbackgroundColor: "#1d1d1d8e",
  borderMunu: "1px solid var(--surface-dark)",
  menuHambergerColor: "#262626",
  ItemMenuNavigationsMobileColor: "#313131",
  backgroundColor: '#181818ab',
};

export const Container = styled.div`
  width: 100%;
  direction: ${(props) => (props.en && "ltr") || "rtl"};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 220px;
  color: var(--text-dark);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(6px);
  background-color: ${(props) => props.theme.backgroundColor};

  @media (max-width: 1024px) {
    padding: 24px;
    width: 100%;
  }
`;
export const LogoNavigation = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const MenuNavigations = styled.ul`
  background-color: ${(props) => props.theme.navigationbackgroundColor};
  padding: 12px 32px;
  border-radius: 999px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.borderMunu};

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ItemMenuNavigations = styled.li`
  color: ${(props) =>
    (props.active && props.theme.color) || props.theme.colorActive};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color};
    transform: scale(1.1);
  }
`;

export const BrandName = styled.span`
  color: ${(props) => props.theme.color};
`;

export const MenuHamberger = styled.div`
  width: 220px;
  background-color: ${(props) => props.theme.menuHambergerColor};
  position: absolute;
  top: 80%;
  right: ${(props) => props.en && "24px"};
  left: ${(props) => props.fa && "24px"};
  z-index: 100;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: ${(props) => props.theme.borderMunu};
`;

export const ItemMenuNavigationsMobile = styled.li`
  color: ${(props) =>
    (props.active && props.theme.color) || props.theme.colorActive};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.ItemMenuNavigationsMobileColor};
  border-radius: 12px;
`;
