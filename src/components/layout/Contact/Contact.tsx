import { useForm } from 'react-hook-form'

import { Mail } from '@/@types/mail'
import { Button } from '@/components/common'

import { ContactProps } from './Contact.types'

const Contact: React.FC<ContactProps> = ({ contactRef }: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Mail>({ mode: 'onChange' })

  const onSubmit = async (data: Mail) => {
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          alert('送信しました')
        } else {
          alert('送信に失敗しました')
          console.error(res)
        }
      })
      .catch(() => {
        alert('送信に失敗しました')
      })
  }

  return (
    <div id='contact' className='w-9/10 bg-background bg-opacity-70 p-10 lg:w-3/5 xl:w-1/2' ref={contactRef}>
      <h2 className='w-fit border-b-2 border-emerald-400 text-2xl'>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit, console.error)}>
        <div className='my-8 flex flex-col items-center gap-16'>
          <div className=' flex w-full flex-col gap-8'>
            <div className='flex justify-around gap-4'>
              <div className='w-full'>
                <p>Name</p>
                <input
                  className='w-full border-b-2 border-emerald-400 bg-transparent p-2 focus:outline-none'
                  {...register('name', { required: 'この項目は必須です' })}
                />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
              </div>
              <div className='w-full'>
                <p>Email</p>
                <input
                  className='w-full border-b-2 border-emerald-400 bg-transparent p-2 focus:outline-none'
                  {...register('email', {
                    required: 'この項目は必須です',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'メールの形式で入力してください',
                    },
                  })}
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
              </div>
            </div>
            <div>
              <p>Message</p>
              <textarea
                rows={3}
                className='w-full border-b-2 border-emerald-400 bg-transparent p-2 focus:outline-none'
                {...register('message', { required: 'この項目は必須です' })}
              />
              {errors.message && <span className='text-red-500'>この項目は必須です</span>}
            </div>
          </div>
          <Button className='w-32' disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Contact
