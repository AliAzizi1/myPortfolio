import { useContext, useEffect, useRef, useState } from "react"
import Navigations from "../../components/Navigations/Navigations"
import { Container, lightTheme, darkTheme, Hero, TitleHero, DecHero, BadgeHero, ProjectsCompleted, ProjectsCompletedLogo, ProjectsCompletedText, AboutMe, AboutMeTitle, AboutMeContent, AboutMeContentText, MyPortfolio, MyPortfolioTitle, MyPortfolioContent, MyPortfolioCard, MyPortfolioCardHeader, MyPortfolioCardPhoto, MyPortfolioCardHeaderLinkBox, ContactUs, ContactUsTitle, AboutMeContentTagBox, AboutMeContentTag, CursorBox, MyPortfolioLink, ContactUsContent, ContactUsSocialBox, ContactUsSocialIcon, MyPortfolioCategory, CategoryTag } from "./homePageStyle"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../../context/Theme"
import { LanguageContext } from "../../context/Language"
import { ButtonPrimaryMedium, ButtonStrokeMedium, lightBtn, darkBtn } from "../../components/mainComponents/button"
import Modal from "../../components/moveModal/modal"

import chartixLogo from "./../../assets/icon/chartixLogo.svg"
import swLogo from "./../../assets/icon/swLogo.svg"
import taraLogo from "./../../assets/icon/taraLogo.svg"
import novoxoertLogo from "./../../assets/icon/novoxpertLogo.svg"
import sec1 from "./../../assets/img/sec1.png"
import sec2 from "./../../assets/img/sec2.png"
import websiteImg from "./../../assets/img/intro2.png"
import intro3 from "./../../assets/img/intro3.png"
import cursorImg from "./../../assets/img/cursor.svg"
import p1Img from "./../../assets/img/p1.jpg"
import p2Img from "./../../assets/img/p2.jpg"
import p3Img from "./../../assets/img/p3.jpg"
import p4Img from "./../../assets/img/p4.jpg"
import p5Img from "./../../assets/img/p5.jpg"
import p6Img from "./../../assets/img/p6.jpg"
import p7Img from "./../../assets/img/p7.jpg"
import p8Img from "./../../assets/img/p8.jpg"
import p9Img from "./../../assets/img/p9.jpg"



const HomePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const { setLanguage } = useContext(LanguageContext)

    const [width, setWidth] = useState(window.innerWidth);
    const [activeTab, setActiveTab] = useState('all');

    const isDark = localStorage.getItem('isDark') || 'true';
    const language = localStorage.getItem('language') || 'fa';



    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isDark === 'true') {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }, [isDark])

    useEffect(() => {
        if (language === 'en') {
            setLanguage('en')
        } else {
            setLanguage('fa')
        }
    }, [language])



    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Container style={{ fontFamily: language === 'en' ? "vazir" : "peyda" }}>

                    {width > 700 && (
                        <>
                            <Modal borderRadius='8px 8px 0 8px' title={language === 'fa' ? 'شناخت کاربر' : 'User Understanding'} bgColor="#594fc816" headerColor="#5a4fc8" top="200px" left="15%">
                                <div style={{ width: "100%", color: isDarkMode ? "white" : "black", fontSize: "12px", display: "flex", flexDirection: 'column', gap: '8px', direction: language === 'fa' ? "rtl" : 'ltr' }}>
                                    <img style={{ borderRadius: "6px", height: "100px" }} width="100%" src={p4Img} alt="" />
                                    {language === 'fa' ? (
                                        <span style={{ direction: language === 'fa' ? "right" : '', textAlign: language === 'fa' ? "right" : '' }}>
                                           هر محصول خوب از درک واقعی کاربر شروع می‌شود.
                                        </span>
                                    ) : (
                                        <span style={{ direction: language === 'en' ? "ltr" : '', textAlign: language === 'en' ? "left" : '' }}>
                                            Great products start with real user understanding.
                                        </span>
                                    )}
                                </div>
                            </Modal>

                            <Modal borderRadius='8px 0 8px 8px' title={language === 'fa' ? 'حل مسئله واقعی' : "Real Problem Solving"} bgColor="#594fc816" headerColor="#5a4fc8" top="500px" left="10%">
                                <div style={{ width: "100%", color: isDarkMode ? "white" : "black", fontSize: "12px", direction: language === 'fa' ? "rtl" : 'ltr' }}>
                                    {language === 'fa' ? (
                                        <span style={{ direction: language === 'fa' ? "right" : '', textAlign: language === 'fa' ? "right" : '' }}>
                                           محصولات موفق از حل یک مشکل واقعی شروع می‌شوند.
                                        </span>
                                    ) : (
                                        <span style={{ direction: language === 'en' ? "ltr" : '', textAlign: language === 'en' ? "left" : '' }}>
                                            Successful products begin with solving a real problem.
                                        </span>
                                    )}
                                </div>
                            </Modal>

                            <Modal borderRadius='8px 8px 8px 0' title={language === 'fa' ? "طراحی قابل فهم" : "Intuitive Design"} bgColor="#594fc816" headerColor="#5a4fc8" top="200px" left="80%">
                                <div style={{ width: "100%", color: isDarkMode ? "white" : "black", fontSize: "12px", direction: language === 'fa' ? "rtl" : 'ltr' }}>
                                    {language === 'fa' ? (
                                        <span style={{ direction: language === 'fa' ? "right" : '', textAlign: language === 'fa' ? "right" : '' }}>
                                           طراحی خوب باید بدون توضیح قابل فهم باشد.
                                        </span>
                                    ) : (
                                        <span style={{ direction: language === 'en' ? "ltr" : '', textAlign: language === 'en' ? "left" : '' }}>
                                            Good design should be understood without explanation.
                                        </span>
                                    )}
                                </div>
                            </Modal>

                            <Modal borderRadius='0 8px 8px 8px' title={language === 'fa'? 'توجه به جزئیات' : 'Attention to Detail'} bgColor="#594fc816" headerColor="#5a4fc8" top="400px" left="77%">
                                <div style={{ width: "100%", color: isDarkMode ? "white" : "black", fontSize: "12px", display: "flex", flexDirection: 'column', gap: '8px', direction: language === 'fa' ? "rtl" : 'ltr' }}>
                                    <img style={{ borderRadius: "6px", height: "100px" }} width="100%" src={p6Img} alt="" />
                                    {language === 'fa' ? (
                                        <span style={{ direction: language === 'fa' ? "right" : '', textAlign: language === 'fa' ? "right" : '' }}>
                                           جزئیات کوچک، تجربه‌های بزرگ می‌سازند.
                                        </span>
                                    ) : (
                                        <span style={{ direction: language === 'en' ? "ltr" : '', textAlign: language === 'en' ? "left" : '' }}>
                                            Small details create great experiences.
                                        </span>
                                    )}
                                </div>
                            </Modal>
                        </>
                    )}

                    <CursorBox>
                        <img src={cursorImg} width='72px' />
                    </CursorBox>

                    <Navigations />
                    <Hero id="home" en={language === 'en'} fa={language === 'fa'}>
                        <TitleHero>
                            <BadgeHero en={language === 'en'} fa={language === 'fa'}>
                                {language === 'fa' ? <span>

                                    من همیشه برای ماجراجویی جدید آماده ام!

                                </span> : <span>
                                    I am always looking forward to a new adventure!
                                </span>}
                            </BadgeHero>
                            {language === 'fa' ? <span>

                                سلام، من علی ام، یه <span style={{ borderBottom: "2px solid rgba(117, 107, 225, 0.22)" }}>طراح محصول</span> که تجربه های
                                دیجیتال رو ساده و جذاب میکنم!

                            </span> : <span>
                                Hi, I'm Ali, a <span style={{ borderBottom: "2px solid rgba(117, 107, 225, 0.22)" }}>product designer</span> who makes digital experiences simple and engaging!
                            </span>}
                        </TitleHero>
                        <DecHero>
                            {language === 'fa' ? <span>

                                من به قدرت سادگی اعتقاد دارم طراحی باید همیشه بصری، واضح و آسان برای استفاده باشه. هدف من حل مشکلات پیچیده با راه حل های زیبا و کارآمد هست که تجربه بهتری برای کاربر میسازه.

                            </span> : <span>
                                I believe in the power of simplicity. Design should always be intuitive, clear, and easy to use. My goal is to solve complex problems with beautiful, efficient solutions that create a better user experience.
                            </span>}
                        </DecHero>

                        <ThemeProvider theme={isDarkMode ? darkBtn : lightBtn}>
                            <div style={{ display: "flex", gap: '12px', marginTop: "24px", alignItems: "center", flexDirection: width > 700 ? 'row' : "column" }}>
                                <ButtonStrokeMedium style={{ fontFamily: language === 'en' ? "poppins" : "peyda", padding: "12px 42px", width: width > 700 ? "auto" : '100%' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C10.4751 3.53846 8.42753 3.70582 6.99542 3.8447C6.40117 3.90233 5.93741 4.3731 5.89141 4.96993C5.749 6.81754 5.54839 9.81282 5.54839 12C5.54839 14.1872 5.749 17.1825 5.89141 19.0301C5.93741 19.6269 6.40117 20.0977 6.99542 20.1553C8.42753 20.2942 10.4751 20.4615 12 20.4615C13.5249 20.4615 15.5725 20.2942 17.0046 20.1553C17.5988 20.0977 18.0626 19.6269 18.1086 19.0301C18.251 17.1825 18.4516 14.1872 18.4516 12C18.4516 9.81282 18.251 6.81754 18.1086 4.96993C18.0626 4.3731 17.5988 3.90233 17.0046 3.8447C15.5725 3.70582 13.5249 3.53846 12 3.53846ZM6.84502 2.31351C8.28091 2.17427 10.3935 2 12 2C13.6065 2 15.7191 2.17427 17.155 2.31351C18.5029 2.44423 19.5495 3.51605 19.6525 4.85245C19.7949 6.70071 20 9.74813 20 12C20 14.2519 19.7949 17.2993 19.6525 19.1476C19.5495 20.484 18.5029 21.5558 17.155 21.6865C15.7191 21.8257 13.6065 22 12 22C10.3935 22 8.28091 21.8257 6.84502 21.6865C5.49709 21.5558 4.45055 20.484 4.34754 19.1476C4.20508 17.2993 4 14.2519 4 12C4 9.74813 4.20508 6.70071 4.34754 4.85245C4.45055 3.51605 5.49709 2.44423 6.84502 2.31351Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12903 14.0513C8.12903 14.4761 8.47565 14.8205 8.90323 14.8205H15.0968C15.5243 14.8205 15.871 14.4761 15.871 14.0513C15.871 13.6264 15.5243 13.2821 15.0968 13.2821H8.90323C8.47565 13.2821 8.12903 13.6264 8.12903 14.0513Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12903 9.94872C8.12903 10.3736 8.47565 10.7179 8.90323 10.7179H12C12.4276 10.7179 12.7742 10.3736 12.7742 9.94872C12.7742 9.52388 12.4276 9.17949 12 9.17949H8.90323C8.47565 9.17949 8.12903 9.52388 8.12903 9.94872Z" fill="currentColor" />
                                    </svg>
                                    {language === 'fa' ? <span>
                                        رزومه
                                    </span> : <span>
                                        Resume
                                    </span>}
                                </ButtonStrokeMedium>
                                <ButtonPrimaryMedium color="#5a4fc8" style={{ fontFamily: language === 'en' ? "poppins" : "peyda", padding: "12px 42px", color: "white" }}>
                                    {language === 'en' ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="currentColor" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" fill="currentColor" />
                                        </svg>
                                    )}

                                    {language === 'fa' ? <span>
                                        نمونه کارهای من
                                    </span> : <span>
                                        My Portfolio
                                    </span>}
                                </ButtonPrimaryMedium>
                            </div>

                        </ThemeProvider>
                        

                        <ProjectsCompleted borderTop={isDarkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.05)"}>
                            <ProjectsCompletedLogo borderColor={isDarkMode ? "#1E1E1E" : "#f0f0f0"}>
                                <img width="32px" src={chartixLogo} alt="chartixLogo" />
                            </ProjectsCompletedLogo>
                            <ProjectsCompletedLogo borderColor={isDarkMode ? "#1E1E1E" : "#f0f0f0"}>
                                <img width="28px" src={taraLogo} alt="taraLogo" />
                            </ProjectsCompletedLogo>
                            <ProjectsCompletedLogo borderColor={isDarkMode ? "#1E1E1E" : "#f0f0f0"}>
                                <img width="28px" src={swLogo} alt="swLogo" />
                            </ProjectsCompletedLogo>
                            <ProjectsCompletedLogo borderColor={isDarkMode ? "#1E1E1E" : "#f0f0f0"}>
                                <img width="24px" src={novoxoertLogo} alt="novoxoertLogo" />
                            </ProjectsCompletedLogo>
                            <ProjectsCompletedText style={{ marginRight: language === "en" ? "0" : "16px", marginLeft: language === "fa" ? "0" : "16px" }}>
                                <div style={{ marginBottom: "2px", display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                                    <svg width="14" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.38585 0.690984C8.68521 -0.230327 9.98861 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74912 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86474C-0.369582 7.29534 0.0331932 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#FFB800" />
                                    </svg>

                                    <svg width="14" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.38585 0.690984C8.68521 -0.230327 9.98861 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74912 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86474C-0.369582 7.29534 0.0331932 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#FFB800" />
                                    </svg>

                                    <svg width="14" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.38585 0.690984C8.68521 -0.230327 9.98861 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74912 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86474C-0.369582 7.29534 0.0331932 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#FFB800" />
                                    </svg>

                                    <svg width="14" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.38585 0.690984C8.68521 -0.230327 9.98861 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74912 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86474C-0.369582 7.29534 0.0331932 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#FFB800" />
                                    </svg>


                                    <svg width="14" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.38585 0.690984C8.68521 -0.230327 9.98861 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74912 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86474C-0.369582 7.29534 0.0331932 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#FFB800" />
                                    </svg>


                                </div>
                                <div style={{ width: "100%", color: isDarkMode ? "white" : "#1E1E1E" }}>
                                    {language === 'fa' ? <span>
                                        +50  پروژه موفق
                                    </span> : <span>
                                        +50 projects completed
                                    </span>}
                                </div>
                            </ProjectsCompletedText>
                        </ProjectsCompleted>
                    </Hero>

                    <AboutMe id="aboutMe">
                        <div style={{ width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                            <AboutMeTitle>
                                {language === 'fa' ? <span>
                                    درباره من
                                </span> : <span>
                                    About Me
                                </span>}
                            </AboutMeTitle>
                        </div>
                        <AboutMeContent>

                            {language === 'fa' ? (
                                <>
                                    <div style={{ width: width > 700 ? "50%" : '90%' }}>
                                        <img width={width > 700 ? "70%" : '100%'} src={isDarkMode ? sec1 : sec2} alt="" />
                                    </div>
                                    <AboutMeContentText style={{ direction: "rtl" }} en={language === 'en'} fa={language === 'fa'}>
                                        <span style={{ fontSize: "18px", fontWeight: "800" }}>
                                            درباره من
                                        </span>
                                        <span style={{ opacity: "0.5", fontSize: "14px", }}>
                                            من علی ام، بیشتر از 3 ساله که دارم در فیلدهای طراحی محصول و برنامه نویسی فرانت اند  کار میکنم. من به قدرت سادگی اعتقاد دارم طراحی باید همیشه  بصری، واضح و آسان برای استفاده باشه. هدف من حل مشکلات پیچیده با راه حل  های زیبا و کارآمد هست که تجربه بهتری برای کاربر میسازه. فرقی نداره محصول اپ، وب سایت یا... باشه، من رو ایجاد محصولاتی  تمرکز می‌کنم که کاربرها اون رو دوست دارند و کسب‌وکارها از اون رونق  می‌گیرند.
                                        </span>

                                        <span style={{ opacity: "0.5", fontSize: "14px", }}>
                                            ماموریت من ساده است: طراحی محصولاتی که کاربران دوست دارند و کسب و کارها از آن سود می برند
                                        </span>

                                        <span style={{ fontSize: "16px", fontWeight: "600" }}>
                                            مهارت های من
                                        </span>

                                        <AboutMeContentTagBox>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Product  Design
                                                </span>
                                            </AboutMeContentTag>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Front End
                                                </span>
                                            </AboutMeContentTag>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Wordpress
                                                </span>
                                            </AboutMeContentTag>
                                        </AboutMeContentTagBox>
                                    </AboutMeContentText>
                                </>
                            ) : (
                                <>
                                    <AboutMeContentText style={{ direction: "ltr" }} en={language === 'en'} fa={language === 'fa'}>
                                        <span style={{ fontSize: "18px", fontWeight: "800" }}>
                                            About Me
                                        </span>
                                        <span style={{ opacity: "0.5", fontSize: "14px", }}>
                                            I'm Ali, I've been working in product design and front-end programming fields for over 3 years. I believe in the power of simplicity, design should always be visual, clear, and easy to use. My goal is to solve complex problems with beautiful and efficient solutions that create a better user experience. Whether it's an app, website, or anything else, I focus on creating products that users love and businesses thrive from.                                        </span>

                                        <span style={{ opacity: "0.5", fontSize: "14px", }}>
                                            My mission is simple: to design products that users love and that businesses benefit from.
                                        </span>

                                        <span style={{ fontSize: "16px", fontWeight: "600" }}>
                                            My Skills
                                        </span>

                                        <AboutMeContentTagBox en={language === 'en'} fa={language === 'fa'}>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Product  Design
                                                </span>
                                            </AboutMeContentTag>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Front End
                                                </span>
                                            </AboutMeContentTag>
                                            <AboutMeContentTag>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    style={{ opacity: "0.5" }}
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                </svg>
                                                <span>
                                                    Wordpress
                                                </span>
                                            </AboutMeContentTag>
                                        </AboutMeContentTagBox>
                                    </AboutMeContentText>
                                    <div style={{ width: width > 700 ? "50%" : '90%', textAlign: "right" }}>
                                        <img width={width > 700 ? "70%" : '100%'} src={isDarkMode ? sec1 : sec2} alt="" />
                                    </div>
                                </>
                            )}

                        </AboutMeContent>
                    </AboutMe>

                    <MyPortfolio id="portfolio">

                        <div style={{ direction: language ==='fa'? "rtl" :"ltr",width: "100%", 
                            display: "flex", flexDirection: width > 700 ? 'row' : 'column', gap: '24px' ,alignItems: 'center', justifyContent: "space-between",
                            marginBottom:"32px", paddingBottom: '12px'
                            }}>
                            <MyPortfolioTitle>
                                {language === 'fa' ? <span>
                                    نمونه کارهای من
                                </span> : <span>
                                    My Portfolio
                                </span>}
                            </MyPortfolioTitle>
                            <MyPortfolioCategory>
                                <CategoryTag onClick={() => {setActiveTab('all')}} active={activeTab === 'all' ? true : false}>
                                    {language === 'fa' ? 'همه' : 'All'}
                                </CategoryTag>
                                <CategoryTag onClick={() => {setActiveTab('frontEnd')}} active={activeTab === 'frontEnd' ? true : false}>
                                    {language === 'fa' ? 'فرانت اند' : 'Front End'}
                                </CategoryTag>
                                <CategoryTag onClick={() => {setActiveTab('productDesign')}} active={activeTab === 'productDesign' ? true : false}>
                                    {language === 'fa' ? 'طراحی محصول' : 'Product Design'}
                                </CategoryTag>
                                <CategoryTag onClick={() => {setActiveTab('wordpress')}} active={activeTab === 'wordpress' ? true : false}>
                                    {language === 'fa' ? 'وردپرس': 'Wordpress'}
                                </CategoryTag>
                            </MyPortfolioCategory>
                        </div>

                        


                        <MyPortfolioContent>

                            {(activeTab === 'all' || activeTab === 'frontEnd') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://taskly1.vercel.app" target="blank">taskly1.vercel.app</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}>تسک لــی</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>Taskly</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://taskly1.vercel.app" target="blank">taskly1.vercel.app</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p7Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'frontEnd') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://form-builder.liara.run/form-builder" target="blank">form-builder</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}>فرم ساز</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>form builder</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://form-builder.liara.run/form-builder" target="blank">form-builder</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p6Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}
                            
                            {(activeTab === 'all' || activeTab === 'productDesign') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://rms.tara360.ir/login" target="blank">rms.tara360.ir</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}>درخواست پذیرندگی تارا</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>Merchant Acceptance Request tara360</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://rms.tara360.ir/login" target="blank">rms.tara360.ir</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p2Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'productDesign') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://jamboojet.com/" target="blank">jamboojet.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}>جمبوجت</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>jamboojet</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://jamboojet.com/" target="blank">jamboojet.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' height='100%' src={p1Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'productDesign') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://www.elmevira.com" target="blank">elmevira.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}>موسسه مهاجرتی ویرا</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>elmevira</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://www.elmevira.com" target="blank">elmevira.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p5Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}
                            

                            {(activeTab === 'all' || activeTab === 'productDesign' || activeTab === 'wordpress') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://nazdiktarvisa.com/" target="blank">nazdiktarvisa.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}> آموزش زبان نزدیک تر</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>Nazdiktar Visa</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://nazdiktarvisa.com/" target="blank">nazdiktarvisa.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p3Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'productDesign' || activeTab === 'wordpress') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://nazdiktartranslation.com/" target="blank">nazdiktartranslation.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}> دارالترجمه نزدیک تر</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>Nazdiktar Translations</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://nazdiktartranslation.com/" target="blank">nazdiktartranslation.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p4Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'productDesign') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://sweetnFresh.com/" target="blank">sweetnFresh.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}> sweetnFresh</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>sweetnFresh</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://sweetnFresh.com/" target="blank">sweetnFresh.com</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p8Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                            {(activeTab === 'all' || activeTab === 'productDesign') && (
                                <MyPortfolioCard>
                                    <MyPortfolioCardHeader>
                                        {language === 'fa' ? (
                                            <>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://yadaki.net/" target="blank">yadaki.net</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                                <span style={{ opacity: "0.6" }}> یدکی دات نت</span>
                                            </>
                                        ) : (
                                            <>

                                                <span style={{ opacity: "0.6" }}>yadaki</span>
                                                <MyPortfolioCardHeaderLinkBox>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        style={{ opacity: "0.5" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z"></path>
                                                    </svg>
                                                    <span style={{ opacity: "0.5" }}>https://</span>
                                                    <MyPortfolioLink href="https://yadaki.net/" target="blank">yadaki.net</MyPortfolioLink>
                                                </MyPortfolioCardHeaderLinkBox>
                                            </>
                                        )}

                                    </MyPortfolioCardHeader>
                                    <MyPortfolioCardPhoto>
                                        <img style={{ borderRadius: '8px 8px 0 0 ' }} width='100%' src={p9Img} alt="" />
                                    </MyPortfolioCardPhoto>
                                </MyPortfolioCard>
                            )}

                        </MyPortfolioContent>
                    </MyPortfolio>

                    <ContactUs id="contactUs">
                        {/* <div style={{ width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                            <ContactUsTitle>
                                {language === 'fa' ? <span>
                                    ارتباط با من
                                </span> : <span>
                                    Contact Us
                                </span>}
                            </ContactUsTitle>
                        </div> */}

                        <ContactUsContent en={language === 'en'} fa={language === 'fa'}>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                {width > 700 && (
                                    language === 'fa' ? (
                                        <svg style={{ opacity: "0.5" }} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" fill="currentColor" />
                                        </svg>
                                    ) : (
                                        <svg style={{ opacity: "0.5" }} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="currentColor" />
                                        </svg>
                                    )
                                )}
                                {language === 'fa' ? (
                                    <span>
                                        برای همکاری با من میتوانید از طریق <strong style={{ color: isDarkMode ? "#958bff" : "#5a4fc8", borderBottom: '1.5px solid rgba(117, 107, 225, 0.22)' }}>شبکه های اجتماعی</strong> با من در ارتباط باشید!
                                    </span>
                                ) : (
                                    <span>
                                        You can contact me through <strong style={{ color: isDarkMode ? "#958bff" : "#5a4fc8", borderBottom: '1.5px solid rgba(117, 107, 225, 0.22)' }}>social networks</strong> for collaboration!
                                    </span>
                                )}

                            </span>
                            <ContactUsSocialBox>
                                <ContactUsSocialIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path fill-rule="evenodd" d="M12 2C6.49 2 2 6.49 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.47v-1.52c-2.77.61-3.35-1.34-3.35-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1.01.07 1.55.99 1.55.99.89 1.53 2.34.99 2.9.76.09-.59.35-1.04.63-1.29-2.21-.25-4.54-.98-4.54-4.41 0-.97.34-1.77.89-2.39-.09-.22-.39-1.12.09-2.35 0 0 .83-.27 2.72 1.01.79-.22 1.63-.33 2.47-.34.84-.01 1.68.11 2.47.34 1.89-1.28 2.71-1.01 2.71-1.01.48 1.23.18 2.13.09 2.35.55.62.89 1.42.89 2.39 0 3.43-2.33 4.16-4.55 4.41.35.27.67.81.67 1.64v2.48s.19.31.48.29C19.75 20.15 22 16.45 22 12c0-5.51-4.49-10-10-10z" />
                                    </svg>
                                </ContactUsSocialIcon>
                                <ContactUsSocialIcon>
                                    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.849 0-2.132 1.444-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.999 20.452H3.675V9h3.324v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </ContactUsSocialIcon>
                            </ContactUsSocialBox>
                        </ContactUsContent>
                    </ContactUs>
                    <div style={{marginBottom: "24px", color: isDarkMode ? 'white' : 'black', fontSize: "14px", opacity: '0.3'}}>
                        Designed and Developed With 🤍 by 
                        `<span style={{borderBottom: isDarkMode ? "1px dashed rgba(255,255,255,0.6)" : "1px dashed rgba(0, 0, 0, 0.6)"}}>Ali Azizi</span>`
                    </div>

                </Container>
            </ThemeProvider>
        </>
    )
}

export default HomePage