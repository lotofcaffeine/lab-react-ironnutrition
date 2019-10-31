import data from "../data/foods.json";
class DataHandler {
  constructor() {
    this.data = data;
  }
  values = () => {
    return this.data;
  };
  delete = food => {
    let index = this.data.findIndex(item => {
      return item.name === food.name && item.calories === food.calories;
    });
    this.data.splice(index, 1);
    console.log(this.data);
  };

  addFood = item => {
    this.data.push(item);
  };

  searchBy = term => {
    if (term === "") {
      return this.data;
    }
    debugger;
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
