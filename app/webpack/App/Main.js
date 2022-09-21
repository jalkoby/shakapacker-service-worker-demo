import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const Tweet = ({ tweet }) => (
  <Card body border="primary" className="mb-2">
    <div className="d-flex align-items-start">
      <Image src={tweet.avatar} thumbnail width="50px" className="me-3" />
      <div>
        <h4>{tweet.username}</h4>
        <p>{tweet.body}</p>
      </div>
    </div>
  </Card>
);

export default () => {
  let [tweets, setTweets] = useState([]);
  useEffect(() => {
    (async () => {
      let resp = await fetch('/api/feed');
      let tweets = await resp.json();
      setTweets(tweets);
    })();
  }, []);

  return (
    <>{tweets.map((tweet, i) => <Tweet key={i} tweet={tweet} />)}</>
  );
}
