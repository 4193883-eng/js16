
object = {
    name:"Vsevolod",
    surName:"Lavrusha",
    phoneOS: "iOS",
    school: 'Lyceum \"Intellect\"',
    age: 11,
    countriesBeenTo: ["poland", "hanguray", "spain", "turkey"],
    country: "Ukraine",
    lastLogOnTime: "17:59",
    function(){
        console.log("im printing myself!!!!! ",object)
    }
}
function print(obj){
    console.log(obj)
}
print(object)







let person = {
    name: "ABIBUS",
    setNewName: function(newName){
        if (typeof newName == 'string'){
            this.name = newName
        }
    }
}
