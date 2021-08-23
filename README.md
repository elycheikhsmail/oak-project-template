# oak-project-template

## features
- [done] quick start new oak project
- [done] MVC-like but don't use orm because orm not a enough stable now
- [done] django-apps-like each project is a collection of app each app have standard structure(will explain in convention section)
- [done] respect DRY (Don't Repeat Yourself) approache as possible
- [done] generate repetitive code controller, link router and controller, add app-x router to the project router 
- [done] code easy to understand  (will be explained later)
- [planned] sub template for working with a specific db (mysql, sqlite, pg, mongodb )
## conventions
- project is composed from multipl app, for example app-auth , app-todo,...
- each app is ts module
- each app have the following structure

```
├── config
│   ├── cli.ts
│   └── readme.md
├── controller
│   └── indexController.ts
├── deps
│   ├── deps.md
│   ├── deps.ts
│   └── readme.md
├── mod.ts
└── routes.ts


```
- each project have the following structure 

```
├── app-example
├── app.ts
├── CHANGS_LOG.md
├── cli
├── cli.md
├── cli.ts
├── config
├── deps
├── dev-templates
├── middlware
├── README.md
├── server
├── tests
└── _todo.txt


```

- alway import deps directly from url and never from deps.ts file, in theory this will make deps difficule but I made solution for this.
the advantage you will better understand :

```
import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts"; 

```
than

```
import { Application } from "deps.ts"; 

```

## questions

- Q1: how update project depencies in consistent and easy way? 
- R1 : for example if you want 

- Q2: how to know project deps ?
- R2: ....

- Q3: why cli.ts file and how use it ?
- R3: ...

- Q4: if I change my db from mysql to pg or mongo must I rewrite the project ?
- R5 : ....

## oak-project-template deps and dev-deps
### deps
deno <br>
oak <br>
std/flag <br>
### dev-deps
nunjucks


## Change logs

no thing to say now