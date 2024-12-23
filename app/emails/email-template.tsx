import { Body, Container, Html, Font, Img } from "@react-email/components";
import Head from "next/head";
import * as React from "react";

export default function Email({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Open Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={{ ...main, direction: "rtl" as const }}>
        <Container>
          <Img
            src="https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-1-35idmistonroad-anouska-tamony-1644331792.jpg?crop=1xw:1xh;center,top&resize=980:*"
            width={800}
            height={200}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Container>
        <Container>
          <h1 style={{ fontFamily: "Open Sans, sans-serif" }}>
            תודה שהשארת פרטים אצלנו, {name}!
          </h1>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>אימייל: {email}</p>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>טלפון: {phone}</p>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            הודעה: {message}
          </p>
        </Container>
        <Container
          style={{
            marginTop: "20px",
            textAlign: "center" as const,
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f4efe9",
          }}
        >
          <h2>קיבלנו את ההודעה שלך {name}!</h2>
          <p style={{ textAlign: "center" as const, fontWeight: "bold" }}>
            נציג שלנו יפעיל את המכונה ויתקשר אליך בהקדם האפשרי.
          </p>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#4e4138",
};
