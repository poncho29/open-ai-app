import { FormEvent, useRef, useState } from "react";

interface Props {
  accept?: string;
  placeholder?: string;
  disabledCorrections?: boolean;
  onSendMessage: (message: string) => void;
}

export const TextMessageBoxFile = ({
  accept,
  placeholder,
  disabledCorrections = false,
  onSendMessage = () => {},
}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>();

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
      <div className="mr-3">
        <button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
          onClick={() => inputFileRef.current?.click()}
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>

        <input
          hidden
          type="file"
          accept={accept}
          ref={inputFileRef}
          onChange={(e) => setSelectedFile(e.target.files?.item(0))}
        />
      </div>

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
        <button
          className="btn-primary"
          disabled={!selectedFile}
        >
          {
            (!selectedFile)
              ? (<span className="mr-2">Enviar</span>)
              : (<span className="mr-2">{selectedFile.name.substring(0, 10) + '...'}</span>)
          }
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
