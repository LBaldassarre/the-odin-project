import Main from "../main/main";


class PubSub {
    static updateMain(state) {
        Main.mainObject.innerHTML = Main.HTML(state);
    }
};

export default PubSub;