import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/form-select';

export default Component.extend({
  layout,
  init(){
    this._super(...arguments);
    let prop = this.get(`model.${this.get('prop')}`);
    let selected = this.get('options').find(el => el.value === prop);
    this.set('selected', selected);
  },
  classNames: ['form-group', 'form-for-select'],
  classNameBindings: ['propName'],
  label: null,
  options: computed(function(){ return new Array; }),
  prop: null,
  disabled: false,
  name: 'name',
  search: undefined,
  searchField: 'name',
  selected: null,
  renderInPlace: false,
  dropdownClass: '',
  propName: computed(function(){
    return `model-${this.get('prop')}`;
  }),
  actions: {
    onSelect(value){
      this.set('selected', value);
      this.set(`model.${this.get('prop')}`, value.value);
    },
  },
});
