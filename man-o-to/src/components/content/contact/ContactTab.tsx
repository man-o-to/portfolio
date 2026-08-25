import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { profile } from '@/data/profile'

const underlineFieldClasses =
  'rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:border-foreground focus-visible:ring-0'

export function ContactTab() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Portfolio contact from ${name}`
    const body = `${message}\n\n— ${name} (${email})`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg py-6">
      <FieldGroup>
        <Field>
          <FieldLabel
            htmlFor="contact-name"
            className="text-xs tracking-widest text-muted-foreground uppercase"
          >
            Name
          </FieldLabel>
          <Input
            id="contact-name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={underlineFieldClasses}
          />
        </Field>
        <Field>
          <FieldLabel
            htmlFor="contact-email"
            className="text-xs tracking-widest text-muted-foreground uppercase"
          >
            Email
          </FieldLabel>
          <Input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={underlineFieldClasses}
          />
        </Field>
        <Field>
          <FieldLabel
            htmlFor="contact-message"
            className="text-xs tracking-widest text-muted-foreground uppercase"
          >
            Message
          </FieldLabel>
          <Textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={underlineFieldClasses}
          />
        </Field>
        <Button
          type="submit"
          variant="link"
          className="h-auto w-fit rounded-none p-0 text-xs tracking-widest text-foreground uppercase"
        >
          [Send Message]
        </Button>
      </FieldGroup>
    </form>
  )
}
