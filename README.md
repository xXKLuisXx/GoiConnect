##Welcome to the official GoiConnect repository!

<br>
###Cloning a repository
When you create a repository on GitHub, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.

<br>
###Cloning a repository using command line
**1** On GitHub, navigate to the main page of the repository.

**2** Above the list of files, click <i class="fa fa-download"></i>  Code.

![](https://docs.github.com/assets/images/help/repository/code-button.png)

>Navigation

<br>
**3** To clone the repository using HTTPS, under "Clone with HTTPS", click <i class="fa fa-file"></i>. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click <i class="fa fa-file"></i>.

![](https://docs.github.com/assets/images/help/repository/https-url-clone.png)
>Copy

<br>
**4** Open Git Bash.

**5** Change the current working directory to the location where you want the cloned directory.

**6** Type git clone, and then paste the URL you copied earlier.

`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

<br>
**7**  Please **Enter** to create your local clone.

`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
>Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

<br>
<br>
###Cloning a repository to GitHub Desktop

**1** On GitHub, navigate to the main page of the repository.

**2** Above the list of files, click <i class="fa fa-download"></i> Code.

![](https://docs.github.com/assets/images/help/repository/code-button.png)

<br>
**3** Click <i class="fa fa-desktop"></i> Open with GitHub Desktop to clone and open the repository with GitHub Desktop.

![](https://docs.github.com/assets/images/help/repository/open-with-desktop.png)

**4** Follow the prompts in GitHub Desktop to complete the clone.

<br>
<br>
###Troubleshooting cloning errors
When cloning a repository it is possible that you might encounter some errors.

If you are unable to clone a repository, check that:

- You can connect using HTTPS. For more information, see "HTTPS cloning errors."

- You have permission to access the repository you want to clone. For more information, see "Error: Repository not found."

- The default branch you want to clone still exists. For more information, see have permission to access the repository you want to clone. For more information, see "Error: Remote HEAD refers to nonexistent ref, unable to checkout."


<br>
###Install packages with npm

`$ npm install`

npm will read the package.json file to se what dependencies the project has and will download and install them in the node_modules folder.


<br>
###Serve the app
`$  ionic serve`

with this we managed to transpile the TypeScript code and the application will run for the first time in our browser, it will also generate the www and build folders that are necessary in the Ionic project.


<br>

Now we must restore the status of the project.

`$ ionic cordova prepare`


With this command, the platforms that the app has added (Android or IOS) and the Ionic and Cordova plugins that are in the config.xml file will be restored. Some plugins need certain parameters fir installation, these are also saved in the config.xml file, and when restoring we will not have any problem, we just have to take it into account and look at the moment of incorporating a new plugin into the project.
