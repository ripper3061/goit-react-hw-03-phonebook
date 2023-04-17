import PropTypes from 'prop-types';
import { TitleSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <TitleSection>{title}</TitleSection>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
