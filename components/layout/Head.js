import PropTypes from "prop-types";
import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Bits & Bots
      </title>
      <meta name="description" content="Bits & Bots" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};
