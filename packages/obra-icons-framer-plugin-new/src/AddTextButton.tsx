import { framer, useIsAllowedTo } from "framer-plugin";

function AddTextButton() {
  const isAllowed = useIsAllowedTo("addText");

  const onClick = () => {
    framer.addText("Hello!");
  };

  return (
    <button disabled={!isAllowed} onClick={onClick}>
      Hello!
    </button>
  );
}

export default AddTextButton;
