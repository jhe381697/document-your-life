/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.scss'

const YoutubeEmbed = ({src}) => (
    <div className="video-responsive">
        <iframe
            width="300"
            height="500"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;