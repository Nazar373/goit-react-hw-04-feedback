import PropTypes from 'prop-types';
import { Title } from "./Section.styled"

export default function Section(props) {
  const {title, children} = props;
  console.log(children);
  return <div><Title>{title}</Title>
  {children}</div>
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}