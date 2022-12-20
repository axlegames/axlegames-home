/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
interface Props {
  shadow: string;
  bg: string;
  onClick: Function;
  label: string;
  width?: string;
  link: string;
}

const NeuLink = (props: Props) => {
  return (
    <Link
      name={props.link}
      to={props.link}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <a className="nav-link nav-link-ltr">{props.label}</a>
    </Link>
  );
};

export default NeuLink;
