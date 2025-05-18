const playerFactory = function () {

    const createPlayer = function (playerName, playerIcon) {      
        const name = playerName;
        const icon = playerIcon;

        let won = 0;
        let lost = 0;
        let played = 0;

        const showName = () => {console.log(name)};
        const showIcon = () => {console.log(icon)};
        const showWon = () => {console.log(won)};
        const showLost = () => {console.log(lost)};
        const showPlayed = () => {console.log(played)};
        const showAll = () => {
            const render = `
            Name: ${name}
            Icon: ${icon}
            Games Won: ${won}
            Games Lost: ${lost}
            Games Played: ${played}
            `;

            console.log(render);
        }

        return {
            showName,
            showIcon,
            showWon,
            showLost,
            showPlayed,
            showAll
        }
    }

    return {
        createPlayer
    }
};

export default new playerFactory;