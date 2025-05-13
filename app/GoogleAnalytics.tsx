// GoogleAnalytics.tsx

import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${gaId});
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
