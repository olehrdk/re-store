import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => {   
   return (
      <div className="error-indicator">
         <div className="boom">Something has gone terribly wrong</div>
         <div>
            (but we will fix it soon)
         </div>
      </div>
   )
}

export default ErrorIndicator;