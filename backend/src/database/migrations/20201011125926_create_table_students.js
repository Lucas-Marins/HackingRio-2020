exports.up = function(knex) {
    return knex.schema.createTable('students', function(table){
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('period').notNullable();
      table.string('group').notNullable();
        
     
   })
  };
  
  exports.down = function(knex) {
  return knex.schema.dropTable('students')
  };
  


  
