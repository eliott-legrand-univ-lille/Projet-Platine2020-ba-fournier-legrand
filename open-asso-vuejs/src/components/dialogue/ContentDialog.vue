<template>
    <v-row justify="center">
        <v-dialog @click:outside="closeDialog" v-model="dialog">
            <v-card>
                <v-toolbar dark :color="color">
                <v-spacer></v-spacer>
                <v-btn icon dark @click="closeDialog()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ message }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-dialog>
    </v-row>  
</template>
<script>
export default {
    props: {
        title: String,
        message: String,
        color: String,
        dialog: Boolean
    },
    methods: {
        closeDialog () {
            this.$emit('update:dialog', false)
        }
    },
}
</script>