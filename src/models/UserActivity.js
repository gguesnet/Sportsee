export default class UserActivity {
  constructor({ data }) {
    this.id = data.id || data.userId;
    this.sessions = data.sessions;

    const array = [];

    data.sessions.forEach((item, i) => {
      array.push({ name: i + 1, kg: item.kilogram, Kcal: item.calories });
    });

    this.data = array;
  }
}
