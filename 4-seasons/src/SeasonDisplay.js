import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        txt: "Lets hit the beach",
        iconName: "sun"
    },
    winter: {
        txt: "Brrr it's chilly",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisaply = props => {
    const season = getSeason(props.lat, new Date().getMonth);
    const {txt, iconName} = seasonConfig[season];
    // const txt = season === 'winter' ? "Brrr it's chilly" : "Lets hit the beach";
    // const icon = season === 'winter' ? 'snowflake' : 'sun'

    console.log(season);

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{txt}</h1>
            <i className={`icon-right massive ${iconName} icon icon-right`} />
        </div>

    );
}

export default SeasonDisaply;