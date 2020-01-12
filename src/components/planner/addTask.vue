<template>
  <form>
    <div class="flex flex-1 items-center">
      <label>Task</label>
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Jane Doe"
        aria-label="Full name"
      />
      <label>Catagorie</label>
      <input
        class="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Jane Doe"
        aria-label="Full name"
      />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >Sign Up</button>
      <button
        class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
        type="button"
      >Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
