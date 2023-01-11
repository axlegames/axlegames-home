import { Link } from "react-router-dom";

interface Props {
  label: string;
  link: string;
}

const NeuPageLink = (props: Props) => {
  return (
    <Link to={props.link} className="nav-link nav-link-ltr">
      {props.label}{" "}
    </Link>
  );
};

export default NeuPageLink;
