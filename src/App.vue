<template>
  <router-view 
   @send-data-renderList="handelAddUser" :userEditprops="EditDP" :userEditvarprop="EditUs"
     @show-form="navigateToForm"
   @editData="editDataUser" @deleteData="deleteDataUser" :users="UserList"
  ></router-view>
</template>
<script>
export default {
  data() {
    return {
      Showstepper: false,
      UserList: [],
      EditDP: {},
      EditUs: false,
    }
  },


  methods: {
    handelAddUser(UserData) {

      console.log('UserData: ', UserData);

      if (!UserData['edited']) {
        this.UserList.push(UserData);
      } else {
        let index = this.UserList.findIndex(Obj => Obj.id == UserData.id)
        if (index > -1) this.UserList.splice(index, 1, UserData);

      }
      
      console.log("User list data array ", this.UserList)
      this.EditDP = {}
      
      localStorage.setItem("USER_DATA", JSON.stringify(this.UserList));
      
       this.$router.push('/')
    },
    deleteDataUser(ud) {
      
      let res = confirm("Are you sure you want to delete the data!...");

      if (res) {
        console.log("delete data is worked", ud);
        let newArr = this.UserList.filter(obj => obj.id != ud);
        console.log("new array after delete method", newArr);
        this.UserList = newArr
        localStorage.setItem("USER_DATA", JSON.stringify(this.UserList));

      }

    },
    editDataUser(id) {
      this.EditUs = true;
      console.log(this.EditUs, 'user variable');
      console.log("editDatauser work", id);
      this.Showstepper = true;
      let EditedData = this.UserList.find(obj => obj.id === id);
      console.log(EditedData);
      this.EditDP = EditedData;
      console.log(this.EditDP)
    },
    navigateToForm(){
      
      this.$router.push('/form');
    }
  },


  mounted() {
    console.log("Mounted hook workd d d    ");



    let getData = localStorage.getItem("USER_DATA");

    this.UserList = JSON.parse(getData) || [];
    console.log("render list", this.UserList);
  }

}</script>
