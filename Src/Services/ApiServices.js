const {EventsData, ForyouData} = require('../Utils/DummyData');

export default class ApiServices {
  static async getEventData(title) {
    return new Promise((res, rej) => {
      const newArr = EventsData.data.filter(e => {
        return e.category == title;
      });
      setInterval(() => {
        res(newArr);
      }, 1500);
    });
  }
  static async getForyouData(title) {
    return new Promise((res, rej) => {
      const newArr = ForyouData.data.filter(e => {
        return e.category == title;
      });
      setInterval(() => {
        res(newArr);
      }, 1500);
    });
  }
}
