import { useRef, useState, useEffect } from "react"

const Modal = ({ children, top, left, bgColor, headerColor, title, borderRadius }) => {

    const card = useRef()
    const moveCard = useRef()
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDraging, setIsDraging] = useState(false)

    const handleMouseDown = (e) => {
        setIsDraging(true);
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDraging) {
                const deltaX = position.x - e.clientX;
                const deltaY = position.y - e.clientY;
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
                if (card.current) {
                    card.current.style.top = (card.current.offsetTop - deltaY) + "px";
                    card.current.style.left = (card.current.offsetLeft - deltaX) + "px";
                }
            }
        };
        const handleMouseUp = () => {
            setIsDraging(false);
        };

        if (isDraging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDraging, position]);

    return (
        <>
            <div id="card" ref={card} style={{
                width: "200px", position: "absolute", top: top, left: left, backgroundColor: bgColor, display: "flex", alignItems: "center", justifyContent: "start",
                borderRadius: borderRadius || "6px", color: "white", flexDirection: "column", overflow: "hidden", zIndex: "100"
            }}>
                <div onMouseDown={handleMouseDown} id="moveCard" ref={moveCard} style={{
                    width: "100%", backgroundColor: headerColor, padding: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", cursor: "move",

                }}>
                    <svg style={{ cursor: "pointer" }} onClick={() => {
                        card.current.style.display = "none"
                    }} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22676 4.22676C4.5291 3.92441 5.01929 3.92441 5.32163 4.22676L12 10.9051L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0949 12L19.7732 18.6784C20.0756 18.9807 20.0756 19.4709 19.7732 19.7732C19.4709 20.0756 18.9807 20.0756 18.6784 19.7732L12 13.0949L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9051 12L4.22676 5.32163C3.92441 5.01929 3.92441 4.5291 4.22676 4.22676Z" fill="currentColor" />
                    </svg>
                    <span>{title}</span>
                </div>
                <div style={{ width: "100%", padding: "12px" }}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal