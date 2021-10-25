import React from "react";
import { theme } from "globalStyles";

/**
 * Phone for animated illustration.
 * @returns Phone svg paths.
 */
const Phone: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 672 379">
    <defs />
    <g clipPath="url(#clip0)">
      <g>
        <path
          fill={theme.palette.common.black}
          d="M467.474 26.474h119.121c11.833 0 22.082 8.214 24.706 19.744l60.204 266.869c2.475 11.035-4.456 21.971-15.447 24.445-1.139.248-2.327.396-3.516.495l-122.487 6.037c-13.566.643-25.498-8.808-27.924-22.169l-34.162-188.683-2.525.742-6.535-35.777 2.624-.644-9.556-52.7c-1.535-8.462 4.11-16.577 12.576-18.111.941-.198 1.931-.248 2.921-.248z"
        />
        <path
          fill={theme.palette.common.white}
          d="M570.9 32.214h13.913c8.218 0 15.348 5.74 17.081 13.757l57.778 264.691c1.287 5.839-2.426 11.629-8.268 12.916-.545.099-1.04.198-1.585.247l-122.091 8.016c-7.13.446-13.467-4.503-14.754-11.529L463.711 46.713c-1.188-6.68 3.218-13.064 9.902-14.3a10.814 10.814 0 012.178-.199h13.17c2.624 0 4.902 1.782 5.595 4.305a5.14 5.14 0 004.951 3.81h62.63c4.605-.049 8.417-3.562 8.763-8.115z"
        />
        <path fill={theme.palette.primary.main} d="M473.167 77.195h132.44l14.11 63.538-134.172 2.474-12.378-66.012z" />
        <path fill={theme.palette.primary.main} d="M598.923 197.541h31.191l.99 5.938h-31.191l-.99-5.938z" />
        <path fill={theme.palette.common.black} d="M624.315 167.099L492.1 169.897l.014.643 132.215-2.798-.014-.643z" />
        <path fill={theme.palette.common.black} d="M628.339 185.441l-133.142 3.11.015.643 133.142-3.11-.015-.643z" />
        <path fill={theme.palette.primary.main} d="M611.795 261.376h31.192l.99 5.938h-31.191l-.991-5.938z" />
        <path fill={theme.palette.common.black} d="M637.186 230.935l-133.056 2.798.013.643 133.057-2.798-.014-.643z" />
        <path fill={theme.palette.common.black} d="M641.21 249.274l-133.637 3.11.015.643 133.637-3.11-.015-.643z" />
      </g>
    </g>
    <defs>
      <clipPath>
        <path fill={theme.palette.common.white} d="M0 0h672v379H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Phone;
