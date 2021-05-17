import React from "react";
import { theme } from "globalStyles";

/**
 * Background for animated illustration.
 * @returns Background svg path.
 */
const Background: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 672 379">
    <defs />
    <g clipPath="url(#clip0)">
      <path
        fill={theme.palette.primary}
        fillOpacity=".1"
        d="M234.974 40.627c18.666-16.43 47.926-19.794 74.563-18.458 83.721 4.107 159.273 44.04 224.627 89.22 23.666 16.379 46.985 33.946 62.333 56.511 31.29 45.823 21.982 109.311-21.487 147.067-14.804 12.866-32.727 22.714-51.144 31.423-32.727 15.538-68.077 27.958-105.209 31.521-26.488 2.524-53.323.495-79.662-3.068-73.572-9.847-145.807-31.67-206.358-68.981-26.537-16.33-51.59-36.717-62.531-63.142-10.942-26.424-3.96-60.024 23.17-75.661 11.239-6.483 24.607-9.402 37.727-12.173 19.309-4.058 38.965-8.017 56.392-16.231 18.022-8.511 39.311-24.94 35.747-43.695-3.763-20.239-6.833-37.954 11.832-54.333z"
      />
    </g>
    <defs>
      <clipPath>
        <path fill={theme.palette.common.white} d="M0 0h672v379H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Background;
