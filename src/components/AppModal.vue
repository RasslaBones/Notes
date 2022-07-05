<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__wrapper" >
      <div class="modal__x" @click="isOpen = false">&times;</div>
      <div class="modal__title"><strong>Create a note</strong></div>
      <div class="modal__form flex-col">
        <div>
          <label for="Title">Title</label>
          <input v-model="titleContent" type="text" id="Title" placeholder="Title">
        </div>

        <div>
          <label for="textArea">Content</label>
          <textarea v-model="description" id="textArea" placeholder="What are we doing?" />
        </div>

        <div class="flex-col">
          <label for="date">Date</label>
          <input v-model="date" type="date" id="date" />
        </div>
        
        <div><strong>Select color</strong></div>
        <div class="modal__buttons">
          <div class="modal__button red-button" @click="choice = 'red', noteType = 'red'">Urgent</div>
          <div class="modal__button orange-button" @click="choice = 'orange', noteType = 'orange'">Normal</div>
          <div class="modal__button green-button" @click="choice = 'green', noteType = 'green'">Simple</div>
        </div>
        <div class="modal__create" @click="createNote" :class="choice + '-button'">Create</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  data() {
    return {
      choice: 'gray',
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
      this.choice = this.noteType
      this.isOpen = false
    },
  },
};
</script>
