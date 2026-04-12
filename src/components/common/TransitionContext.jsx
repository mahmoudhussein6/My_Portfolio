import { createContext, useContext, useState, useCallback } from "react";
import PageTransitionLoader from "./PageTransitionLoader";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [pendingPath, setPendingPath] = useState(null);
    const navigate = useNavigate();

    const transitionTo = useCallback((path) => {
        setPendingPath(path);
        setIsTransitioning(true);
    }, []);

    const handleMidpoint = useCallback(() => {
        if (pendingPath) {
            navigate(pendingPath);
            setPendingPath(null);
        }
    }, [pendingPath, navigate]);

    const handleTransitionComplete = useCallback(() => {
        setIsTransitioning(false);
    }, []);

    return (
        <TransitionContext.Provider value={{ transitionTo }}>
            {children}
            {isTransitioning && (
                <PageTransitionLoader 
                    onMidpoint={handleMidpoint}
                    onComplete={handleTransitionComplete} 
                />
            )}
        </TransitionContext.Provider>
    );
};


export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("useTransition must be used within a TransitionProvider");
    }
    return context;
};
