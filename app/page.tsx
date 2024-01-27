import { useState } from 'react'
import Heading from './components/Heading';
import Quiz from './components/Quiz';

function Page() {
  return (
    <>
      <div>
     <Heading/>
     <Quiz/>
      </div>
    </>
  );
}

export default Page;