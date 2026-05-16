import { API_KEY } from "../env.js";

class VisualCrossing {

    constructor() {
        this.API_KEY = API_KEY;
    }

    async dayWeather(country, state, date=new Date()) {

        const dateAPI = date.toISOString().split('T')[0];

        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state},${country}/${dateAPI}?key=${this.API_KEY}&include=days,hours&unitGroup=metric`)
            .then((response) => {
                return response.json();
                })
            .then((response) => {
                console.log(response);
            });

    }

    async weekWeather(country, state, startDate=new Date()) {

        const startDateAPI = startDate.toISOString().split('T')[0];
        const endDateAPI = new Date(startDate.setDate(startDate.getDate() + 6)).toISOString().split('T')[0];

        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state},${country}/${startDateAPI}/${endDateAPI}?key=${this.API_KEY}&include=days&unitGroup=metric`)
            .then((response) => {
                return response.json();
                })
            .then((response) => {
                console.log(response);
            });

    }

    async monthWeather(country, state, startDate=new Date()) {

        const startDateAPI = startDate.toISOString().split('T')[0];
        const endDateAPI = new Date(startDate.setMonth(startDate.getMonth() + 1)).toISOString().split('T')[0];

        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state},${country}/${startDateAPI}/${endDateAPI}?key=${this.API_KEY}&include=days&unitGroup=metric`)
            .then((response) => {
                return response.json();
                })
            .then((response) => {
                console.log(response);
            });

    }

    async dateRangeWeather(country, state, startDate, endDate) {

        const startDateAPI = startDate.toISOString().split('T')[0];
        const endDateAPI = endDate.toISOString().split('T')[0];

        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state},${country}/${startDateAPI}/${endDateAPI}?key=${this.API_KEY}&include=days&unitGroup=metric`)
            .then((response) => {
                return response.json();
                })
            .then((response) => {
                console.log(response);
            });

    }

}

export const visualCrossing = new VisualCrossing();

