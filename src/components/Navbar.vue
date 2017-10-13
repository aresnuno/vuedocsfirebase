<template>
    <div class="head">
        <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="">
                <img src="../assets/bulma-logos.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <!-- <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
            </div> -->
        </div>
        </nav>
        <hr class="navbar-divider">
    </div>    
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light{
    background-color: turquoise;
    width: 100%;
}
</style>
