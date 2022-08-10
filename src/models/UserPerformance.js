export default class UserPerformance {
  constructor({ data }) {
    this.id = data.id || data.userId;
    this.kind = data.kind;

    const array = [];

    for (const property in data.kind) {
      data.data.forEach((item) => {
        if (item.kind === parseFloat(property)) {
          return array.push({
            subject: data.kind[parseFloat(property)],
            A: item.value,
            fullMark: 150,
          });
        }
      });
    }

    this.data = array;
  }
}
