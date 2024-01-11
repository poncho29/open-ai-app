import { FormEvent, useState } from "react";

interface Props {
  placeholder?: string;
  disabledCorrections?: boolean;
  onSendMessage: (message: string) => void;
}

export const TextMessageBox = ({
  placeholder,
  disabledCorrections = false,
  onSendMessage = () => {},
}: Props) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage('');
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center w-full h-16 px-4 rounded-xl bg-white"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            autoFocus
            type="text"
            name="message"
            placeholder={placeholder}
            autoCorrect={disabledCorrections ? 'on' : 'off'}
            autoComplete={disabledCorrections ? 'on' : 'ff'}
            spellCheck={disabledCorrections ? 'true' : 'false'}
            className="flex w-full h-10 pl-4 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
