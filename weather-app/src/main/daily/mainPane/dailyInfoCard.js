import "./dailyInfoCard.css";

class DailyInfoCard {

    constructor(header, data, icon=null) {
        this.header_content = header;
        this.data_content = data;
        this.icon_content = icon;

        this.element = document.createElement('div');
        this.element.classList.add('daily-info-card');
        
        this.header = document.createElement('div');
        this.header.classList.add('daily-info-card-header');
        this.header.textContent = this.header_content;
        this.element.appendChild(this.header);

        this.data = document.createElement('div');
        this.data.classList.add('daily-info-card-data');
        this.data.textContent = this.data_content;
        this.element.appendChild(this.data);

        if(this.icon_content){
            this.icon = document.createElement('div');
            this.icon.classList.add('daily-info-card-icon');
            this.icon.textContent = this.icon_content;
            this.element.appendChild(this.icon);
        } 
        
    }

    render () {
        return this.element;
    }
}

export default DailyInfoCard;