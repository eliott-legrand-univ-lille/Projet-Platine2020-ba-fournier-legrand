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
                <v-list-item two-line>
                    <v-list-item-content>
                        <h4 style="word-break:normal" class="text-center headline mb-1">{{ name }}</h4>
                        <v-divider></v-divider>
                        <p>Description: {{ description }}</p>
                        <p></p>
                        <p>Le: {{ date }}</p>
                        <p></p>
                        <p>À: {{address}}</p>

                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-dialog>
    </v-row>  
</template>
<script>
export default {
    props: {
        name: String,
        description: String,
        color: String,
        date: String,
        address: String,
        dialog: Boolean
    },
    methods: {
        closeDialog () {
            this.$emit('update:dialog', false)
        }
    },
}
</script>