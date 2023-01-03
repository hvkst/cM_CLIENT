import { CustomButton } from './Button.style';

function Button({ label, color }) {
  return <CustomButton color={color}>{label}</CustomButton>;
}

export default Button;
