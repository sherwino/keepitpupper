# Using Firebase
This project is going to be using Firebase Realtime DB to be able to add data easily. I want the admins to be able to change content on the page without loging in. Along with that I want to be able to deploy changes using the CLI. 

## Setting it up

Setting up a Firebase project is pretty easy if you use the tools provided by Google. 

- If you have an account all you have to do is Go to [console.firebase.google.com](//console.firebase.google.com/) and create a new app.

![Add a project on firebasee](https://i.gyazo.com/731e8027f251dc0bdcf4a0039c7ce435.gif)
*Make sure you understand what you are aggressing to 😅*

![Project creation screen](https://i.gyazo.com/e00ddb1f8f938beff454d3628dfd2217.gif)
*Don't let anybody have this information, these are special keys for your app to be able to access firebase*

- To be honest I don't know why I am showing you that step as its not that important to know that, it is pretty self explanitory.

- If you are going to want to deploy from the CLI you should install the node package. The package is going to be installed globally, hence the `-g` flag.

```sh
npm install -g firebase-tools
```

- Then while in your project directory you could initialize firebase with

```sh
firebase-init
```

- The CLI tool will then just walk you through the process. Basically it asks you what Firebase features are you going to set up. *Which Firebase CLI features do you want to setup for this folder? Press Space
to select features, then Enter to confirm your choices.*

- Here is one gotcha, you need to login, in my situation I was already logged in so the app didn't do anything else but when it was time to proceed it realized that my credentials had expired and I had to. login anyway using this `--reauth` flag. Then the CLI will go ahead and open your browser so that you could authenticate using your Google profile credentials.

```sh
firebase login --reauth
```

- After that the CLI proceeds to set up the other items, basically the CLI in my case did a Project Setup `Select a default Firebase project for this directory:`, Database Setup `What file should be used for Database Rules?`, and Hosting Setup `What do you want to use as your public directory?` `Configure as a single-page app (rewrite all urls to /index.html)?`. If you just press enter through these steps they will just select the default options for some of these items.


- Overall that process is pretty smooth, only one tiny gotcha with the authentication of the CLI. No big deal. 

- That being said I did run into another little issue when I tried to set up the Custom Domain. In the hosting section of the app page you have the option to add a custom domain. 

![Custom domain menu](https://i.gyazo.com/e45c4394b62e0b6a509483dfe7af6233.gif)

![Adding a custom domain](https://i.gyazo.com/e30e7e9fdb7f5e8d7d764a4c53614658.gif)

- As soon as you add the custom domain the modal prompts you to add a text record to your domain's DNS settings. So I went to my hosts domain settings page and entered the data that I was given, but as soon as I clicked verify it gave me an error.

![Connect domain verification error](https://i.gyazo.com/a4042c9a1e66ad34d4814c6771749cbe.gif)

- I did everything they asked me to do! 
Why is there an error? 
Well I started googling and I found my answer in the all knowing stackoverflow.com. 
After looking at the suggestiona in [this](https://stackoverflow.com/questions/33979673/unable-to-verify-custom-domain-with-firebase-using-namecheap) question. I did two things:

    - ["you may have to use @ for the host field"](https://stackoverflow.com/a/33984650)
    - [Add you firebase webpage as a CNAME record](https://stackoverflow.com/a/40198567)

- Looks like that solved it! So from there on the modal gave me more information, so that I could add on my domain. Two A Records that would direct traffic to Google's Firebase servers. From then on I went ahead and added a www redirect as well.

![Redirect www request to main domain](https://i.gyazo.com/00b8162fd77b2d5032244cad4ff841a9.gif)

*I think I used too many gifs, this Readme is making me dizzy*
