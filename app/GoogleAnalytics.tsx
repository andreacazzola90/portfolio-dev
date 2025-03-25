// GoogleAnalytics.tsx

import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-TL5J9KWX`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GTM-TL5J9KWX');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
