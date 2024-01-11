import { FormEvent, useState } from "react";

interface Option {
  id: string;
  text: string;
}

interface Props {
  options: Option[],
  placeholder?: string;
  disabledCorrections?: boolean;
  onSendMessage: (message: string) => void;
}

export const TextMessageBoxSelect = ({
  options,
  placeholder,
  disabledCorrections = false,
  onSendMessage = () => {},
}: Props) => {
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');

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
        <div className="flex">
          <input
            autoFocus
            type="text"
            name="message"
            placeholder={placeholder}
            autoCorrect={disabledCorrections ? 'on' : 'off'}
            autoComplete={disabledCorrections ? 'on' : 'ff'}
            spellCheck={disabledCorrections ? 'true' : 'false'}
            className="w-full h-10 pl-4 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <select
            name="select"
            className="w-2/5 h-10 text-gray-800 pl-4 ml-5 border rounded-xl focus:outline-none focus:border-indigo-300"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Seleccione</option>
            {options.map(({ id, text }) => (
              <option key={id} value={id}>{text}</option>
            ))}
          </select>
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
