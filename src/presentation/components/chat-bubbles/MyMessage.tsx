interface Props {
  text: string;
}

export const MyMessage = ({ text }: Props) => {
  return (
    <div className="col-start-6 col-end-12 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-indigo-500">
          G
        </div>
        <div className="relative text-sm py-2 px-4 mr-3 shadow rounded-xl bg-indigo-700">
          <div>{text}</div>
        </div>
      </div>
    </div>
  )
}
