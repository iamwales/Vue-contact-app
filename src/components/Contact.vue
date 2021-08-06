<template>
  <div v-if="currentContact" class="edit-form">
    <h4>Contacts</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentContact.name"
        />
      </div>

      <div class="form-group mt-3">
        <label for="phone">Phone Number</label>
        <input
          type="number"
          class="form-control"
          id="phone"
          v-model="currentContact.phone"
        />
      </div>
    </form>

    <div class="d-flex mt-3">
      <div class="mr-3">
        <button class="btn btn-danger mr-4" @click="deleteContact">
          Delete
        </button>
      </div>
      <div class="">
        <button type="submit" class="btn btn-primary" @click="updateContact">
          Update
        </button>
      </div>
    </div>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Contact...</p>
  </div>
</template>

<script>
import ContactDataService from "../services/ContactDataService";

export default {
  name: "contact",
  props: ["contact"],
  data() {
    return {
      currentContact: null,
      message: "",
    };
  },
  watch: {
    contact: function(contact) {
      this.currentContact = { ...contact };
      this.message = "";
    },
  },
  methods: {
    updateContact() {
      const data = {
        name: this.currentContact.name,
        phone: this.currentContact.phone,
      };

      ContactDataService.update(this.currentContact.key, data)
        .then(() => {
          this.message = "The contact was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteContact() {
      ContactDataService.delete(this.currentContact.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentContact = { ...this.contact };
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.mr-3 {
  margin-right: 10px;
}
</style>
