const DbFunction = (db) =>{
   
	const insertUsername= async(score) =>{
      await db.none('insert into user_app (ursename, current_score) values($1,$2);',[])
   }
   const checkDuplicate = async(username) =>{
      return await db.oneOrNone('select count(*) from user_app where ursename=$1',[username])

}
   const getHighscore= async()=>{
    return await db.manyOrNone('SELECT current_score(mark) as max_mark FROM `user_app` ')
 }
 const getcurrentScore= async()=>{
  return await db.manyOrNone('SELECT  current_score FROM  user_app')
  
}  
const clearUsers = async () => {   
 await db.none('Delete FROM user_app')
}


 return{
   insertUsername,
   checkDuplicate,
   getHighscore,
   getcurrentScore,
   clearUsers
}
}
module.exports = DbFunction