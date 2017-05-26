import Component from '@glimmer/component';

export default class ExpanseTable extends Component {
  delete(expense) {
    this.args.delete(expense);
  }
};
