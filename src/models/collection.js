'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const newRecord = await this.model.create(json);
      return newRecord;
    } catch (error) {
      console.log('error in the collection interface');
      return error;
    }
  }

  async read(id = null) {
    try {
      if(!id){
        const records = await this.model.findAll();
        return records;
      } else {
        const record = await this.model.findByPk(id);
        return record;
      }

    } catch (error) {
      console.log('error in the collection interface');
      return error;
    }
  }

  async update(json, id) {
    try {
      let updatedRecord = await this.model.update(json, {where: {id}});
      return updatedRecord;

    } catch (error) {
      console.log('error in the collection interface');
      return error;
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({where: {id}});
      return 'deleted';
    } catch (error) {
      console.log('error in the collection interface');
      return error;
    }
  }
}

module.exports = Collection;
