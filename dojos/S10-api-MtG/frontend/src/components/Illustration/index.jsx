import propTypes from "prop-types";
import SIllustration from "./style";

export default function Illustration({ url, name }) {
  return (
    <SIllustration>
      <img src={url} alt={name} />
    </SIllustration>
  );
}
Illustration.propTypes = {
  url: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
