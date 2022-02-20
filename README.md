# Project Setup

### Requirements:

1. php8.0, php8.0-xml, php8.0-curl, php8.0-mbstring
2. composer
3. docker-engine, docker-compose
4. node v14.19.0
5. yarn / npm

### Setting up the back-end

1. Duplicate the `.env.example` file as `.env`.
2. Update the following in the `.env` file:
    - `APP_URL=http://{private-ip}:{port}`
    - `APP_PORT={port}`
3. Install the Laravel dependencies.
    ```bash
    $ composer install
    ```
4. Make sure that docker is running.
    ```bash
   $ sudo service docker status
   
   # Run this command if docker is inactive
   $ sudo service docker start
   ```
5. Run the development server using Laravel Sail.
    ```bash
    $ sail up -d
    ```

### Setting up the front-end

1. Navigate to the `client` folder.
2. Install the dependencies.
    ```bash
   # Using Yarn
   $ yarn install
   # Or using NPM
   $ npm install
    ```
3. Run the development server.
    ```bash
   # Using Yarn
   $ yarn dev
   # Or using NPM
   $ npm run dev
    ```
   
### Accessing the project
#### Local
* Front-end: `http://{your-private-ip}:3000`
* Back-end: `http://{your-private-ip}:8000`

#### Live
* Front-end: `http://54.255.219.74:5000`
* Back-end: `http://54.255.219.74:8000`
