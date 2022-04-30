import Check from "../icon/Check";
import UnCheck from "../icon/UnCheck";

interface CheckboxProps {
  isChecked: boolean;
  setChecked: (checked: boolean) => void;
}

function Checkbox({ isChecked, setChecked }: CheckboxProps) {
  return (
    <div
      className="cursor-pointer my-auto"
      onClick={() => setChecked(!isChecked)}
    >
      {isChecked ? <Check /> : <UnCheck />}
    </div>
  );
}

export default Checkbox;
