import { HelmetProvider, Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const PageMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export const AppWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

PageMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageMeta;
