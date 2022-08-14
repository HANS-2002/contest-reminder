import { useEffect, useState } from 'react';
import axios from 'axios';
import RenderContest from './components/renderContest';
import Footer from './components/footer';
import links from './apiLinks';

function App() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    let i = 0;
    links.forEach(element => {
      axios.get(element).then(res => {
        res.data.forEach(contest => {
          if (contest.url.match("codechef") ||
            contest.url.match("codeforces") ||
            contest.url.match("leetcode") ||
            contest.url.match("google")) {
            contest.key = i;
            i++;
            setContests(prevContests => [...prevContests, contest]);
          }

        });
      });
    });
  }, []);

  return (
    <>
      <div className='box headerBox'>
        <div className='contestName'>
          <p className='boxHeading'>Contest Name</p>
        </div>
        <div className='contestTime'>
          <p className="boxHeading">Start</p>
        </div>
        <div className='contestTime'>
          <p className="boxHeading">End</p>
        </div>
        <div className='contestTime'>
          <p className="boxHeading">Starts in</p>
        </div>
      </div>
      {contests.length ?
        contests.map(e => (<RenderContest
          key={e.key}
          name={e.name}
          start={e.start_time}
          end={e.end_time}
          url={e.url}
          site={e.site}
        />))
        :
        <h1>Loading...</h1>}
      <Footer />
    </>
  );
}

export default App;
