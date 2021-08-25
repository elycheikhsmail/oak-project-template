# oak-project-template

## features

- [done] quick start new oak project
- [done] MVC-like but don't use orm because orm not a enough stable now
- [done] django-apps-like each project is a collection of apps and  each app have
  standard structure <br>(see convention section for more info)
- [done] respect DRY (Don't Repeat Yourself) approache as possible
- [done] code written in typescript for deno runtime
- [done] no magic, no experiment typescript  feature, just regular typescript code
- [done] functional orientented programing, avoid class usage as possible
- [done] generate some codes : new app ,new controller ...<br>
(see structure conventions section and cli.ts convention section for more info)
- [done] work in group, since we have clear structure
- [planned] template extends from this  for working with mysql (without orm)
- [planned] template extends from this  for working with   sqlite (without orm)
- [planned] template extends from this  for working with pg (without orm)
- [planned] template extends from this  for working with mongodb (without orm)
<hr>

>      I think is better to work with template for a specicific database than template that work for all database, for several raisons : 
>       some deno api not yet stable 
>       some of db drivers not yet stable 
>       deno orm not yet stable </br>
>       is more easy to get help (when blocking) for specific database than orm 

<hr>

## how to use ?
clone the repo

run the command 

open the url      in your browser

congratultion you will see hello word

for advanced usage continue reading this readme

<hr>

## structure conventions

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
├── cli.ts
├── config
├── deps
├── dev-templates
├── libs
├── middlwares
├── README.md
├── server
├── tests
└── _todo.txt
```
<hr>

## middlwres conventions

- middlware code will be writen in middlwares folder
- middlweare to used befor each route will registered in server/add-middlares-befor.ts
- middlweare to used befor each route will registered in server/add-middlwares-after.ts

<hr>

## cli.ts convention

- help commande is :

    deno run --allow-all   cli.ts <br>
    this print all available commandes <br>

- command not supported will "redirect" to help command
 
- all most commands have this syntax

```
    deno run --allow-all --unstable cli.ts  {taskName}
```

```

    where {taskName} is string and you have folder in cli directory named {taskName}
    and have the follwing structure<br>

```

```
    ├── {taskName}
    |  ├── args.t
    |  ├── fn.ts
    |  ├── run.ts
    |  └── views

```

```
    fn.ts file contain a function fn that handle the command 
    deno run --allow-all --unstable cli.ts {taskName} 
    fn receive arg import from args.ts <br> args.ts
    contain args and inteface for this args 
    view can contain template for generating some code 
    {taskName} can be egale to gApp for generating oak app
    {taskName} can be egale to gController for generating oak controller in some app 
``` 

- example of cli command :

```
    deno run --allow-all --unstable cli.ts  gApp
```

>       will create new app named app-foo who have the default structure mention above <br>
>       if you want to create app named todo and his routes prefixed by "/todo" <br>
>       open cli/gApp/args.ts in your IDE
>       replace those lines 



```
    const aArg:IgApp = { appName:"foo" }
```

>       by 

```
    const aArg:IgApp = { appName:"todo"} 
``` 
 
 >       and run this command
 

```
    deno run --allow-all --unstable cli.ts  gApp
```

>      <b> as you can see, the command don't change, all cli.ts command are static <b>

- you can add your own custom command for example for create tables, init them ...

<hr>
 

## questions

- Q: supported deno version ?
- R: > 1.13.0
<hr>

- Q: why --unstable flag in the cli ? <br>
- R: I use std/fs for copy past some directory, this module is'nt stable now.
<hr>

## feedback

all feedback are welcome, in english or in french I prefer

## oak-project-template dependecies

### deps

- deno 
- oak 
- std/flag 

### dev-deps

- nunjucks
- std/fs

## Change logs

no thing to say now
