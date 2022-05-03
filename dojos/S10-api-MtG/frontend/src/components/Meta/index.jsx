import propTypes from "prop-types";
import SMeta from "./style";

export default function Meta({ set }) {
  return (
    <SMeta>
      <li>Set: {set}</li>
    </SMeta>
  );
}
Meta.propTypes = {
  set: propTypes.string.isRequired,
};
