import { useCallback, useState } from "react";
import { ContactInfo } from "../models";

type SendFunction = (info: ContactInfo, emailTemplate: string ) => Promise<void>;

type UseSendEmailResult = {
    isSending: boolean;
    sendEmail: SendFunction;
};

const requestbinUrl = import.meta.env.VITE_REQUESTBIN_URL;

export function useSendEmail(): UseSendEmailResult {
    const [isSending, setIsSending] = useState(false);

    const sendEmail: SendFunction = useCallback(
        async (info, emailTemplate) => {
            setIsSending(true);

            try {
              await fetch(
                `${requestbinUrl}/${emailTemplate}`,
                {
                  method: 'POST',
                  body: JSON.stringify(info),
                }
              );
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