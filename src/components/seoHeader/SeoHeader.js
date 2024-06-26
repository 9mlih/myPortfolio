import React from "react";
import { Helmet } from "react";
import { seo } from "../../portfoilo.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
