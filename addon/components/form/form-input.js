import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/form/form-input';

export default Component.extend({
  layout,
  classNames: ['form-for-input'],
  classNameBindings: ['propName'],
  placeholder: null,
  prop: null,
  label: null,
  type: 'text',
  step: 1,
  max: null,
  min: null,
  propName: computed(function(){
    return `model-${this.get('prop')}`;
  }),
});
