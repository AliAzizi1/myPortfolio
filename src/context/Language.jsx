import { createContext, useState } from "react";

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fa')

    const toggleLanguage = () => {
        if (language == "en") {
            setLanguage("fa")
            localStorage.setItem('language', 'fa')
        } else {
            setLanguage("en")
            localStorage.setItem('language', 'en')
        }
    }

    const value = {
        language,
        toggleLanguage,
        setLanguage
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}