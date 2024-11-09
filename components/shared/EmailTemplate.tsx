
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
    orderId: string
  }

export const EmailTemplate = ({firstName, orderId}: EmailTemplateProps) => {
  let eventName = 'Hussle Hard';
  return (
  
      <Html lang="en">
      <Head />
      <Preview>Dear - {firstName}</Preview>
      <Body className="mx-auto bg-white p-4 font-sans">
        <Container>
          <Heading className="text-2xl">Ticket Purchase Confirmation - {eventName}</Heading>
          <Text className="-mt-2">
              Thank you for purchasing your ticket,  We're excited to have you join us for this event!
          </Text>
          <Text>
            If you are having trouble communicate with us.
            👇
          </Text>
          <Text className="text-xs mt-10">
              You can find your ticket(s) attached to this email as a PDF, or use the QRcode below for verification of your ticket(s):
          </Text>
         <img src={`https://api.qrserver.com/v1/create-qr-code/?size=84x84&data=${orderId}`}/>
        </Container>
      </Body>
    </Html>
  )
}

