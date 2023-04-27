import React from 'react';
import { ReactPropTypes } from 'react';

const YouTubeEmbed = ({ VideoEmbed }) => (
    <div>
        <iframe 
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${VideoEmbed}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
          allowFullScreen
          title="Embedded YouTube"
        />
    </div>
);

YouTubeEmbed.ReactPropTypes = {
    embedId: ReactPropTypes.string.isRequired
};

export default YouTubeEmbed;