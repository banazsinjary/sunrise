import './App.css'

function App() {
  

  return (
    <>
      <div id='landing'>
       <nav>
        <ul>
          <li><a href="#today">Today</a></li>
          <li><a href="#coach">Coach</a></li>
          <li><a href="#later">Later</a></li>
          <li><a href="#quote">Reflect</a></li>
        </ul>
       </nav>
       <h1>Simple to-do lists are powerful.</h1>
       <h2>Long to-do lists kill motivation</h2>
      </div>

      <div id='today'>
        <p>Today</p>
        <h1>Focus on What Matters</h1>
        <p>Sunrise is all about getting the important things done with minimal stress.</p>
        <p>You can only have four tasks to get done at any time, helping you to focus on what's important.</p>
        <img></img>
      </div>

      <div id='coach'>
        <p>Coach</p>
        <h1>Your personal productivity coach</h1>
        <p>Powered by AI and available at all times, it has been trained on the latest productivity research and includes everything that makes Daily Four great.</p>
        <img></img>
      </div>

      <div id='later'>
        <p>Later</p>
        <h1>Over 40% of your tasks are never completed</h1>
        <p>With Later, you capture tasks you don't need to get done today.</p>
        <p>As priorities change, tasks naturally fade. By reviewing daily, you can maintain a workload that aligns with your goals.</p>
        <img></img>
      </div>

      <div id='quote'>
        <h1>Designed as a quiet place to do your best work.</h1>
      </div>

      <div id='reflect'>
        <p>Reflect</p>
        <h1>You get more done than you think</h1>
        <p>Reflect is a non-judgmental view of your productivity. There are no streaks to complete, and your completed tasks are grouped by week and month.</p>
        <p>Reflect regularly or simply whenever you need a dose of perspective.</p>
        <img></img>
      </div>

      <div>
        <h1>Daily Four is in private beta. Request early access.</h1>
        <input type='email' id="email"/>
        <button id='submit'>SUBMIT</button>
      </div>
      
      <footer>
        <p>2023 Coded with 🤎 by Banaz</p>
      </footer>
    </>
  )
}

export default App
