import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactInfo } from "../models";

type SendFunction = (info: ContactInfo, emailTemplate: string ) => Promise<void>;

type UseSendEmailResult = {
  isSending: boolean;
  sendEmail: SendFunction;
};

const { VITE_REQUESTBIN_URL, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

const sendEmailJs: SendFunction = async (info, emailTemplate) => {
  if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_PUBLIC_KEY) { return; }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await emailjs.send(VITE_EMAILJS_SERVICE_ID, emailTemplate, info as any, VITE_EMAILJS_PUBLIC_KEY);
}

const fakeEmail: SendFunction = async (info, emailTemplate) => {
  if (!VITE_REQUESTBIN_URL) { return; }

  await fetch(
    `${VITE_REQUESTBIN_URL}/${emailTemplate}`,
    {
      method: 'POST',
      body: JSON.stringify(info),
    }
  );
};

  export function useSendEmail(): UseSendEmailResult {
    const [isSending, setIsSending] = useState(false);

    const sendEmail: SendFunction = useCallback(
      async (info, emailTemplate) => {
        setIsSending(true);

        try {
          sendEmailJs(info, emailTemplate);
          fakeEmail(info, emailTemplate);
        } catch(ex) {
          // TODO: handle send errors rather than ignoring them
          console.log("WE SHOULD LOG THIS SOMEWHERE", ex);
        }

        setIsSending(false);
      },
      []
      );

      return { isSending, sendEmail };
    }