import data from "../data/foods.json";
class DataHandler {
  constructor() {
    this.data = data;
  }

  values = () => {
    return this.data;
  };

  searchBy = term => {
    let response = this.data.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(term);
    });

    console.log(response);
    return response;
  };

  addItem = item => {
    this.data.push(item);
  };
}
export default DataHandler;
