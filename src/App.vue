<template>
  <Stepper v-if="Showstepper" @send-data-renderList="handelAddUser"  :userEditprops="EditDP"   ></Stepper>
  <List v-else @show-form="Showstepper = !Showstepper"   @editData="editDataUser"      @deleteData="deleteDataUser"    :users="UserList"></List>
</template>
<script>
export default {
  data() {
    return {
       Showstepper:false, 
       UserList:[],
       EditDP:{}
    }
  },


  methods:{
    handelAddUser(UserData){
      console.log('UserData: ', UserData);
      
      this.UserList.push(UserData);
     console.log("User list data array " , this.UserList  )

      localStorage.setItem("USER_DATA" , JSON.stringify(this.UserList) );


      this.Showstepper = false
    },
    deleteDataUser(ud){
      console.log("delete data is worked" , ud );
        let newArr =  this.UserList.filter(obj => obj.id != ud );        
        console.log("new array after delete method" , newArr);
        this.UserList = newArr
        localStorage.setItem("USER_DATA" , JSON.stringify(this.UserList) );
    },
    editDataUser(id , param1 ){
           console.log("editDatauser work" , id , param1 );
           this.Showstepper = true;
           
            let EditedData = this.UserList.find( obj => obj.id == id);
            console.log(EditedData);

            this.EditDP = {...EditedData , action:param1} 

            console.log(this.EditDP)
         
    }
  },


mounted(){
        console.log("Mounted hook workd d d    ")
 
         let getData = localStorage.getItem("USER_DATA");

          console.log(getData);

          this.UserList = JSON.parse(getData) || [];
          console.log("render list" , this.UserList);
}

}</script>

