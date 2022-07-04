<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span class="close" @click="isOpen = false">&times;</span>
      <h3 class="modal__title">Create a note</h3>
      <div class="modal__name">
        <p>Title</p>
        <input v-model="titleContent" type="text" placeholder="Title"/>
      </div>
      <div class="modal__descr">
        <p>Content</p>
        <textarea
          cols="30"
          rows="10"
          placeholder="What are we doing ?"
          v-model="description"
        ></textarea>
      </div>
      <div class="modal__date">
        <p>Date</p>
        <div class="modal__date-wrapper">
          <input v-model="date" type="date" required="required" />
        </div>
      </div>
      <div class="modal__card card">
        <p>Select color</p>
        <div class="card__type">
          <button class="urgent btn" @click="noteType = 'red'">Urgent</button>
          <button class="normal btn" @click="noteType = 'orange'">
            Normal
          </button>
          <button class="simple btn" @click="noteType = 'green'">Simple</button>
        </div>
      </div>
      <button class="modal__create disabled" @click="createNote">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  data() {
    return {
      isOpen: false,
      titleContent: "",
      description: "",
      date: "",
      noteType: "",
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    createNote() {
        this.titleContent = this.titleContent == "" ? "My note" : this.titleContent
        this.description = this.description == "" ? "This is my note, hope I won't forget about it." : this.description
        this.date = this.date == "" ? new Date().toISOString().slice(0,10) : this.date
        this.noteType = this.noteType == "" ? "red" : this.noteType
        this.$store.dispatch("addNoteToUser", {
            title: this.titleContent,
            content: this.description,
            date: this.date,
            done: false,
            type: this.noteType,
      });
    },
  },
};
</script>
