import {osInfo as foo} from 'systeminformation';

async function getGraphics() {
  const gi = await foo();

  console.log(gi);
}

getGraphics();