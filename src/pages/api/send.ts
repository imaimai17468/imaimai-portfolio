import sgMail, { MailDataRequired } from '@sendgrid/mail'

import { isMail } from '@/@types/mail'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }
  if (!req.body || typeof req.body !== 'string') {
    res.status(400).json({ message: 'Bad Request (empty body)' })
    return
  }

  const data = JSON.parse(req.body) as unknown
  if (!isMail(data)) {
    res.status(400).json({ message: `Bad Request (invalid body): ${JSON.stringify(data)}` })
    return
  }

  const { NEXT_PUBLIC_SENDGRID_API_KEY, NEXT_PUBLIC_SENDGRID_TO_EMAIL, NEXT_PUBLIC_SENDGRID_FROM_EMAIL } = process.env
  if (!NEXT_PUBLIC_SENDGRID_API_KEY || !NEXT_PUBLIC_SENDGRID_TO_EMAIL || !NEXT_PUBLIC_SENDGRID_FROM_EMAIL) {
    res.status(500).json({ message: 'Internal Server Error' })
    return
  }

  sgMail.setApiKey(NEXT_PUBLIC_SENDGRID_API_KEY)

  const { name, email, message } = data
  const msg: MailDataRequired = {
    to: NEXT_PUBLIC_SENDGRID_TO_EMAIL,
    from: NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
    subject: '確認メッセージ',
    text: `${name}さん からのお問い合わせです`,
    html: `
      <strong>${name}さんからの問い合わせです</strong>
      <p>お名前: ${name}</p>
      <p>email: ${email}</p>
      <p>お問い合わせ内容:\n${message}</p>
    `,
  }

  try {
    await sgMail.send(msg)
    res.status(200).json(msg)
  } catch (err: any) {
    console.error(err)
    res.status(500).json(err)
  }
}
