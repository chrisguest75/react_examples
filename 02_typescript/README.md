# README

Demonstrate the most basic `react` typescript app

NOTES:

* default is to use `yarn` instead of `npm`.  
* can only have one parent object per component.  But you can use an invisible React.fragment
    ```text
        <React.Fragment> or <></>
    ```
* serve -s build -l 8080

npx browserslist@latest --update-db

## 🏠 Serving up the build folder

Once the `./build` folder is created you  

```sh
# install modules
yarn 

# start app
yarn start
```

## Creation

```sh
# in repo root
cd $(git root)
npx create-react-app demo-app --template typescript

# either move files up a directory or leave in folder.
cd demo-app

# recommendation is to remove .git yourself.  
rm -rf .git

# install serve globally
yarn global add serve        

# serve up the static build 
serve -s build -l 8080    
```

## 👀 Resources
