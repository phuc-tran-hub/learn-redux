import React from 'react';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router-dom';
import Nav from './nav';
import Counter from './counter';
import Controls from './controls';

import '../style.scss';

function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return <div>Welcome</div>;
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <div>
      <Counter />
      <Controls />
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<About />} />
              <Route path="/test/:id" element={<Test />} />
              <Route path="*" element={<FallBack />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
