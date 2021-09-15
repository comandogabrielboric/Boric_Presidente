<template>
<div class="modal">
	<div class="contenido-modal">
		<div class="titulo">
			<h1>realiza tu aporte aqui</h1>
			<h3>debes seguir los siguientes pasos</h3>
		</div>
		<div class="pasos">
			<ul>
				<li>paso 1</li>
				<li>paso 2</li>
				<li>paso 3</li>
				<li>paso 4</li>
			</ul>
		</div>
		<a class="btn-aportes" href="https://aportes.servel.cl/servel-aportes/inicio.xhtml">
			<button type="" class="btn-aportes">
				realiza tu aporte aqui
			</button>
		</a>
	</div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.modal {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.76);
	z-index: 90;
	backdrop-filter: blur(4px);
	overflow: hidden;
}
.contenido-modal {
	height: 80%;
	width: 80%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	background-color: #000;
}
.titulo, .pasos {
	color: chartreuse;
	padding: 10px;
	text-align: center;
}
.pasos {
	text-align: center;
	padding-left: 20px;
}
.btn-aportes {
	text-align: center;
}
</style>
