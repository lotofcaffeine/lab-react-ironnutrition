class FoodsHandler {
  constructor() {
    this.data = [];
  }

  values = () => {
    return this.data;
  };

  addItem = item => {
    this.data.push(item);
    //    const newArray =  this.data.reduce((result, item) => {
    //     if (result.indexOf(item.name) === -1) {
    //       result.push(item);
    //     }else{
    //     }
    //     return result;
    //   }, []);
  };
}
export default FoodsHandler;
