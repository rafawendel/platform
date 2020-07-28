import PropTypes from 'prop-types';
import { makeStyles } from './styles';

export default function Parallax({ children, imageSrc, overlayColor }) {
  const [content, section] = children;
  return (
    <>
      <div className="parallax-wrapper">
        <div className="parallax__wrapper" id="parallax-wrapper">
          <div className="parallax parallax__section">
            <div className="container">{content}</div>
          </div>
          <section>{section}</section>
        </div>
      </div>
      <style jsx>{makeStyles({ overlayColor, imageSrc })}</style>
    </>
  );
}

Parallax.defaultProps = {
  overlayColor: 'rgba(255, 255, 255, 0)'
};

Parallax.propTypes = {
  children: [PropTypes.node, PropTypes.node].isRequired,
  header: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  overlayColor: PropTypes.string
};
