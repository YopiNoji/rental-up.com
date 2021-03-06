import React from "react";
import { Helmet } from "react-helmet";

type PropTypes = {
  lang?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  twitterUser?: string;
  facebookAppId?: string;
  siteUrl?: string;
};

const Header: React.FC<PropTypes> = ({
  lang,
  title,
  description,
  image,
  type,
  twitterUser,
  facebookAppId,
  siteUrl,
}) => {
  return (
    <Helmet>
      <html lang={lang || "ja"} />
      <title lang={lang || "ja"}>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={siteUrl || window.location.href} />
      <meta property="og:site_name" content="サイト名" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:image" content={image || "/assets/ogp.png"} />
      <meta property="fb:app_id" content={facebookAppId} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={"@" + twitterUser} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "/assets/ogp.png"} />
    </Helmet>
  );
};

export default Header;
