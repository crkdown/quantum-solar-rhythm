/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to Solaris Nutri</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for reaching out{name ? `, ${name}` : ''}.</Heading>
        <Text style={text}>
          Your message has landed safely with Paula. She reads every inquiry personally
          and will get back to you within 24–48 hours.
        </Text>
        <Text style={text}>
          In the meantime, you're welcome to follow along on Instagram for daily rhythm
          insights and gentle guidance.
        </Text>
        <Button style={button} href="https://www.instagram.com/solarisnutri">
          Follow @solarisnutri
        </Button>
        <Hr style={hr} />
        <Text style={text}>
          With warmth,
          <br />
          <strong>Paula — Solaris Nutri</strong>
        </Text>
        <Text style={footer}>
          You're receiving this because you submitted the contact form at{' '}
          <Link href="https://solarisnutri.com" style={link}>
            solarisnutri.com
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
)

export const contactConfirmationTemplate = {
  component: ContactConfirmationEmail,
  subject: 'Thank you for reaching out to Solaris Nutri',
  displayName: 'Contact form — sender confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "Georgia, 'Times New Roman', serif",
}
const container = { padding: '24px 28px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#0f5f5f',
  margin: '0 0 16px',
}
const text = {
  fontSize: '14px',
  color: '#4a5450',
  lineHeight: '1.6',
  margin: '0 0 20px',
}
const button = {
  backgroundColor: '#169494',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold' as const,
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
}
const hr = { borderColor: '#e6e0d6', margin: '24px 0' }
const link = { color: '#169494', textDecoration: 'underline' }
const footer = {
  fontSize: '12px',
  color: '#8a958f',
  lineHeight: '1.5',
  margin: '0',
}
