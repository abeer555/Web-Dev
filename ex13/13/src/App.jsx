import React, { useState } from 'react';
import './App.css';

// --- 1. Hello, React! ---
// (i) Without JSX (Commented out as JSX version is used below)
/*
function HelloWithoutJSX() {
    return React.createElement('h1', null, 'Hello, React!');
}
*/

// (ii) With JSX & (iii) With Variable
function HelloMessage() {
    const message = "Hello from a variable in React!";
    return <h1>{message}</h1>;
}
// --- 2. Fruit List ---
function FruitList() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    return (
        <div>
            <h3>Fruit List:</h3>
            <ul>
                {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
            </ul>
        </div>
    );
}

// --- 3. Styled Message ---
function StyledMessage() {
    const inlineStyle = {
        color: "blue",
        fontSize: "18px",
        border: "1px solid green",
        padding: "10px",
        display: 'inline-block'
    };
    return <p style={inlineStyle}>This is a styled message.</p>;
}


// --- 4. Sum of Squares ---
function SumOfSquares({ num1, num2 }) {
    const sum = (num1 * num1) + (num2 * num2);
    return <p>Sum of squares of {num1} and {num2} is: {sum}</p>;
}

// --- 5. Conditional Greeting ---
function ConditionalGreeting() {
    const isMorning = new Date().getHours() < 12;
    return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
}

// --- 6. Day of the Week ---
function DayOfWeek() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = days[new Date().getDay()];
    return <p>Today is: {todayName}</p>;
}

// --- 7. Prime Number Check ---
function PrimeCheck({ number }) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i = i + 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    const result = isPrime(number);
    return <p>{number} is {result ? 'a prime number' : 'not a prime number'}.</p>;
}

// --- 8. Temperature Converter (Class Component) ---
class TemperatureConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { celsius: '', fahrenheit: '' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) return '';
        const output = convert(input);
        const rounded = Math.round(output * 100) / 100;
        return rounded.toString();
    }

    handleCelsiusChange(e) {
        const celsius = e.target.value;
        this.setState({
            celsius: celsius,
            fahrenheit: celsius === '' ? '' : this.tryConvert(celsius, this.toFahrenheit)
        });
    }

    handleFahrenheitChange(e) {
        const fahrenheit = e.target.value;
        this.setState({
            fahrenheit: fahrenheit,
            celsius: fahrenheit === '' ? '' : this.tryConvert(fahrenheit, this.toCelsius)
        });
    }

    render() {
        return (
            <div>
                <label>
                    Celsius:
                    <input type="number" value={this.state.celsius} onChange={this.handleCelsiusChange} />
                </label>
                <br />
                <label>
                    Fahrenheit:
                    <input type="number" value={this.state.fahrenheit} onChange={this.handleFahrenheitChange} />
                </label>
            </div>
        );
    }
}

// --- 9. String Reverse and Palindrome Check ---
function StringInfo({ inputString }) {
    const reversedString = inputString.split('').reverse().join('');
    const isPalindrome = inputString.toLowerCase() === reversedString.toLowerCase();
    return (
        <p>
            "{inputString}" reversed is "{reversedString}".
            Is palindrome? {isPalindrome ? 'Yes' : 'No'}
        </p>
    );
}

// --- 10. Random Number Generator ---
function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandom = () => setRandomNumber(Math.floor(Math.random() * 100) + 1);

    return (
        <div>
            <button onClick={generateRandom}>Generate Random (1-100)</button>
            {randomNumber !== null && <p>Number: {randomNumber}</p>}
        </div>
    );
}

// --- 11. Leap Year Check ---
function LeapYearCheck({ year }) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return <p>{year} is {isLeap ? 'a Leap Year' : 'not a Leap Year'}.</p>;
}

// --- 12. User Greeting (Class Component with Props) ---
class UserGreeting extends React.Component {
    render() {
        const { firstName, lastName } = this.props;
        return <h2>Hello, {firstName} {lastName}!</h2>;
    }
}


// --- Main App Component ---
function App() {
    return (
        <div className="App">
            <h1>React JSX Exercise 13</h1>

            <div className="component-section">
                <h2>1. Hello Message</h2>
                <HelloMessage />
            </div>

            <div className="component-section">
                <h2>2. Fruit List</h2>
                <FruitList />
            </div>

            <div className="component-section">
                <h2>3. Styled Message</h2>
                <StyledMessage />
            </div>

            <div className="component-section">
                <h2>4. Sum of Squares</h2>
                <SumOfSquares num1={4} num2={5} />
            </div>

            <div className="component-section">
                <h2>5. Conditional Greeting</h2>
                <ConditionalGreeting />
            </div>

            <div className="component-section">
                <h2>6. Day of the Week</h2>
                <DayOfWeek />
            </div>

            <div className="component-section">
                <h2>7. Prime Number Check</h2>
                <PrimeCheck number={19} />
                <PrimeCheck number={20} />
            </div>

            <div className="component-section">
                <h2>8. Temperature Converter</h2>
                <TemperatureConverter />
            </div>

            <div className="component-section">
                <h2>9. String Reversal & Palindrome</h2>
                <StringInfo inputString="level" />
                <StringInfo inputString="world" />
            </div>

            <div className="component-section">
                <h2>10. Random Number Generator</h2>
                <RandomNumberGenerator />
            </div>

            <div className="component-section">
                <h2>11. Leap Year Check</h2>
                <LeapYearCheck year={2024} />
                <LeapYearCheck year={2023} />
            </div>

            <div className="component-section">
                <h2>12. User Greeting</h2>
                <UserGreeting firstName="John" lastName="Doe" />
            </div>
        </div>
    );
}

export default App;
