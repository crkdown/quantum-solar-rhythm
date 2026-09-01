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

interface NewsletterWelcomeProps {
  name?: string
  guideUrl?: string
}

const SITE = 'https://solarisnutri-com.lovable.app'

const NewsletterWelcomeEmail = ({ name, guideUrl }: NewsletterWelcomeProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your 7-Day Rhythm Reset guide is here</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome{name ? `, ${name}` : ''} — your guide is ready.</Heading>
        <Text style={text}>
          Thank you for joining Solaris Nutri. Here is your free{' '}
          <strong>7-Day Rhythm Reset</strong>: a short, practical guide to rebuilding your
          day around light, meal timing and rest.
        </Text>
        <Button style={button} href={guideUrl || `${SITE}/resources`}>
          Open the 7-Day Rhythm Reset
        </Button>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>What to do first</Heading>
        <Text style={text}>
          1. Get outside within 30–60 minutes of waking — daylight is the strongest signal
          your body has.
          <br />
          2. Eat your first real meal within a couple of hours of that light.
          <br />
          3. Dim the evening. Repair happens when the day is allowed to end.
        </Text>
        <Text style={text}>
          When you're ready to go deeper, the free Rhythm Circle assessment shows where
          your day is out of step.
        </Text>
        <Button style={buttonGhost} href={`${SITE}/food-rhythm-tool`}>
          Take the free assessment
        </Button>
        <Hr style={hr} />
        <Text style={text}>
          With warmth,
          <br />
          <strong>Paula — Solaris Nutri</strong>
        </Text>
        <Text style={footer}>
          You're receiving this because you asked for the free guide at{' '}
          <Link href={SITE} style={link}>
            solarisnutri.com
          </Link>
          . You can unsubscribe at any time.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const newsletterWelcomeTemplate = {
  component: NewsletterWelcomeEmail,
  subject: 'Your 7-Day Rhythm Reset guide — Solaris Nutri',
  displayName: 'Newsletter — free guide welcome',
  previewData: { name: 'Jane', guideUrl: `${SITE}/resources` },
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
const h2 = {
  fontSize: '17px',
  fontWeight: 'bold' as const,
  color: '#0f5f5f',
  margin: '0 0 12px',
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
const buttonGhost = {
  ...button,
  backgroundColor: '#ffffff',
  color: '#169494',
  border: '1px solid #169494',
}
const hr = { borderColor: '#e6e0d6', margin: '24px 0' }
const link = { color: '#169494', textDecoration: 'underline' }
const footer = {
  fontSize: '12px',
  color: '#8a958f',
  lineHeight: '1.5',
  margin: '0',
}
