<template>
    <div>
        <h1>Hello From Vue js App</h1>
        <h1>Hello From Vue js App</h1>

        <router-link :to="{ name: 'Add' }">Add NEW </router-link>

        <router-view />
    </div>
</template>
<script>
export default {};
</script>
