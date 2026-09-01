import type { ComponentType } from 'npm:react@18.3.1'
import { contactNotificationTemplate } from './contact-notification.tsx'
import { contactConfirmationTemplate } from './contact-confirmation.tsx'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-notification': contactNotificationTemplate,
  'contact-confirmation': contactConfirmationTemplate,
}
