import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import Head from "next/head";
import Test from "@/app/test/page";
import Link from "next/link";

//redux implemaantation//

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bull Rider Capsule",
  description: "BullRider Capsule",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* //-------------------------------------------------------- */}

        {/* --------------------------- */}

        <link
          rel="icon"
          href={
            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/028ba234-ba6b-4dee-8592-efeb73bfd700/public"
          }
        />

        <Script type="text/javascript" strategy="lazyOnload">
          {`var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://raw.githubusercontent.com/gospeedify/files/main/speedreq.js",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");`}
        </Script>

        <Script type="text/javascript" strategy="lazyOnload" data-flspd="1">
          {`var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});
        `}
        </Script>

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TW8ZLWZHFG`}
        />
        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-TW8ZLWZHFG', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>

        <Script strategy="lazyOnload">
          {` (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:847503, lng:"us", project: "a.mgid.com" }); var l = "a.mgid.com"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })(); `}
        </Script>

        {/* start Google and meta pixel code for Shredhaa */}

        {/* Meta Pixel Code */}
        {/* <Script strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '6514466085244140');
          fbq('track', 'PageView'); `}
        </Script>

        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=6514466085244140&ev=PageView&noscript=1"
          />
        </noscript> */}
        {/* End Meta Pixel Code  */}

        {/* Google tag (gtag.js)  */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-N94DSYJV7B"
        ></Script>

        <Script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N94DSYJV7B');`}
        </Script>

        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-1SJ5GJM63N"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1SJ5GJM63N');`}
        </Script>

        {/* end Google and meta pixel code for Shredhaa */}
      </Head>

      <body className={inter.className}>
        {/* <script

type="text/javascript"
dangerouslySetInnerHTML={{
  __html: `var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://raw.githubusercontent.com/gospeedify/files/main/speedreq.js",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");`,
}}
></script>
<script

type="text/javascript"
data-flspd="1"
dangerouslySetInnerHTML={{
  __html: `var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});`,
}}
></script> */}

        <script src="/speedmin.js"></script>

        <input type="hidden" value="arayurveda.shop" id="sellerDomain" />
        <script
          src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
        ></link>

        <div
          style={{
            position: "absolute",
            fontSize: "1200px",
            lineHeight: 1,
            wordWrap: "break-word",
            top: 0,
            left: 0,
            width: "50vw",
            height: "50vh",
            maxWidth: "50vw",
            maxHeight: "50vh",
            pointerEvents: "none",
            zIndex: 99999999999,
            color: "transparent",
            overflow: "hidden",
          }}
          data-optimizer="SP:Store-js"
        >
          □
        </div>

        <GlobalContextProvider>
          <Test>{children}</Test>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
