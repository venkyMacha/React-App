interface Props {
  text: string;
  colour?: string;
  onClickButton: () => void;
}

function Button({ text, colour = "primary", onClickButton }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + colour}
      onClick={() => {
        onClickButton();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
