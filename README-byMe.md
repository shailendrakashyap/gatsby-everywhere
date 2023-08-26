# gatsby-everywhere
The first of my practice works using `gatsby`.

### Prerequisites
-    Node.js (v18 or newer)
-    Git
-    Gatsby command line interface (CLI) (v5 or newer)
-    Visual Studio Code (or any editer you want)

### Getting Started

- To Start install gatsby-cli through npm & run
```shell
gatsby new
```
- Then go through the setup wizard according to your wishes & run
```shell
cd "your-site"
```
- To start the development server, run
```shell
gatsby develop
```

- You can now view "your-site" in the browser.
⠀
  http://localhost:8000/
⠀
- View GraphiQL, an in-browser IDE, to explore your site's data and
schema
⠀
  http://localhost:8000/___graphql

#### Edit src/pages/index.js to see this page update in real-time. 😎

### Gatsby-Working Architecture

![Gatsby-Working Architecture](https://www.gatsbyjs.com/static/0fd27b745c1de708f034eaf97c4416e0/d61c2/deployment-workflow.png)


### Setting up a GitHub repo for your site

- Make a new or existing repo on any Version Control System you want like GitHub, GitLab, Atlassian's Bitbucket
- To push your existing code from your computer to your new GitHub repository, enter the commands below in the command line. Be sure to swap out **YOUR_GITHUB_USERNAME** for your actual username and **YOUR_GITHUB_REPO_NAME** with the name you gave your GitHub repo (like **your-site**).

```shell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME.git
git branch -M main
git push -u origin main
```

    If you have a local clone, you can update it by running the following commands.
```shell
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a
```

…or create a new repository on the command line

```shell
echo "# gatsby-everywhere" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:shailendrakashyap/gatsby-everywhere.git
git push -u origin master
```

…or push an existing repository from the command line

```shell
git remote add origin git@github.com:shailendrakashyap/gatsby-everywhere.git
git branch -M master
git push -u origin master
```
