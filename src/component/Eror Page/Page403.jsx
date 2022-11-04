import React, { useEffect, useState } from 'react'
import './Page403.css'
import './Page404.css'

function Page403() {
    const [timeLeft, setTimeLeft] = useState(10);
    
    let rootDiv, eyef, cx, cy
    useEffect(() => {
        rootDiv = document.documentElement
        let eyef = document.querySelector("circle#eyef"),
            cx = document.getElementById("eyef").getAttribute("cx"),
            cy = document.getElementById("eyef").getAttribute("cy")

        console.log(rootDiv)
        console.log(eyef)
        console.log(cx)
        console.log(cy)

        if (!timeLeft) return;

        if (timeLeft === 0) {
            console.log("TIME LEFT IS 0");
        }

        const scondeTime = setInterval(() => {
        }, 2000);

        const intervalId = setInterval(() => {
            if (document.querySelector('.message p').className == "TextRed") {
                document.querySelector('.message p').className = "TextBlack";
            }
            else {
                document.querySelector('.message p').className = "TextRed";
            }

            setTimeLeft(timeLeft - 1);
        }, 1000);

        timeLeft == 1 && (window.location = 'https://google.com')
        return () => clearInterval(intervalId);

    }, [timeLeft]);

    document.addEventListener('mousemove', (evt) => {
        let x = evt.clientX / window.innerWidth
        let y = evt.clientY / window.innerHeight

        rootDiv.style.setProperty("--mouse-x", x)
        rootDiv.style.setProperty("--mouse-y", y)

        cx = 115 + 30 * x
        cy = 50 + 30 * y

    })

    document.addEventListener("touchmove", (touchHandler) => {
        let x = touchHandler.touches[0].clientX / window.innerWidth;
        let y = touchHandler.touches[0].clientY / window.innerHeight;

        rootDiv.style.setProperty("--mouse-x", x);
        rootDiv.style.setProperty("--mouse-y", y);
    });


    return (
        <div className='Page403'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" id="robot-error" viewBox="0 0 260 118.9" role="img">
                    <defs>
                        <clipPath id="white-clip">
                            <circle id="white-eye" fill="#fff" cx="130" cy="65" r="20" />
                        </clipPath>
                        <text id="text-s" class="error-text" y="106"> 403 </text>
                    </defs>
                    <path class="alarm" fill="#e62326" d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6" />
                    <use xlinkHref="#text-s" x="-0.5px" y="-1px" fill="black"></use>
                    <use xlinkHref="#text-s" fill="#000"></use>
                    <g id="robot">
                        <g id="eye-wrap">
                            <use xlinkHref="#white-eye"></use>
                            <circle id="eyef" class="eye" clip-path="url(#white-clip)" fill="#ff0000" stroke="#000"
                                stroke-width="2" stroke-miterlimit="10" cx="130" cy="65" r="11" />
                            <ellipse id="white-eye" fill="#000" cx="130" cy="40" rx="18" ry="12" />
                        </g>
                        <circle class="lightblue" cx="105" cy="32" r="2.5" id="tornillo" />
                        <use xlinkHref="#tornillo" x="50"></use>
                        <use xlinkHref="#tornillo" x="50" y="60"></use>
                        <use xlinkHref="#tornillo" y="60"></use>
                    </g>
                </svg>

                <div className='message' id='messageH1'>
                    <h1>You are not allowed to enter here</h1>
                </div>
                <div className='message' id='messageP'>
                    You will be redirected to main page in <p className='TextBlue'>00:00:{timeLeft}</p> sec
                </div>
            </div>
        </div>
    )
}

export default Page403