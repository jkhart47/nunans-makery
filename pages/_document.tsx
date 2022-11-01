import {  Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
            async
          />
          <div
            id="snipcart"
            data-api-key="MzgyODIwYTAtOWM1ZC00NGEyLWJhZWYtMDUwNjA1ODgxNzg1NjM3ODMzOTE5MjgxNDE4Mzkw" data-config-modal-style="side"
            hidden
          ></div>

        </body>
      </Html>
    )

  
}