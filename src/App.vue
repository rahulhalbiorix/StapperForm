<template>
  <router-view @send-data-renderList="handelAddUser" :userEditprops="EditDP" :userEditvarprop="EditUs"
    @show-form="navigateToForm" @FilteredValue="SearchList" @editData="editDataUser" @deleteData="deleteDataUser"
    :users="UserList" :filteredUser="FilteredUserList"></router-view>
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
      FilteredUserList: []
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

    SearchList(data) {
      console.log(data)
      console.log(this.UserList)
      let FilterList = this.UserList.filter(item => {
        return (
          item.lastname.toLowerCase().includes(data.email.toLowerCase())||
          item.firstname.toLowerCase().includes(data.firstname.toLowerCase()) 
       
        )

      }


      )

      console.log("filtered list", FilterList)
      this.FilteredUserList = FilterList
      // console.log(this.FilteredUserList)
    }
  },

  mounted() {
    let getData = localStorage.getItem("USER_DATA");
    this.UserList = JSON.parse(getData) || [];
  }

}</script>
