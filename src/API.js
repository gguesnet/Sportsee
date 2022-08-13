import UserActivity from "./models/UserActivity";
import UserAverage from "./models/UserAverage";
import UserDatas from "./models/UserDatas";
import UserPerformance from "./models/UserPerformance";

export class ApiService {
  constructor(id) {
    this.baseURL = "http://localhost:3000/";
    this.id = id;
    this.extension = "";
    if (this.id === "mock") {
      this.baseURL = "/datas/";
      this.extension = ".json";
    }
  }

  async getUserActivity() {
    const response = await fetch(
      `${this.baseURL}user/${this.id}/activity${this.extension}`
    );
    const result = await response.json();
    const end = new UserActivity(result);
    return end;
  }

  async getUserAverage() {
    const response = await fetch(
      `${this.baseURL}user/${this.id}/average-sessions${this.extension}`
    );
    const result = await response.json();
    const end = new UserAverage(result);
    return end;
  }
  async getUserDatas() {
    let response;
    if (this.id === "mock") {
      response = await fetch(
        `${this.baseURL}user/${this.id}/${this.id}${this.extension}`
      );
    } else {
      response = await fetch(`${this.baseURL}user/${this.id}${this.extension}`);
    }
    const result = await response.json();
    const end = new UserDatas(result);
    return end;
  }

  async getUserPerformance() {
    const response = await fetch(
      `${this.baseURL}user/${this.id}/performance${this.extension}`
    );
    const result = await response.json();
    const end = new UserPerformance(result);
    return end;
  }
}
