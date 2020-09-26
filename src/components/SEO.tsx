import React from 'react';
import {Helmet} from "react-helmet";

type PropTypes ={
    lang?: string;
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article';
}

const Header: React.FC<PropTypes> = ({lang, title, description, image, type}) => {
  return (
      <Helmet>
          <html lang={lang || 'ja'} />
          <title lang={lang || 'ja'}>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content={type || 'website'} />
          <meta property="og:image" content={image || 'assets/ogp.png'} />
      </Helmet>
  );
};

export default Header;
