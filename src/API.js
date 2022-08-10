import UserActivity from "./models/UserActivity";
import UserAverage from "./models/UserAverage";
import UserDatas from "./models/UserDatas";
import UserPerformance from "./models/UserPerformance";

export class ApiService {
  constructor() {
    this.baseURL = "http://localhost:3000/";
  }

  async getUserActivity(id) {
    const response = await fetch(`${this.baseURL}user/${id}/activity`);
    const result = await response.json();
    const end = new UserActivity(result);
    return end;
  }

  async getUserAverage(id) {
    const response = await fetch(`${this.baseURL}user/${id}/average-sessions`);
    const result = await response.json();
    const end = new UserAverage(result);
    return end;
  }
  async getUserDatas(id) {
    const response = await fetch(`${this.baseURL}user/${id}`);
    const result = await response.json();
    const end = new UserDatas(result);
    return end;
  }

  async getUserPerformance(id) {
    const response = await fetch(`${this.baseURL}user/${id}/performance`);
    const result = await response.json();
    const end = new UserPerformance(result);
    return end;
  }
}
