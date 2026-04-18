import { useContext, useEffect, useRef, useState } from "react"
import { Container, LogoNavigation, MenuNavigations, ItemMenuNavigations, BrandName, lightTheme, darkTheme, MenuHamberger, ItemMenuNavigationsMobile } from "./navigationsStyle"
import { ThemeContext } from "../../context/Theme"
import { LanguageContext } from "../../context/Language"
import { ThemeProvider } from "styled-components"
import { ButtonPrimarySmall, ButtonStrokeSmall, lightBtn, darkBtn } from "../mainComponents/button"


const Navigations = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const { language, toggleLanguage } = useContext(LanguageContext)

    const hambergerMenuRef = useRef()


    const [width, setWidth] = useState(window.innerWidth);
    const [isHambergerMenu, setIsHambergerMenu] = useState(false);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Container style={{ fontFamily: language === 'en' ? "poppins" : "peyda" }} en={language === "en"} fa={language === "fa"}>


                    {isHambergerMenu && (
                        <MenuHamberger ref={hambergerMenuRef} en={language === "en"} fa={language === "fa"}>
                            <ItemMenuNavigationsMobile> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#home">Home</a> : <a onClick={() => setIsHambergerMenu(false)} style={{color: "inherit", textDecoration: "none"}} href="#home">خانه</a>}</ItemMenuNavigationsMobile>
                            <ItemMenuNavigationsMobile> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#aboutMe">About Me</a> : <a onClick={() => setIsHambergerMenu(false)} style={{color: "inherit", textDecoration: "none"}} href="#aboutMe">درباره من</a>}</ItemMenuNavigationsMobile>
                            <ItemMenuNavigationsMobile> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#portfolio">Portfolio</a> : <a onClick={() => setIsHambergerMenu(false)} style={{color: "inherit", textDecoration: "none"}} href="#portfolio">نمونه کارها</a>}</ItemMenuNavigationsMobile>
                            <ItemMenuNavigationsMobile> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#contactUs">Contact us</a> : <a onClick={() => setIsHambergerMenu(false)} style={{color: "inherit", textDecoration: "none"}} href="#contactUs">تماس با من</a>}</ItemMenuNavigationsMobile>
                        </MenuHamberger>
                    )}

                    <LogoNavigation>
                        {isDarkMode ? (
                            <svg width="32" height="32" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 36C0 21.0011 0 13.5016 3.81966 8.2443C5.05325 6.5464 6.5464 5.05325 8.2443 3.81966C13.5016 0 21.0011 0 36 0V0C58.4984 0 69.7476 0 77.6336 5.72949C80.1804 7.57988 82.4201 9.8196 84.2705 12.3664C90 20.2524 90 31.5016 90 54V54C90 68.9989 90 76.4984 86.1803 81.7557C84.9467 83.4536 83.4536 84.9467 81.7557 86.1803C76.4984 90 68.9989 90 54 90V90C31.5016 90 20.2524 90 12.3664 84.2705C9.8196 82.4201 7.57988 80.1804 5.72949 77.6336C0 69.7476 0 58.4984 0 36V36Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0119 37.6732C27.2801 36.5571 29.2628 36.6267 30.4404 37.8287C38.7454 46.3057 49.8493 51.8485 61.9226 53.5438L70.3847 54.732C72.0966 54.9724 69.7198 56.0474 69.4662 57.67C69.2126 59.2926 71.1782 60.8484 69.4662 60.608L61.0042 59.4198C47.5218 57.5267 35.1221 51.337 25.8479 41.8706C24.6703 40.6686 24.7437 38.7894 26.0119 37.6732Z" fill="#1E1E1E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5488 63.474C24.7865 65.4469 26.2424 67.5702 28.3574 67.5702V67.5702C29.6139 67.5702 30.7383 66.79 31.178 65.6129L35.6101 53.7485C36.0765 52.5001 35.5916 51.1012 34.4857 50.3576V50.3576C32.9387 49.3172 30.7847 49.9235 30.1127 51.6626L25.5488 63.474ZM35.2964 38.2472C34.832 39.4489 35.1709 40.8196 36.1838 41.6156V41.6156C37.7276 42.8287 39.9564 42.1137 40.6435 40.2745L45.632 26.9206C45.6739 26.8083 45.7813 26.7338 45.9012 26.7338V26.7338C46.0211 26.7338 46.1284 26.8083 46.1704 26.9206L54.6602 49.6474C55.0138 50.594 55.793 51.3169 56.7752 51.5544V51.5544C59.1061 52.118 60.9718 49.8047 60.1074 47.5678L50.2417 22.0353C49.5487 20.2418 47.8239 19.0592 45.9012 19.0592V19.0592C43.9784 19.0592 42.2536 20.2418 41.5606 22.0353L35.2964 38.2472ZM66.0336 62.9047C65.5852 61.7443 64.5435 60.9176 63.3115 60.7446L60.8511 60.3992V60.3992C59.8267 60.2553 58.9965 61.2553 59.3585 62.2244L60.6243 65.6129C61.064 66.79 62.1884 67.5702 63.4449 67.5702V67.5702C65.56 67.5702 67.0159 65.4469 66.2536 63.474L66.0336 62.9047Z" fill="#1E1E1E" />
                            </svg>
                        ) : (
                            <svg width="32" height="32" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 36C0 21.0011 0 13.5016 3.81966 8.2443C5.05325 6.5464 6.5464 5.05325 8.2443 3.81966C13.5016 0 21.0011 0 36 0V0C58.4984 0 69.7476 0 77.6336 5.72949C80.1804 7.57988 82.4201 9.8196 84.2705 12.3664C90 20.2524 90 31.5016 90 54V54C90 68.9989 90 76.4984 86.1803 81.7557C84.9467 83.4536 83.4536 84.9467 81.7557 86.1803C76.4984 90 68.9989 90 54 90V90C31.5016 90 20.2524 90 12.3664 84.2705C9.8196 82.4201 7.57988 80.1804 5.72949 77.6336C0 69.7476 0 58.4984 0 36V36Z" fill="#1E1E1E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0119 37.6732C27.2801 36.5571 29.2628 36.6267 30.4404 37.8287C38.7454 46.3057 49.8493 51.8485 61.9226 53.5438L70.3847 54.732C72.0966 54.9724 69.7198 56.0474 69.4662 57.67C69.2126 59.2926 71.1782 60.8484 69.4662 60.608L61.0042 59.4198C47.5218 57.5267 35.1221 51.337 25.8479 41.8706C24.6703 40.6686 24.7437 38.7894 26.0119 37.6732Z" fill="white" />
                                <path d="M30.7976 37.4788C29.4328 36.0857 27.148 36.0073 25.6816 37.2979C24.1997 38.6021 24.1111 40.8123 25.4907 42.2205C34.8444 51.768 47.3463 58.0069 60.9346 59.915L69.3967 61.1032C69.6296 61.1359 69.8534 61.1471 70.0479 61.1071C70.2574 61.0641 70.4938 60.9452 70.6105 60.6799C70.7094 60.4549 70.6714 60.2284 70.6366 60.0901C70.5986 59.9387 70.5337 59.7802 70.4712 59.6373C70.4366 59.5581 70.4011 59.4799 70.3655 59.4015C70.2621 59.1733 70.1583 58.9445 70.0749 58.6911C69.9659 58.36 69.9138 58.0442 69.9602 57.7472C70.007 57.4481 70.1564 57.1494 70.3678 56.846C70.5233 56.6227 70.6892 56.4269 70.8545 56.2318C70.9197 56.155 70.9847 56.0782 71.0489 56C71.1544 55.8716 71.2638 55.7311 71.3453 55.5911C71.4204 55.4622 71.5179 55.2584 71.4972 55.0209C71.4722 54.7347 71.2938 54.5388 71.0931 54.4254C70.9131 54.3237 70.6893 54.2699 70.4542 54.2369L61.9921 53.0487C50.0249 51.3683 39.0231 45.8747 30.7976 37.4788Z" stroke="white" stroke-opacity="0.06" stroke-linecap="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5488 63.474C24.7865 65.4469 26.2424 67.5702 28.3574 67.5702V67.5702C29.6139 67.5702 30.7383 66.79 31.178 65.6129L35.6101 53.7485C36.0765 52.5001 35.5916 51.1012 34.4857 50.3576V50.3576C32.9387 49.3172 30.7847 49.9235 30.1127 51.6626L25.5488 63.474ZM35.2964 38.2472C34.832 39.4489 35.1709 40.8196 36.1838 41.6156V41.6156C37.7276 42.8287 39.9564 42.1137 40.6435 40.2745L45.632 26.9206C45.6739 26.8083 45.7813 26.7338 45.9012 26.7338V26.7338C46.0211 26.7338 46.1284 26.8083 46.1704 26.9206L54.6602 49.6474C55.0138 50.594 55.793 51.3169 56.7752 51.5544V51.5544C59.1061 52.118 60.9718 49.8047 60.1074 47.5678L50.2417 22.0353C49.5487 20.2418 47.8239 19.0592 45.9012 19.0592V19.0592C43.9784 19.0592 42.2536 20.2418 41.5606 22.0353L35.2964 38.2472ZM66.0336 62.9047C65.5852 61.7443 64.5435 60.9176 63.3115 60.7446L60.8511 60.3992V60.3992C59.8267 60.2553 58.9965 61.2553 59.3585 62.2244L60.6243 65.6129C61.064 66.79 62.1884 67.5702 63.4449 67.5702V67.5702C65.56 67.5702 67.0159 65.4469 66.2536 63.474L66.0336 62.9047Z" fill="white" />
                                <path d="M31.6464 65.7879L36.0785 53.9235C36.6298 52.4477 36.053 50.809 34.7647 49.9426C32.9695 48.7353 30.4416 49.4242 29.6463 51.4824L25.0824 63.2938C24.1935 65.5943 25.8911 68.0702 28.3574 68.0702C29.8226 68.0702 31.1337 67.1604 31.6464 65.7879ZM41.1119 40.4494L45.9012 27.6288L54.1918 49.8223C54.6003 50.9157 55.5052 51.7617 56.6577 52.0404C59.4221 52.7088 61.568 49.9605 60.5738 47.3876L50.7081 21.8551C49.9406 19.8689 48.0305 18.5592 45.9012 18.5592C43.7718 18.5592 41.8617 19.8689 41.0942 21.8551L34.83 38.067C34.2909 39.4621 34.6796 41.0695 35.8749 42.0087C37.7065 43.448 40.3162 42.5795 41.1119 40.4494ZM63.381 60.2495L60.9206 59.904C59.536 59.7096 58.3902 61.061 58.8901 62.3993L60.1559 65.7879C60.6687 67.1604 61.9798 68.0702 63.4449 68.0702C65.9112 68.0702 67.6089 65.5943 66.7199 63.2938L66.5 62.7245C65.9862 61.3949 64.7926 60.4477 63.381 60.2495Z" stroke="white" stroke-opacity="0.06" />
                            </svg>
                        )}

                        <BrandName >{language === "en" ? <span>Ali Azizi</span> : <span>علی عزیزی</span>}</BrandName>
                    </LogoNavigation>

                    <MenuNavigations>
                        <ItemMenuNavigations> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#home">Home</a> : <a style={{color: "inherit", textDecoration: "none"}} href="#home">خانه</a>}</ItemMenuNavigations>
                        <ItemMenuNavigations> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#aboutMe">About Me</a> : <a style={{color: "inherit", textDecoration: "none"}} href="#aboutMe">درباره من</a>}</ItemMenuNavigations>
                        <ItemMenuNavigations> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#portfolio">Portfolio</a> : <a style={{color: "inherit", textDecoration: "none"}} href="#portfolio">نمونه کارها</a>}</ItemMenuNavigations>
                        <ItemMenuNavigations> {language === "en" ? <a style={{color: "inherit", textDecoration: "none"}} href="#contactUs">Contact us</a> : <a style={{color: "inherit", textDecoration: "none"}} href="#contactUs">تماس با من</a>}</ItemMenuNavigations>
                    </MenuNavigations>




                    <ThemeProvider theme={isDarkMode ? darkBtn : lightBtn}>

                        <span style={{ display: "flex", gap: "12px"}}>
                            <ButtonStrokeSmall onClick={toggleTheme}>
                                {isDarkMode === false ?
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2154 3.31437C12.0492 3.54032 12.0187 3.83868 12.1358 4.09354C12.6493 5.21097 12.9022 6.31549 12.9022 7.54849C12.9022 11.4234 9.63724 14.7358 5.44505 14.7358C4.99513 14.7358 4.528 14.6268 3.95275 14.4877C3.66956 14.4192 3.37196 14.5161 3.18339 14.7382C2.99482 14.9603 2.94746 15.2697 3.06095 15.538C4.44561 18.8117 7.80801 21 11.7211 21C16.8729 21 21 16.8935 21 12C21 7.4123 17.486 3.5932 12.9355 3.00635C12.6573 2.97047 12.3816 3.08842 12.2154 3.31437ZM14.0568 4.82295C17.2042 5.79639 19.4571 8.67288 19.4571 12C19.4571 16.0095 16.053 19.4571 11.7211 19.4571C8.97499 19.4571 6.61107 18.2002 5.2318 16.2734C5.30261 16.2768 5.37373 16.2787 5.44505 16.2787C10.4577 16.2787 14.445 12.3068 14.445 7.54849C14.445 6.59161 14.3149 5.69502 14.0568 4.82295Z" fill="#1B1B1B" />
                                    </svg> :
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.11628C9.3028 7.11628 7.11628 9.3028 7.11628 12C7.11628 14.6972 9.3028 16.8837 12 16.8837C14.6972 16.8837 16.8837 14.6972 16.8837 12C16.8837 9.3028 14.6972 7.11628 12 7.11628ZM5.72093 12C5.72093 8.53217 8.53217 5.72093 12 5.72093C15.4678 5.72093 18.2791 8.53217 18.2791 12C18.2791 15.4678 15.4678 18.2791 12 18.2791C8.53217 18.2791 5.72093 15.4678 5.72093 12Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.3853 2 12.6977 2.31236 12.6977 2.69767V3.62791C12.6977 4.01322 12.3853 4.32558 12 4.32558C11.6147 4.32558 11.3023 4.01322 11.3023 3.62791V2.69767C11.3023 2.31236 11.6147 2 12 2Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.6744C12.3853 19.6744 12.6977 19.9868 12.6977 20.3721V21.3023C12.6977 21.6876 12.3853 22 12 22C11.6147 22 11.3023 21.6876 11.3023 21.3023V20.3721C11.3023 19.9868 11.6147 19.6744 12 19.6744Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 12.3853 21.6876 12.6977 21.3023 12.6977H20.3721C19.9868 12.6977 19.6744 12.3853 19.6744 12C19.6744 11.6147 19.9868 11.3023 20.3721 11.3023H21.3023C21.6876 11.3023 22 11.6147 22 12Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.32558 12C4.32558 12.3853 4.01322 12.6977 3.62791 12.6977H2.69767C2.31236 12.6977 2 12.3853 2 12C2 11.6147 2.31236 11.3023 2.69767 11.3023H3.62791C4.01322 11.3023 4.32558 11.6147 4.32558 12Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0711 4.92893C19.3435 5.20139 19.3435 5.64313 19.0711 5.91559L18.4133 6.57337C18.1408 6.84583 17.6991 6.84583 17.4266 6.57337C17.1542 6.30091 17.1542 5.85916 17.4266 5.58671L18.0844 4.92893C18.3569 4.65647 18.7986 4.65647 19.0711 4.92893Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.57337 17.4266C6.84583 17.6991 6.84583 18.1408 6.57337 18.4133L5.91559 19.0711C5.64313 19.3435 5.20139 19.3435 4.92893 19.0711C4.65647 18.7986 4.65647 18.3569 4.92893 18.0844L5.58671 17.4266C5.85916 17.1542 6.30091 17.1542 6.57337 17.4266Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0711 19.0711C18.7986 19.3435 18.3569 19.3435 18.0844 19.0711L17.4266 18.4133C17.1542 18.1408 17.1542 17.6991 17.4266 17.4266C17.6991 17.1542 18.1408 17.1542 18.4133 17.4266L19.0711 18.0844C19.3435 18.3569 19.3435 18.7986 19.0711 19.0711Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.57337 6.57337C6.30091 6.84583 5.85917 6.84583 5.58671 6.57337L4.92893 5.91559C4.65647 5.64313 4.65647 5.20139 4.92893 4.92893C5.20139 4.65647 5.64313 4.65647 5.91559 4.92893L6.57337 5.58671C6.84583 5.85916 6.84583 6.30091 6.57337 6.57337Z" fill="white" />
                                    </svg>
                                }
                            </ButtonStrokeSmall>

                            <ButtonPrimarySmall onClick={toggleLanguage}>
                                {language === "en" ? 'FA' : "EN"}
                            </ButtonPrimarySmall>
                            {width < 700 && (
                                <ButtonStrokeSmall onClick={() => { setIsHambergerMenu(prev => !prev) }}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                        <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                        <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </ButtonStrokeSmall>
                            )}

                        </span>

                    </ThemeProvider>



                </Container>
            </ThemeProvider>
        </>
    )
}

export default Navigations