/* async await => pour bien contoler les requettes*/
const resolveAfter2seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
};

const  asynCall=async ()=>{
    console.log('here call');
    const res = await resolveAfter2seconds()
    console.log(res);
}

asynCall()
/*==> object pour remplir un formilaire contient image*/