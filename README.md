# _Currency Exchange_

#### By _**Grace Lee**_

#### _A simple website that allows user to see currency exchange rates and currency conversions between two currencies._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _ESLint_ 
* _Jest_
* _Babel_

## Description

_It is a website where a user enters an amount in one currency and then chooses another currency to see the exchange rate and the total amount they entered in converted currency. For example, if a user enters and chooses 10 USD, and as the target currency chooses Japanese Yen, they will see how much 1 USD equals in Japanese Yen as well as how much 10 USD equals in Japanese Yen._

## Setup/Installation Requirements
1. Clone the repository: '[https://github.com/g-lee2/currency-exchange.git]' to your desktop.
2. Navigate to the '[currency-exchange]' directory on your desktop.
3. Open the cloned directory with your favorite text editor (Visual Studio Code was used when setting this project up).
4. To start a development server:
- Navigate to '[currency-exchange]' in your command line
- Run the command "npm install" to install dependencies
- Optionally, run the command "npm run build" to bundle the files
5. To create an API key:
- Navigate to '[https://www.exchangerate-api.com/]' in your browser
- Enter your email and click the 'Get Free Key!' button 
- You will be prompted to create an account. Please fill in your address, name, email, and any other relevant information to create an account
- Once you create your account, activate your account through the link sent to the email you registered your account with 
- After activation, you should be able to access a dashboard that includes your API key 
6. Protect your API key 
- Create a .env file by running the command "touch .env" in your command line and add it to your .gitignore file in your '[currency-exchange]' directory
- Push this file to your GitHub by running the commands "git add .gitignore", "git commit -m "Update .gitignore file", and finally "git push origin main" in your command line
- Then store and add your API key in the .env file at the top level of your '[currency-exchange]' directory under the variable name API_KEY in your .env file
(ex. API_KEY=3d68a17ddd5ea407ab91f2d278342017, you should add your API key after the equal sign as the one in the example is a fake one)
7. Configure Webpack
- Run the command "npm install dotenv-webpack@2.0.0 --save-dev" in your command line
- Then go into the webpack.config.js file in your '[currency-exchange]' directory, and require the new webpack by adding the line "const Dotenv = require('dotenv-webpack');" under the other required webpacks 
- Afterwards, add it to the plugins array section by adding the line "new Dotenv()" as the last array in the plugins array 
- Then run the command "npm run start" in your command line to view the project in the browser

## Known Bugs

* _No known bugs as of now_

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2022_ _Grace Lee_
