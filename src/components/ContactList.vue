<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Contacts List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(item, index) in contacts"
          :key="index"
          @click="setActiveContact(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllContact">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentContact">
        <contact-details :contact="currentContact" @refreshList="refreshList" />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Contact...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactDataService from "../services/ContactDataService";
import ContactDetails from "./Contact.vue";

export default {
  name: "contact-list",
  components: { ContactDetails },
  data() {
    return {
      contacts: [],
      currentContact: null,
      currentIndex: -1,
    };
  },
  methods: {
    onDataChange(items) {
      let _contacts = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        console.log("data", data, item);
        _contacts.push({
          key: key,
          name: data.name,
          phone: data.phone,
        });
      });

      this.contacts = _contacts;
    },

    refreshList() {
      this.currentContact = null;
      this.currentIndex = -1;
    },

    setActiveContact(contact, index) {
      this.currentContact = contact;
      this.currentIndex = index;
    },

    removeAllContact() {
      ContactDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    ContactDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    ContactDataService.getAll().off("value", this.onDataChange);
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
