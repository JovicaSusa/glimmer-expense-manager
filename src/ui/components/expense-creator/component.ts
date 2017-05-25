import Component, { tracked } from '@glimmer/component';

export default class ExpanseCreator extends Component {
  @tracked date: any;
  @tracked title: any;
  @tracked amount: any;

  create() {
    const expense = {
      date: this.date,
      amount: this.amount,
      title: this.title
    };
    this.args.add(expense);
  };

  setDate(event) {
    this.date = event.target.value;
  };

  setTitle(event) {
    this.title = event.target.value;
  };

  setAmount(event) {
    this.amount = event.target.value;
  }
};
