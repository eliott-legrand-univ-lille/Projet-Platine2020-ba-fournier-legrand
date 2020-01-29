<template>
    <v-container fluid>
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
    </v-container>
</template>

<script>
export default {
    data: () => ({
        labels: [
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
        'Janvier'
        ],
        value: [
            423,
            442,
            675,
            510,
            590
        ],      
    }),
}
</script>   