# _Currency Exchange_

#### By _**Grace Lee**_

#### _A simple website that allows user to see currency exchange rates between two countries._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _ESLint_ 
* _Jest_
* _Babel_

## Description

_It is a website where a user chooses two currencies and enter the amound they want converted. The second country's currency is the target currency or the currency the amount the user enters will be converted to. For example, if the user chooses US Dollar and Japanese Yen, and enters the amount 1, then the user will see how much Japanese Yen $1 is equivalent to under the current exchange rate. The user will be able to see the currency rate, as well as the currency conversion result when they input the relevant information_

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
- Enter your email and press the 'Get Free Key!' button 
- Fill in your address and relevant information to create an account
- Once you create your account, activate your account through the link sent to the email you registered your account with 
6. Protect your API key 
- Then open the .gitignore file in your '[currency-exchange]' directory, type and add a .env file 
- Push this file to your GitHub by running the commands "git add .gitignore", "git commit -m "Update .gitignore file", and finally "git push origin main" in your command line
- Then create a .env file in the root directory by running the command "touch .env" in your command line
- Then store and add your API key in the .env file under the variable name API_KEY in your .env file
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
