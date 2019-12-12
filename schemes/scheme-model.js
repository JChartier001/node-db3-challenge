 const db = require('../data/dbConfig.js');
 

 module.exports = {
     find,
     findById,
     findSteps,
     add,
     update,
     remove,
     addStep
 }

 function find() {
     return db('schemes')
 }

 function findById(id){
     return db('schemes')
     .where({id})
     .first()
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

 function addStep(step, schemeID){
    return db('steps')
    .insert(step, schemeID, "id")
    .then(ids => {
        const [id] = ids;
        return db('steps as s')
        .select('sc.scheme_name as Name', 's.step_number as Step Number',  's.instructions as Instructions')
        .join("schemes as sc", "s.scheme_id", "sc.id")
        .where("scheme_id", id)
    })
 }


 function update(changes, id) {
   return db('schemes')
      .where({ id })
      .update(changes, "id")
      .then(id => {
          return db('schemes')
          .where({id})
          .first()
      });
 }

 function remove(id){
     return(
         db('schemes')
         .where({id})
         .del()
     );
 }

