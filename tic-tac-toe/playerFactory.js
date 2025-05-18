const playerFactory = function () {
    let id_list = [];
    let playersCreated = 0;
    let players = [];

    const showIds = () => {console.log(id_list)};
    const showPlayersCreated = () => {console.log(playersCreated)};
    const showPlayers = () => {console.log(players)};

    const createPlayer = function (playerName, playerIcon) {

        const id = id_list.length === 0 ? 0 : id_list[id_list.length - 1] + 1;      
        const name = playerName;
        const icon = playerIcon;

        let won = 0;
        let lost = 0;
        let played = 0;

        const playerObject = {
            id,
            name,
            icon,
            won,
            lost,
            played
        }

        playersCreated ++;
        id_list = [...id_list, id];
        players = [...players, playerObject];

        const showId = () => {console.log(id)};
        const showName = () => {console.log(name)};
        const showIcon = () => {console.log(icon)};
        const showWon = () => {console.log(won)};
        const showLost = () => {console.log(lost)};
        const showPlayed = () => {console.log(played)};
        const showAll = () => {
            const render = `
            Id: ${id}
            Name: ${name}
            Icon: ${icon}
            Games Won: ${won}
            Games Lost: ${lost}
            Games Played: ${played}
            `;

            console.log(render);
        }

        return {
            showId,
            showName,
            showIcon,
            showWon,
            showLost,
            showPlayed,
            showAll
        }
    }

    return {
        createPlayer,
        showIds,
        showPlayers,
        showPlayersCreated
    }
};

export default new playerFactory;