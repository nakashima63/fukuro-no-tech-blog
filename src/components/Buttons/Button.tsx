type Props = {
  text: string;
};

export const Button = (props: Props) => {
  const { text } = props;

  return (
    <button className="
      bg-zinc-800    
      hover:bg-violet-800
      border-violet-800
      border-solid
      rounded-md
      border-2
      w-16
      h-7
      justify-center
      items-center
      flex
      shrink-0
      text-white"
    >
      {text}
    </button>
  );
};