import Markdown from "react-markdown";

interface Props {
  text: string;
}

export const GtpMessages = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-green-600">
          G
        </div>
        <div className="relative text-sm px-4 pt-3 pb-2 ml-3 rounded-xl shadow bg-black bg-opacity-25">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  )
}
