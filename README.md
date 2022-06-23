# Endereço da API em produção

```
https://e-commerce-project-api.herokuapp.com
```

# instalação e utilização

<h4>Banco de dados</h4>

Para rodar localmente é necessário ter um servidor de banco de dados Postgres.
Crie um database com o nome "e-commerce-api".
O acesso a esse banco de dados deve ser feito com username: postgres, password:postgres, port:5432

<h4>Migrations</h4>

Após criar o banco de dados devemos rodar as migrations para crias as tabelas. Para isso rode comando no terminal dentro da pasta do projeto:

```
npm run migration:run
```

<h4>Rodar o servidor</h4>
Por fim para rodar o servidor rode o comando:

```
npm run start
```

# Descrição da API

Localmente a API irá rodar na seguinte URL base:

```
http://localhost:3333
```

Aqui serão descritas as rotas da API com exemplos.

<h4>Rota para cadastrar uma função de usuário (role)</h4>

Abaixo temos um exmplo de utilização da rota para cadastrar uma role de aluno (Student).

```sh
POST /roles

REQUEST

{
	"name":"Student"
}
```

Em seguida temos a resposta.

```sh
POST /roles

RESPONSE 201

{
	"name": "Student",
	"id": "9bde2d8e-684d-4da0-99c4-09529989f6bd"
}
```

<h4>Rota para listar todas as roles</h4>

Em seguida temos o exemplo de resposta para a requisição de todas as roles

```sh
GET /roles

RESPONSE 200

[
	{
		"id": "5be3f402-0c14-4ece-90a1-121bebae2a00",
		"name": "Administrator"
	},
	{
		"id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
		"name": "Student"
	}
]
```

<h4>Rota para cadastrar usuário (user)</h4>
Para cadastrar um usuário é necessário ter pelo menos uma role cadastrada.
Abaixo está um exemplo de requisição para cadastro de usuário.

```sh
POST /users

REQUEST

{
  "name":"Suellen",
	"last_name":"Camargo",
	"birthday_date":"16/08/1998",
	"gender_identity":"Cisgênero",
	"sexual_orientation":"Bissexual",
	"race":"Caucasiano",
	"email":"suellen.priscilla.camargo@gmail.com",
	"password":"123456",
	"role_id":"9bde2d8e-684d-4da0-99c4-09529989f6bd"
}
```

Em seguida temos a resposta.

```sh
POST /users

RESPONSE 201

{
	"name": "Suellen",
	"last_name": "Camargo",
	"gender_identity": "Cisgênero",
	"sexual_orientation": "Bissexual",
	"race": "Caucasiano",
	"birthday_date": "16/08/1998",
	"email": "suellen.priscilla.camargo@gmail.com",
	"password": "123456",
	"role_id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
	"id": "f4109192-70b8-4b90-9f15-a93957283339"
}
```

<h4>Rota para login </h4>

Abaixo temos um exemplo de requisição de login.

```sh
POST /login

REQUEST

{
	"email":"suellen.priscilla.camargo@gmail.com",
	"password":"123456"
}
```

Em seguida temos a resposta

```sh
POST /login

RESPONSE 200

{
	"user": {
		"id": "f4109192-70b8-4b90-9f15-a93957283339",
		"name": "Suellen",
		"last_name": "Camargo",
		"birthday_date": "16/08/1998",
		"gender_identity": "Cisgênero",
		"sexual_orientation": "Bissexual",
		"race": "Caucasiano",
		"email": "suellen.priscilla.camargo@gmail.com",
		"role_id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
		"role": {
			"id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
			"name": "Student"
		}
	},
	"jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0MTA5MTkyLTcwYjgtNGI5MC05ZjE1LWE5Mzk1NzI4MzMzOSIsInJvbGUiOnsiaWQiOiI5YmRlMmQ4ZS02ODRkLTRkYTAtOTljNC0wOTUyOTk4OWY2YmQiLCJuYW1lIjoiU3R1ZGVudCJ9LCJpYXQiOjE2NTU5OTE0Mjl9.n3bECh1gGVz6zXJCFclT2MwfqTyl_PSO-ZVo_THov1o"
}
```

<h4>Rota para cadastrar um curso (course) </h4>

Abaixo temos um exemplo de requisição para cadastro de curso

```sh
POST /courses

REQUEST

{
	"course_name":"Javascript",
	"teacher_name": "Suellen Camargo",
	"description": "O curso mais avançado de Javascript",
	"duration": "6 meses",
	"price": 10000,
"photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
}
```

Em seguida temos a resposta.

```sh
POST /courses

REQUEST 201

{
	"course_name": "Javascript",
	"teacher_name": "Suellen Camargo",
	"description": "O curso mais avançado de Javascript",
	"duration": "6 meses",
	"price": 10000,
	"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
	"id": "93624a03-1a4b-4d65-b2f2-2d814400fe62"
}
```

<h4>Rota para listagem de cursos (courses) </h4>

Abaixo temos um exemplo de resposta para requisição de listagem de cursos

```sh

GET /courses

RESPONSE 200

[
	{
		"id": "93624a03-1a4b-4d65-b2f2-2d814400fe62",
		"course_name": "Javascript",
		"price": 10000,
		"duration": "6 meses",
		"teacher_name": "Suellen Camargo",
		"description": "O curso mais avançado de Javascript",
		"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
	},
	{
		"id": "a45ec31f-3c89-4986-a544-103a55ffd275",
		"course_name": "NodeJS",
		"price": 5000,
		"duration": "1 ano",
		"teacher_name": "Mayara",
		"description": "Curso básico de NodeJS",
		"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
	}
]
```

<h4>Rota para registrar cursos ao usuário</h4>

Na requisição a seguir podemos registrar um ou mais cursos ao usuário.
Devemos informar o id do usuário e os ids dos cursos a serem registrados ao usuário.
Veja um exemplo do registro de 2 cursos.

```sh

POST /users/courses

REQUEST

{
	"user_id":"f4109192-70b8-4b90-9f15-a93957283339",
	"courses_id":["93624a03-1a4b-4d65-b2f2-2d814400fe62", "a45ec31f-3c89-4986-a544-103a55ffd275"]
}
```

Em seguida temos a resposta

```sh
POST /users/courses

RESPONSE 201

{
	"id": "f4109192-70b8-4b90-9f15-a93957283339",
	"name": "Suellen",
	"last_name": "Camargo",
	"birthday_date": "16/08/1998",
	"gender_identity": "Cisgênero",
	"sexual_orientation": "Bissexual",
	"race": "Caucasiano",
	"email": "suellen.priscilla.camargo@gmail.com",
	"password": "123456",
	"role_id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
	"courses": [
		{
			"id": "93624a03-1a4b-4d65-b2f2-2d814400fe62",
			"course_name": "Javascript",
			"price": 10000,
			"duration": "6 meses",
			"teacher_name": "Suellen Camargo",
			"description": "O curso mais avançado de Javascript",
			"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
		},
		{
			"id": "a45ec31f-3c89-4986-a544-103a55ffd275",
			"course_name": "NodeJS",
			"price": 5000,
			"duration": "1 ano",
			"teacher_name": "Mayara",
			"description": "Curso básico de NodeJS",
			"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
		}
	]
}
```

<h4>Rota para deletar o curso de um usuário</h4>

Para deletar o curso de um usuário devemos informar o id do usuário e o id do curso a ser deletado. Veja um exemplo.

```sh
PATCH /users/courses

REQUEST

{
	"user_id":"f4109192-70b8-4b90-9f15-a93957283339",
	"course_id":"93624a03-1a4b-4d65-b2f2-2d814400fe62"
}
```

Em seguida temos a seguinte resposta.

```sh

PATCH /users/courses

RESPONSE 200

{
	"message": "Curso Javascript deletado do usuário Suellen"
}
```

<h4>Rota para pegar as informações de um usuário</h4>

Para pegar as informações de um usuário devemos informar o id do usuário na requisição da URL. Veja um exemplo de uma resposta da requisição.

```sh
GET /users/f4109192-70b8-4b90-9f15-a93957283339

RESPONSE 200

{
	"id": "f4109192-70b8-4b90-9f15-a93957283339",
	"name": "Suellen",
	"last_name": "Camargo",
	"birthday_date": "16/08/1998",
	"gender_identity": "Cisgênero",
	"sexual_orientation": "Bissexual",
	"race": "Caucasiano",
	"email": "suellen.priscilla.camargo@gmail.com",
	"password": "123456",
	"role_id": "9bde2d8e-684d-4da0-99c4-09529989f6bd",
	"courses": [
		{
			"id": "a45ec31f-3c89-4986-a544-103a55ffd275",
			"course_name": "NodeJS",
			"price": 5000,
			"duration": "1 ano",
			"teacher_name": "Mayara",
			"description": "Curso básico de NodeJS",
			"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
		}
	]
}
```