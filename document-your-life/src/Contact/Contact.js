/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './contact.scss';
import DevCard from '../utils/DevCard/DevCard';

const Contact = () => {
    const devTeam = [{
        avatar: "",
        name: "Jérôme",
        github: "https://github.com/Jerrylejer",
    },
    {
        avatar: "",
        name: "François",
        github: "https://github.com/FrancoisMoanaMichael",
    }, {
        avatar: "",
        name: "Joséphine",
        github: "https://github.com/jhe381697",
    }, {
        avatar: "",
        name: "William",
        github: "https://github.com/williamDev-End",
    }, {
        avatar: "",
        name: "Gurvan",
        github: "https://github.com/LardeuxGurvan",
    }
    ]
    return (
        <>
            {devTeam.map(({ name, github, avatar }) => {
                return (
                    <DevCard key={name} name={name} github={github} avatar={avatar} />
                )
            })
            }

        </>
    );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);
