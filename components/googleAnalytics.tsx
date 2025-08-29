"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-LH22WZPHTT"
        debugMode={false}
      />
    </>
  );
};