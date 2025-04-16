"use client"

import { motion } from "framer-motion"

interface LoadingCircleSpinnerProps {
    size?: "default" | "small" | "large"
}

function LoadingCircleSpinner({ size = "default" }: LoadingCircleSpinnerProps) {
    const isSmall = size === "small";
    const isLarge = size === "large";

    return (
        <div className="container">
            <motion.div
                style={{ scale: isSmall ? 0.5 : isLarge ? 1.5 : 1 }}
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
            }

            .spinner {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 4px solid #F1F1F1;
                border-top-color: #D87D4A;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingCircleSpinner
