import '../../styles/LoadingPage.css';
import { useEffect, useState } from 'react';

function LoadingPage({ onLoadingComplete }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const minDisplayTime = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                onLoadingComplete();
            }, 500);
        }, 1500);

        return () => clearTimeout(minDisplayTime);
    }, [onLoadingComplete]);

    return (
        <div className={`LoadingPage ${fadeOut ? 'LoadingPage--fadeOut' : ''}`}>
            <div className="LoadingContent">
                <img 
                    src="https://images.gamebanana.com/img/ico/sprays/luffy_run_render.gif" 
                    alt="Luffy Running" 
                    className="LoadingGif"
                />
                <h2>Loading...</h2>
                <div className="LoadingBar">
                    <div className="LoadingBar__progress"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
