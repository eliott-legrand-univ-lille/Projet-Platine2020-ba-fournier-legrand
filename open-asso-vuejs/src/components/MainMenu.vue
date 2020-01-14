<!--toroute
    tostyle-->
<template>        
    <v-card class="mx-auto"
        style="width:500px; max-width: 550px;">

    <v-row 
        v-for="k in 2" 
        :key="k">
        <v-col v-for="n in 3"    
            :key="n">
            <v-card class="d-flex justify-space-around align-center flex-column"
                style="height:200px">
                <v-card-title v-text="Menu[n  - 1 + 3 * (k - 1)].label"></v-card-title>
                <v-icon x-large v-text="Menu[n  - 1 + 3 * (k - 1)].icon"></v-icon>
            </v-card>
        </v-col>
            
    </v-row>

    </v-card>
</template>

<script>
export default {
data: () => ({
            Menu :[
                {label : 'Membres', icon : 'mdi-account-group'},
                {label : 'Sport', icon : 'mdi-medal'},
                {label : 'Evènements', icon : 'mdi-calendar-month-outline'},
                {label : 'Actualités', icon : 'mdi-newspaper-variant-multiple-outline'},
                {label : 'Comptabilité', icon : 'mdi-wallet-outline'},
                {label : 'Divers', icon :'mdi-dots-horizontal-circle-outline'},
            ]
        }),
    }
</script>