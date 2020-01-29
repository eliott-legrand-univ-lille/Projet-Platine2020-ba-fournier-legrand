<template>
    <v-container fluid>
        <v-subheader>Résumé Comptabilité - De Septembre 2019 à Janvier 2020</v-subheader>
        <v-card
            class="mx-auto text-center"
            color="green"
            dark
            max-width="600"
        >            
            <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                    :value="value"
                    :labels="labels"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                >
                </v-sparkline>
            </v-sheet>
        </v-card>
        <v-spacer></v-spacer>
        <v-card class="mx-auto" max-width="600">
            <v-subheader>Janvier 2020</v-subheader>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Remboursement des sandwich des Déjeuners Sportifs</v-list-item-title>
                    <v-list-item-subtitle>Le: 02/01/20</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                        <p>+5€</p>
                    </v-list-item-action>
            </v-list-item>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    data: () => ({
        labels: [
        '09/19: +223€',
        '10/19: +242€',
        '11/19: +275€',
        '12/19: +210€',
        '01/20: +290€'
        ],
        value: [
            223,
            242,
            275,
            210,
            290
        ],      
    }),
}
</script>   