class FoodsHandler {
  constructor() {
    this.data = [];
  }

  values = () => {
    return this.data;
  };

  delete = food => {
    let index = this.data.findIndex(item => {
      return item.name === food.name && item.calories === food.calories;
    });
    this.data.splice(index, 1);
  };
  addFood = food => {
    console.log(food);
    let index = this.data.findIndex(item => {
      return item.name === food.name && item.calories === food.calories;
    });
    console.log(index);
    if (index === -1) {
      this.data.push(food);
    } else {
      this.data[index].value =
        Number(this.data[index].value) + Number(food.value);
    }
  };
}
export default FoodsHandler;
