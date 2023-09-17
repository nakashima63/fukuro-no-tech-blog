type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => {

  return (
    <div className="
      bg-zinc-800
      border-rose-500
      hover:bg-rose-500
      text-white
      text-center
      border-solid
      rounded-2xl
      border-2
      h-7
      px-2
      min-w-[64px]
      "
    >
      {text}
    </div>
  );
};