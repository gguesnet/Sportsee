export default class UserDatas {
  constructor({ data }) {
    console.log(data);
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.score || data.todayScore;

    this.calorie = {
      value: data.keyData.calorieCount,
      label: "calories",
      unit: "kCal",
    };
    this.protein = {
      value: data.keyData.proteinCount,
      label: "proteines",
      unit: "gramme",
    };
    this.carbohydrate = {
      value: data.keyData.carbohydrateCount,
      label: "glucides",
      unit: "gramme",
    };
    this.lipide = {
      value: data.keyData.lipidCount,
      label: "lipides",
      unit: "gramme",
    };
    this.info = [this.calorie, this.protein, this.carbohydrate, this.lipide];
  }
}
