import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ cursorVariant }) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 25,
            width: 25,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            transition: {
                type: "tween",
                duration: 0,
                ease: "linear"
            }
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "#B3A369",
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            variants={variants}
            animate={cursorVariant}
            initial="default"
            data-variant={cursorVariant}
        />
    );
};

export default CustomCursor;