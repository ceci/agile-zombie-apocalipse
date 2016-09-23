var professions = ['dev','designer','medico','advogado','professor','frentista','vendedor','manicure','psicólogo','mecânico','consultor de seguros','encanador','instalador de tv a cabo','chaveiro','empresário','estudante','relojoeiro','arquiteto','motorista de uber','astrologo','artista'];

var hobbies = ['escalada' ,'yoga' ,'airsoft' ,'danca' ,'desmontar coisas' ,'baladeiro' ,'musica' ,'meditacao' ,'futebol' ,'esportes radicais' ,'fotografia' ,'cozinhar' ,'artesanato' ,'colecionar selos' ,'ler curiosidades' ,'mentir' ,'counter striker' ,'surfe' ,'skate' ,'correr' ,'pintar' ,'aprender linguas' ,'criar plantas' ,'mímica' ,'filmes' ,'pegar pokemon' ,'jogos de bar' ,'construir robos' ,'escoteiro' ,'parkour' ,'tocar instrumento' ,'pilotar drones' ,'desafios de lógica' ,'astronomia' ,'ufologia' ,'tunning de carros' ,'criar animais' ,'costurar' ,'organizar coisas' ,'acampar' ,'velejar' ,'Crossfit' ,'fazer drinks' ,'slackline'];

var handicap = ['miope', 'vegetariano', 'asma', 'canhoto', 'diabetico', 'daltonico', 'mania por limpeza', 'medo de insetos', 'claustrofobia', 'labirintite', 'medo de altura', 'perda de memoria recente', 'rinite', 'dupla personalidade', 'comportamente anti-social', 'analfabeto', 'sedentário', 'não fala a lingua do grupo', 'hipocondríaco', 'usa crocs', 'pacifista', 'acumulador', 'crianca'];


function aleatorio (lista) {
	var entre0e1 = Math.random();
	var posicao = Math.floor((entre0e1 * lista.length) % lista.length);
	var escolhido = lista[posicao];
	lista.splice(posicao, 1);
	return escolhido;
}

var personagens = [];

for (var i = 0; i < 18; i++) {
	var personagem = {};
	personagem.profissao = aleatorio(professions);
	personagem.hobby = aleatorio(hobbies);
	personagem.outroHobby = aleatorio(hobbies);
	personagem.handicap = aleatorio(handicap);
	personagens.push(personagem);
};

personagens.forEach(function (p) {
	console.log(p);
});