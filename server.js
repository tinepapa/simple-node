function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const userName = process.env.DOCKER_USERNAME;
async function main() {
  while(true) {
    console.log(`My Dockerhub username is ${userName}`);
    await sleep(5000);
  }
}

main();
