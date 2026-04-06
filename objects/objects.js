const umbrella = {
    color:"pink",
    isOpen:false,
    open:function(){
        if(umbrella.isopen===true){
            return "The umbrella is already oopened!";
        }
        else{
            umbrella.isOpen = true;
            return "Julia opens the umbrella";
            
        }
        
    }
}


//-------------------------------------------

const sister ={
    name:'Sarah',
    age:23,
    parents:['Alic','Andy'],
    siblings:['Julia'],
    favColor:"purple",
    pets:true,
    paintPicture: function(){
        return "Sarah paints!";
    }
}

   console.log(sister.paintPicture() +'\n sis name is '+ sister.name);
   console.log(sister)

 //-------------------------------------

 const user = {
   email: "user@example.com",
   firstName: "first",
   lastName: "last",
 };
 console.log(user["email"])