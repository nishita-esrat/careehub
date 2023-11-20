

// applying job
const applyJob = (id)=>{
 // check local storage
 let storedJobItems = {};
 let isStored = localStorage.getItem("storedJobItems");
 if (isStored) {
   storedJobItems = JSON.parse(isStored);
 }
 let singleJob = storedJobItems[id];
 if (!singleJob) {
   storedJobItems[id] = true;
    // set local storage job item
   localStorage.setItem("storedJobItems", JSON.stringify(storedJobItems));
 }
}


export {applyJob}