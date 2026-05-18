import DailyInfoCard from "./dailyInfoCard";
import { visualCrossing } from "../../../utils/visualCrossingAPI.js";
import "./mainPane.css";

class MainPane {

    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('main-pane-container');


        this.infoContainer = document.createElement('div');
        this.infoContainer.classList.add('main-pane-info-container');

        this.degreesContainer = document.createElement('div');
        this.degreesContainer.classList.add('main-pane-degrees-container');

        this.precipitacionContainer = document.createElement('div');
        this.precipitacionContainer.classList.add('main-pane-precipitacion-container');

        this.element.appendChild(this.infoContainer);
        this.element.appendChild(this.degreesContainer);
        this.element.appendChild(this.precipitacionContainer);

    }

    async init () {

        const weatherData = await visualCrossing.dayWeather("DE", "Cologne");

        console.log(weatherData);

        const test_cards = [
            ['degrees', weatherData.days[0].temp],
            ['precipitation', weatherData.days[0].precipprob],
            ['humidity', weatherData.days[0].humidity],
            ['wind', weatherData.days[0].windspeed]
        ];

        test_cards.forEach(([label, value]) => {
            const label_container = new DailyInfoCard(label, value);
            this.infoContainer.appendChild(label_container.render());
        });
    }


    render () {
        return this.element;
    }

}

export default MainPane;