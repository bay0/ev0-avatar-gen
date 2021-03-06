
import React from 'react';

export const EvolveLogo = ({ logoFill, stripeFill, useGradientForLogo, useGradientForLogoStripe, logoGradientColorA, logoGradientColorB, logoStripeGradientColorA, logoStripeGradientColorB }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="333.84" height="258.96">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%" >
                <stop offset="0%" style={{stopColor: `rgb(${logoGradientColorA.r}, ${logoGradientColorA.g}, ${logoGradientColorA.b})`, stopOpacity: '1'}} />
                <stop offset="100%" style={{stopColor: `rgb(${logoGradientColorB.r}, ${logoGradientColorB.g}, ${logoGradientColorB.b})`, stopOpacity: '1'}} />
            </linearGradient>
            <linearGradient id="logoStripeGradient" x1="0%" y1="100%" x2="100%" y2="0%" >
                <stop offset="0%" style={{stopColor: `rgb(${logoStripeGradientColorA.r}, ${logoStripeGradientColorA.g}, ${logoStripeGradientColorA.b})`, stopOpacity: '1'}} />
                <stop offset="100%" style={{stopColor: `rgb(${logoStripeGradientColorB.r}, ${logoStripeGradientColorB.g}, ${logoStripeGradientColorB.b})`, stopOpacity: '1'}} />
            </linearGradient>
        </defs>
        <path fillRule="evenodd" clipRule="evenodd" fill={useGradientForLogo ? 'url(#logoGradient)': logoFill} d="M121.2 0c1.426 1.208 5.785 13.844 7.44 16.56 7.094 11.642 17.701 20.691 32.4 24.72 12.36 3.388 27.14.679 39.12-1.2 16.164-2.535 40.993 6.162 47.04 13.68V54l-62.64 32.16-51.12 23.76c-20.572 8.972-41.482 16.832-62.88 25.2 2.813-11.921 18.389-22.744 25.2-31.44-23.375-3.529-39.715 11.846-42.96 30.24l-.48-.24c-.836-7.516-2.729-16.833-1.2-25.44 5.247-29.519 24.988-47.529 56.16-50.64-4.015-21.241-2.977-35.751 7.44-50.4L121.2 0zM260.4 65.76h-.96l-10.8 6.72-30 18-17.28 9.36h-.48c5.172 5.945 12.269 9.335 13.92 18.96l46.08-24 11.76-6.48c1.22-6.56-9.887-17.481-12.24-22.56zm0 27.36v.48c-8.881-1.973-13.943-10.294-9.84-20.64 5.712 2.498 14.969 10.63 9.84 20.16zM275.76 102.72c3.659 4.162-4.919 17.673-6.24 19.44-7.975 10.671-20.086 16.899-35.28 20.4-5.264 1.213-15.092 2.337-19.92-.24l1.2-2.88 11.04-6.24c10.258-6.09 20.339-12.029 30.24-18.24l18.96-12.24zM147.36 125.28h.72c-1.976 8.791-2 17.42-3.12 27.36-11.811 3.601-24.535 13.232-36.72 15.6v-1.2l.48-5.76c-4.696 2.225-8.873 4.848-12.72 7.92l-6.24 6.72-23.52 8.4-.24-.72c-4.309-7.302-2.854-20.482-2.16-30L84 148.08c13.663-4.23 26.733-8.237 39.36-13.2 7.162-2.815 18.204-5.318 24-9.6zM148.32 172.56l4.08 9.12c2.555 5.001 8.542 10.831 10.08 15.6l-32.88 14.64c-3.387 1.47-9.302 5.621-12.96 5.28-3.029-9.69-6.633-16.598-8.4-29.04 9.643-2.31 19.048-6.932 27.84-10.56l12.24-5.04zM82.56 196.32h.96c.946 13.094 7.07 20.438 12 29.28-6.53-2.958-19.107-19.371-22.56-26.16l9.6-3.12zM270.24 210h.48c-2.386 4.927-9.337 9.074-13.68 12.24-13.354 9.736-37.034 23.062-62.88 18-15.556-3.046-26.136-8.549-37.68-14.88l.24-.48 24.72-11.28c17.967 14.36 56.248 14.938 78 3.84 4.02-2.051 8.217-3.976 10.8-7.44zM143.76 230.4l2.88 10.56c2.895 6.947 9.335 14.991 16.56 17.52v.48h-.24c-9.081-3.985-16.927-8.708-24.24-14.4l-8.64-8.16.24-.48 13.44-5.52z"/>
        <path fillRule="evenodd" clipRule="evenodd"  fill={useGradientForLogoStripe ? 'url(#logoStripeGradient)': stripeFill} d="M333.36 4.8h.48c-4.186 5.204-11.617 8.983-17.04 12.96-13.511 9.908-27.136 19.626-41.28 29.04-54.721 36.42-112.929 66.547-181.2 90-21.228 7.292-43.365 11.471-67.68 16.32-4.13.824-22.602 3.975-26.64 2.4 12.233-1.481 24.56-5.643 35.52-9.12 24.506-7.774 46.93-15.145 69.36-24.72 15.469-6.604 30.448-12.794 45.6-19.44l36.24-17.52 25.92-12.96c11.326-6.64 23.667-11.397 34.56-18.24l18.48-9.6 43.68-24.96 24-14.16zM333.6 52.8c-.55 2.354-13.348 10.599-16.32 12.72-14.792 10.556-29.239 21.599-44.88 31.44-16.247 10.223-32.642 20.804-49.44 30.72-43.288 25.552-90.547 45.371-143.28 61.44-17.97 5.476-36.609 8.591-57.12 12.24-4.021.715-17.643 3.277-21.6 1.68h.48l24.96-6c17.381-5.257 34.61-10.037 50.64-16.32 30.742-12.05 60.8-25.461 90.24-38.4l47.52-23.76c9.78-3.886 20.45-9.901 29.76-15.36 9.372-5.495 19.537-9.619 28.32-15.6l12.48-6.48 34.08-19.92 14.16-8.4zM333.36 105.6l.48.24-22.56 16.8c-14.25 10.17-28.381 20.518-43.44 30-52.551 33.092-105.202 61.556-169.68 83.52-21.813 7.43-44.457 12.234-69.6 17.04-4.411.843-23.117 4.15-27.6 2.4 9.075-.652 18.567-4.021 26.64-6.48 21.889-6.669 42.597-13.094 62.64-21.12 24.882-9.964 48.78-20.665 72.24-31.2 13.588-6.102 28.718-12.513 41.76-20.16 14.316-8.395 29.82-14.532 43.92-22.8 19.888-11.662 40.469-21.73 60-33.36l25.2-14.88z"/>
    </svg>
);

export const EvolveBorder = ({ borderColor, useGradientForBorder, logoBorderGradientColorA, logoBorderGradientColorB, useRect, useCircle }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" preserveAspectRatio="none">
        <defs>
            <linearGradient id="logoBorderGradient">
                <stop offset="0" style={{stopColor: `rgb(${logoBorderGradientColorA.r}, ${logoBorderGradientColorA.g}, ${logoBorderGradientColorA.b})`}} />
                <stop offset="1" style={{stopColor: `rgb(${logoBorderGradientColorB.r}, ${logoBorderGradientColorB.g}, ${logoBorderGradientColorB.b})`}} />
            </linearGradient>
        </defs>
        {useRect && (<rect x="10" y="10" width="480" height="480" stroke={useGradientForBorder ? 'url(#logoBorderGradient)' : borderColor} fill="transparent" strokeWidth="7"/>)}
        {useCircle && (<circle r="240" cy="50%" cx="50%" style={{fill: 'none', stroke: useGradientForBorder ? 'url(#logoBorderGradient)' : borderColor, strokeWidth: 7}} />)}
    </svg>
)
