/* eslint-env node */
module.exports = {
  description: '',
  normalizeEntityName(){},
  afterInstall(){
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cp-validations' },
        { name: 'ember-font-awesome' },
        { name: 'ember-pikaday' },
        { name: 'ember-power-select' },
        { name: 'ember-toggle' },
      ],
      blueprintOptions: {
        saveDev: true
      },
    }).then(() => {
      return this.addPackagesToProject([
        { name: 'adminlte' },
      ]);
    });
  },
};
