/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactNotificationProps {
  name?: string
  email?: string
  interest?: string
  message?: string
}

const ContactNotificationEmail = ({
  name,
  email,
  interest,
  message,
}: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New website inquiry from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Inquiry</Heading>
        <Text style={text}>
          A new message was submitted through the Solaris Nutri contact form.
        </Text>
        <Hr style={hr} />
        <Section style={{ marginBottom: '8px' }}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Interested in</Text>
          <Text style={value}>{interest || '—'}</Text>
          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Reply directly to this lead at the email address above.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const contactNotificationTemplate = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    data?.interest
      ? `New inquiry: ${data.interest} — ${data.name || 'Solaris Nutri'}`
      : `New inquiry from ${data?.name || 'a website visitor'}`,
  displayName: 'Contact form — lead notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    interest: 'Solaris Private Program',
    message: 'I would love to learn more about the rhythm programs.',
  },
  // Always deliver leads to the Solaris Nutri inbox.
  to: 'qrnutrition4@gmail.com',
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
  lineHeight: '1.55',
  margin: '0 0 20px',
}
const label = {
  fontSize: '11px',
  fontWeight: 'bold' as const,
  color: '#8a958f',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  margin: '0 0 4px',
}
const value = {
  fontSize: '15px',
  color: '#1f2a26',
  lineHeight: '1.5',
  margin: '0 0 16px',
}
const messageStyle = {
  fontSize: '15px',
  color: '#1f2a26',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
  margin: '0 0 16px',
}
const hr = {
  borderColor: '#e6e0d6',
  margin: '24px 0',
}
const footer = {
  fontSize: '12px',
  color: '#8a958f',
  margin: '0',
}
