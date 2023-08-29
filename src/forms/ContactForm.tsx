import { FunctionComponent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactInfo } from '../models';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../molecules';
import { Button, IconWaiting } from '../atoms';

const requestbinUrl = import.meta.env.VITE_REQUESTBIN_URL;

export const ContactForm: FunctionComponent = () => {
  const [isSending, setIsSending] = useState(false);

  const { register, handleSubmit, control, reset } = useForm<ContactInfo>({
    resolver: zodResolver(ContactInfo),
  });

  const sendContactInfo = handleSubmit(async (data) => {
    setIsSending(true);

    try {
      await fetch(
        requestbinUrl,
        {
          method: 'POST',
          body: JSON.stringify(data),
        }
      );
    } catch(ex) {
      // TODO: handle send errors rather than ignoring them
      console.log("WE SHOULD LOG THIS SOMEWHERE", ex);
    }

    setIsSending(false);

    reset();
  });

  const resetForm = useCallback(
    () => reset(),
    [reset]
  );

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4" onSubmit={sendContactInfo}>
      <h1 className="text-primary font-medium text-3xl col-span-full">Contact Us</h1>

      <Input type="text" placeholder="First Name" control={control} name='firstName' />
      <Input type="text" placeholder="Last Name" control={control} name='lastName' />

      <div className="mt-8 col-span-full">
        <Input type="text" placeholder="Phone Number" control={control} name="phoneNumber" />
      </div>

      <div className="col-span-full">
        <Input type="text" placeholder="Email Address" control={control} name="emailAddress" />
      </div>

      <h3 className="text-primary font-medium text-xl mt-8 col-span-full">Message:</h3>
      <textarea className="outline-none col-span-full h-80 border rounded-md border-primary p-2" {...register("message")} />

      <div className="flex col-span-full justify-end mt-8 space-x-4">
        <Button type="button" variant='secondary' outline onClick={resetForm} disabled={isSending}>Clear</Button>
        <Button type="submit" disabled={isSending}>
          { isSending && (<IconWaiting className="animate-spin" />)}
          { isSending ? 'Sending' : 'Send' }
        </Button>
      </div>
    </form>
  );
}