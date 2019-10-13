<template>
    <div class="wrapper">
       <Header/>
        <Asiderbar/>
       <router-view/>
    </div>
</template>

<style>

</style>

<script>
    import Header from "../../components/content/layout/header/Header";
    import Asiderbar from "../../components/content/layout/aside/Asidebar";
    export default {
        name: "Index",
        components: { Asiderbar, Header}
    }
</script>