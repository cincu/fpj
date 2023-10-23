import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="dark" lang="en">
      <script
        src="https://www.paypal.com/sdk/js?client-id=AQWCkGf9FehI0eA9W9FYm8qlsM8oZeT1sWWlrT8RlXVt27xM894XBPydGQwTLWbdcGUE2u5B3RN-9ApR&components=buttons"
        async
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
