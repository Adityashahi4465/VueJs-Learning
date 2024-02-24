<template>
    <div>
        <h2>Popup</h2>
        <button @click="$emit('close')">Close Popup</button>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    emits: {
        close: (name) => {
            if (!name) {
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>