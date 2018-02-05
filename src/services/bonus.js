import config from './../config';

class Bonus {
    getStage() {
        if (!this.bonusStage) {
            this.bonusStage = null;
            const now = Date.now() / 1000;
            config.bonusStages.forEach((stage) => {
                if (!this.bonusStage && stage.endTime > now) {
                    this.bonusStage = stage;
                }
            });
        }
        return this.bonusStage;
    }

    getBonusCpy() {
        let stage = this.getStage();

        return stage ? Math.round(740 * stage.bonus) : 0;
    }
}

export default new Bonus();