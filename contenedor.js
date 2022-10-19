import knex from "knex"

class DB_Container{
    // get , post , put , delete

    constructor(config , table){
        this.knex = knex(config)
        this.table = table
    }

    // GET
    async getAll(){
        try{
            this.knex.select('*').from(this.table)
        }
        catch (e){
            throw new Error(e);
        }
        
    }

    async getbyId(id) {
        try {
          return await this.knex.select("*").from(this.table).where({ id });
        } catch (e) {
          throw new Error(e);
        }
      }


    // PUT
    async updateEntry(obj, id) {
        try {
        return await this.knex.from(this.table).where("id", id).update(obj);
        } catch (e) {
        throw new Error(e);
        }
    }

    // POST

    async InsertValue(obj) {
        try {
        return await this.knex.insert(obj).into(this.table);
        } catch (e) {
        throw new Error(e);
        }
    }

    // DELETE

    async deleteEntry(id) {
        try {
        return await this.knex.from(this.table).where({ id }).del();
        } catch (e) {
        throw new Error(e);
        }
    }

} 

export default DB_Container