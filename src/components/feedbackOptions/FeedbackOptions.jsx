import { Item , List, Button} from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export default function  FeedbackOptions({options, onLeaveFeedback}) {
 return <List>
    {options.map((option, index) => {
      return <Item key={index}><Button onClick={
        () => { onLeaveFeedback(option)}}>{option}</Button></Item>
    })}
  </List>
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

