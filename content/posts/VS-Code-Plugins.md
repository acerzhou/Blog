+++
title = 'VS Code Plugins'
date = 2023-12-02T22:27:56+07:00
+++

[VS Code](https://code.visualstudio.com) is one of the best and most popular editors in today's world.

From my understanding, it becomes outstanding from tools in IT due to following reasons:

- Lightweight
- Cross Platform (Windows, Mac, Linux)
- High quality and multiple plugins
- Clean and simple UI

In this post, I put some plugins I have used in my day to day job, and improve my productivity.

## Coding and Scripting Helper

#### TabNine

I have been used [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode) for a while, and it is become part of my working flow now. It is quite powerful and give good insight and improve productivity. However, it is still a bit different from XCode and Visual Studio suggestion. I think it is good enough and worth to try.

#### Code Runner

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) is a plugin I recently found. I feel it is really helpful when I want to try some code snippet. Previously, I always use online code playground to test out my idea or assumption. With this plugin, I can simply use the VS Code to do all the work.

It is supper easy, set the language you want to run. And simple **select the code, right click -> select "Run Code"** Or Use **Ctrl+Alt+N**, the result will shows in output.

## Performance

#### Import Cost

[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) is a plugin helping you understand the size of bundle you imported in your JS file.

#### file-size

[file-size](https://marketplace.visualstudio.com/items?itemName=zh9528.file-size) is a plugin showing current file size. It is helpful when you want to know the size of file or strings.

## Git

#### GitLens

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) is one of the best plugins for Git in VS Code. Git is the most popular and common tools devs using today. GitLens really helps you understand what happens within the code.

I really like it can give you hint on line by line on the author and date change of the code.

## Documentation and Comments

#### Code Spell Checker

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a plugin help spelling in code and document.

#### Markdown All in One

[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) is a plugin for [Markdown](https://www.markdownguide.org/). Markdown is a good and simple language used to create documents.

_Markdown All in One_ is a plugin helping writing Markdown in VS Code.

#### Bookmarks

[Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) is a plugin that you can set bookmark in file, so that you can come back at any time. 😉

#### Better Comments

Want you code comments more colourful ? [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) is here. It having highlight, alert, todo and query to present on comments.

#### Todo Tree

[Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) is a plugin to manage TODO comments in code repo. It is a good habit to resolve all TODO before building the PR. :)

## Navigation

#### Camel Case Navigation

Camel Case is one of popular way to naming variables and functions within programming. I used _CTRL+->_ a lot to quick navigating throw the code. However, I sometime feel difficult to go into the word to change, as VS Code treat the camel case word as whole word. Using [Camel Case Navigation](https://marketplace.visualstudio.com/items?itemName=maptz.camelcasenavigation), I can go into the middle of the word and make the change using _CTRL+->_. Feeling Awesome.

## Text and Data Processing

#### JSON Parse & Stringify

Today, we are heavily working with Non-SQL DB and RESTful API, JSON is one of the most common data structure we are dealing with everyday. [JSON Parse & Stringify](https://marketplace.visualstudio.com/items?itemName=nextfaze.json-parse-stringify) is a plugin to stringify or parse JSON data.

Using online free tools, it has the risk to expose sensitive information within data. This plugin avoid the situation that you need some manipulation on JSON and JSON string.

#### vscode-base64

Base64 encoding and decoding is another translating we used a lot as developers. For example, HTTP Base Authentication requires both _username_ and _password_ need to be encoded to base64. [vscode-base64](https://marketplace.visualstudio.com/items?itemName=adamhartford.vscode-base64) is a plugin that can do the job.

#### jwt-decoder

[JSON Web Tokens(JWT)](https://jwt.io/) is used to represent claims between two parities. [jwt-decoder](https://marketplace.visualstudio.com/items?itemName=jflbr.jwt-decoder) can decode the JWT, and give more info on the token real content.

## Other Tooling

#### Remote Development

[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) is something that you can visual the ambition of MS for VS Code. As we are moving towards Cloud today, software development is also moving to Cloud. I am using this feature to work on this post which is located in my WSL system, and it is perfectly feeling like working in the same system. Highly recommended.

#### REST Client

[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), a replacement for POST Man. I don't know if anyone having a bit trouble using POST Man some time, this is a plugin that can work with APIs. The pro of this is easier to manage multiple endpoints and easily share if the team is using it. I am still trying to find a way to integrate this one into my workflow.

#### Setting Sync

[Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) is a plugin that can be used to share and maintain the settings of VS Code, I haven't used this one yet, but I am going to try and find out if it is good.

## Themes

#### VSCode Great Icon

[VSCode Great Icon](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons), icon shows in explorer. I like this one with the simplicity.

#### Ayu

[Ayu](https://vscodethemes.com/e/teabyii.ayu) is a theme I am currently using. I feel dark mode making me exhausted after a while working and reading. I am using Ayu light, and so far, I am enjoy it.
