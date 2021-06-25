<template>
    <v-container>
        <v-card flat color="transparent" align="center" justify="center">
            <v-row align="center" justify="center">
                <v-col cols="12" :sm="smti" :lg="lgti">
                    <v-avatar :width="sizei" :height="sizei">
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col align="left" class="ml-5" cols="12" :sm="smt" :lg="lgt">
                    <h1 class="font-weight-medium">MAZAL Mathieu</h1>
                    <h3>Etudiant troisième années Bachelor ESDAC</h3>
                    <p><br>
                    Cette année j'ai eu l'opportunité de travailler sur différents types de projet comme la réhabilitation<br>
                    de musée symbolisant les œuvres présentes, une habitation dédiée aux personnes âgées,<br>
                    une habitation dans un espace réduit et son extérieur, un aménagement d'un espace<br>
                    symbolisant une marque et d’autres projets toujours plus variés.
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    smt: '8',
    lgt: '7',
    smti: '4',
    lgti: '2',
    sizei: '100%'
  })
})
</script>
