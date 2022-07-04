<template>
  <div class="modal" v-if="isOpen">
    <!-- <div class="modal"> -->
    <div class="modal-content">
      <span class="close" @click="isOpen = false">&times;</span>
      <!-- <span class="close" @click="$emit('closeModal')">&times;</span> -->
      <div class="modal-content__wrapper">
        <h3 class="modal__title">Create a note</h3>
        <div class="modal__name">
          <p>Title</p>
          <input type="text" placeholder="Title" />
        </div>
        <div class="modal__descr">
          <p>Content</p>
          <textarea
            cols="30"
            rows="10"
            placeholder="What are we doing ?"
          ></textarea>
        </div>
        <div class="modal__date">
          <p>Date</p>
          <div class="modal__date-wrapper">
            <input type="date" required="required" />
          </div>
        </div>
      </div>

      <div class="modal__card card">
        <p>Select color</p>
        <div class="card__type">
          <button class="urgent btn">Urgent</button>
          <button class="normal btn">Normal</button>
          <button class="simple btn">Simple</button>
        </div>
      </div>
      <button class="modal__create disabled">Create</button>
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
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
  },
};
</script>
