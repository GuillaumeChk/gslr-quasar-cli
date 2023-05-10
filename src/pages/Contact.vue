<template>
  <q-page>
    <h4>Contact</h4>


    <h6>GSLR Agencements</h6>
    <p>
					
					<address class="address">
						
						<q-icon name="location_city" /> 2000 Neuchâtel, SUISSE <br> 
						<div class="q-pa-xs q-gutter-sm">
							<q-btn rounded unelevated  class="bg-brand text-white" :icon="addressCopied ? 'assignment_turned_in' : 'content_copy' "  @click="copyAddress('2000 Neuchâtel, SUISSE')"  > Copier</q-btn>
							<q-btn rounded unelevated class="bg-brand text-white" icon="directions" href="https://goo.gl/maps/LDFn9N6ciP9rVptH7"  target="_blank" > Google Maps</q-btn>
						</div>
						<q-icon name="email" /> E-Mail : 
						<a href="mailto:info@desfees.fr">contact@gslr.ch</a><br />
						<q-icon name="phone" /> Téléphone : 
						<a href="tel:+41">+41 XXXXXXXXX</a><br />
            <q-btn
						rounded
						unelevated
						label="Appeler"
						class="bg-brand text-white" href="tel:+41"
						icon="call"
						/>
					</address>
				</p>

    <h6>Horaires d’ouverture :</h6>

    <p>Du lundi au vendredi</p>
    <p>De 7h30 à 12h00 et de 13h15 à 17h30</p>

    <h4 class="q-py-lg text-uppercase text-weight-light">Carte</h4>
    <div class="map-container">
      <iframe
        class="responsive-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43544.58800501132!2d6.907282905737782!3d46.990432859422086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e09ee39924c6d%3A0x9c3e1f46415c66f3!2s2000%20Neuch%C3%A2tel%2C%20Suisse!5e0!3m2!1sfr!2sfr!4v1683550315281!5m2!1sfr!2sfr"
        width="100%"
        height="70%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </q-page>
</template>

<script setup>
import { copyToClipboard } from 'quasar'
import { ref } from 'vue';

let addressCopied = ref(false);

function copyAddress(text) {
	copyToClipboard(text)
	.then(() => {
    // success!
	console.log("copié !")
	addressCopied.value = true;
	})
	.catch(() => {
		// fail
		console.log("fail !")
		
	})
}
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  padding-top: 100%; /* Aspect Ratio */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70%;
  border: none;
}

.address{
	font-style: normal;
}

a{
	text-decoration: none;
	color: #121212;
}
</style>
