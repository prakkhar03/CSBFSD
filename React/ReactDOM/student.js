const parent=document.getElementById("parent");
// console.log(parent);
const root=ReactDOM.createRoot(parent);

//JSX
const myname=<h2>Prakkhar</h2>
const studentBranch=<h2>CS</h2>
const img=<img src="https://pics.craiyon.com/2023-11-12/bwUacS6GSViLJx6m1dDCFQ.webp" alt="react-logo" style={{width:"200px", height:"200px"}}/>
// const container=(
//     <div>
//         {img}
//         {myname}
//         {studentBranch}
//     </div>
// );
// root.render(container);
const card=(
    <div style={{border:"2px solid black", width:"250px", padding:"10px", borderRadius:"10px"}}>
        {img}
        {myname}
        {studentBranch}
    </div>
);
root.render(card);
