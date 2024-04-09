

# Turborepo install

## STEPS:

``[1] - npm install turbo --global``  ``pnpm install turbo --global`` ``yarn install turbo --global``

# App install

## STEPS:

``[1] - Clone the repository project;``

``[2] - run pnpm install;``

``[3] - run pnpm dev;``


## note:

If you create a new project at apps/* folder, before running all the project with step [3] run firstly the step [2]
it make sure that your new project make part of workspace in the pnpm-lock.yaml file. It will make sharable the componets beteween the projects.

In the packege.json of your new project at dependences, add `"@noria_components/ui": "workspace:*",` then you can import the componets normaly.


