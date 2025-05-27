<template>
  <router-view @send-data-renderList="handelAddUser" :userEditprops="EditDP" :userEditvarprop="EditUs"
    @show-form="navigateToForm"  @editData="editDataUser" @deleteData="deleteDataUser"
    :users="UserList" ></router-view>
</template>
<script>
import List from './components/List.vue';

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
      if (!UserData['edited']) {
        this.UserList.push(UserData);
      } else {
        let index = this.UserList.findIndex(Obj => Obj.id == UserData.id)
        if (index > -1) this.UserList.splice(index, 1, UserData);

      }
      this.EditDP = {}

      localStorage.setItem("USER_DATA", JSON.stringify(this.UserList));

      this.$router.push('/')
    },
    deleteDataUser(ud) {

      let res = confirm("Are you sure you want to delete the data!...");
      if (res) {
        let newArr = this.UserList.filter(obj => obj.id != ud);
        this.UserList = newArr
        localStorage.setItem("USER_DATA", JSON.stringify(this.UserList));
      }
    },
    editDataUser(id) {
      this.EditUs = true;
      this.Showstepper = true;
      let EditedData = this.UserList.find(obj => obj.id === id);
      this.EditDP = EditedData;
      this.navigateToForm()
    },
    navigateToForm() {
      this.$router.push('/form');
    },

  },

  mounted() {
    let getData = localStorage.getItem("USER_DATA");
    this.UserList = JSON.parse(getData) || [];

  }
}</script>
