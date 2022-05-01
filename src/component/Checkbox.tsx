import Check from "../icon/Check";
import UnCheck from "../icon/UnCheck";

interface CheckboxProps {
  isChecked: boolean;
}

function Checkbox({ isChecked }: CheckboxProps) {
  return (
    <div className="cursor-pointer my-auto">
      {isChecked ? <Check /> : <UnCheck />}
    </div>
  );
}

export default Checkbox;
