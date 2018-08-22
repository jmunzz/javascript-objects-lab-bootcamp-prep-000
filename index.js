var recipes = {
  prop: 1,
  prop2: 2
  };
function updateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
  }
  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  const newobj =
Object.assign({},object)
  delete newobj.prop
  return newobj
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.[key]
  return recipes
}
