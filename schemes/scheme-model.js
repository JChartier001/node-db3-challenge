 const db = require('../data/dbConfig.js');
 

 module.exports = {
     find,
     findById,
     findSteps,
     add,
     update,
     remove
 }

 function find() {
     return db('schemes')
 }

 function findById(id){
     return db('schemes')
     .where({id})
 }

 function findSteps(id){
    return db('steps as s')
    .select('sc.scheme_name as Name', 's.step_number as Step Number',  's.instructions as Instructions')
    .join("schemes as sc", "s.scheme_id", "sc.id")
    .where("scheme_id", id)
 }

 function add(scheme){
     return db('schemes')
     .insert(scheme, "id")
     .then(ids => {
         const [id] = ids;
         return findById(id);
     })
 }

 function update(changes, id) {
   return db('schemes')
      .where({ id })
      .update(changes)
      .then(id => {
          return findById(id)
      });
 }

 function remove(id){
     return(
         db('schemes')
         .where({id})
         .del()
     );
 }

