// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD6bO3bBNaPvSKTI4TPP5_SI6rd8jJDhbM',
	authDomain: 'boric-presidente.firebaseapp.com',
	projectId: 'boric-presidente',
	storageBucket: 'boric-presidente.appspot.com',
	messagingSenderId: '246823567185',
	appId: '1:246823567185:web:de7faa47dc86300e7d5d70',
	measurementId: 'G-P14QSGM0R1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
