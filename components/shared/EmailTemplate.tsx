
import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Link,
    Img,
  
  } from '@react-email/components';

interface EmailTemplateProps {
    firstName: string,
    qrcodeUrl: string
  }

export const EmailTemplate = ({firstName, qrcodeUrl}: EmailTemplateProps) => {
  return (
  
      <Html lang="en">
      <Head />
      <Preview>Confirm your email address</Preview>
      <Body className="mx-auto bg-white p-4 font-sans">
        <Container>
          <Heading className="text-2xl">You're Almost There</Heading>
          <Text className="-mt-2">
            Confirm your email address to start receiving amazing emails about
            amazing things!
          </Text>

          <Text>
            If you are having trouble clicking the link, copy and paste the URL
            👇
          </Text>

          <Text className=" bg-gray-100 px-4 py-2 rounded-md text-center">
            {firstName}
          </Text>

          <Text className="text-xs mt-10">
            *If you did not request this email, there is nothing to worry about,
            you can safely ignore it.
          </Text>
         <img src='https://api.qrserver.com/v1/create-qr-code/?size=84x84&data=635323237&johnchafi'/>
        </Container>
      </Body>
    </Html>
  )
}

