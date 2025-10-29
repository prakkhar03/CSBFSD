const parent = document.getElementById('parent');
//console.log(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement('h2', {style:{color:"chocolate", backgroundColor:"beige"}}, 'Welcome to React App');

// const li1 = React.createElement('li', {}, "Java");
// const li2 = React.createElement('li', {}, "Python");
// const li3 = React.createElement('li', {}, "React");
// const ul = React.createElement('ul', {style:{color:"sienna", backgroundColor:"bisque"}}, li1, li2, li3);

// const pic = React.createElement('img', {src:"https://tse4.mm.bing.net/th/id/OIP.8txPISBrcaXrpUFAl4w95wHaIM?pid=Api&P=0&h=180",alt:"react-logo", style:{width:"200px", height:"200px", borderRadius:"50%"}});

// const myname =  React.createElement('h1', {style:{color:"sienna", backgroundColor:"bisque"}}, 'Sunflower'); 

// // const wrapper = React.createElement('div', {}, h2, myname, pic, ul);
// // root.render(wrapper);

// const namePicContainer = React.createElement(
//   'div',
//   {
//     style: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '20px', // adds space between items
//       backgroundColor: 'bisque',
//       borderWidth:'2px',
//       borderStyle:'solid',
//       borderColor:'sienna',
//       borderRadius:'10px',
//       padding: '10px'
//     },pic,myname
//   },
//   React.createElement('h1', { style: { color: "sienna" } }, 'Sunflower'),
//   React.createElement('img', {
//     src: "https://tse4.mm.bing.net/th/id/OIP.8txPISBrcaXrpUFAl4w95wHaIM?pid=Api&P=0&h=180",
//     alt: "react-logo",
//     style: { width: "200px", height: "200px", borderRadius: "50%" }
//   })
// );

// const wrapper = React.createElement('div', {}, h2, namePicContainer, ul);
const h2=<h2>Hello using JSX</h2>
const li1=<li>React</li>
const li2= <li>JAVA</li>
const ul= <ul>{li1}{li2}</ul>
const container=(
    <div>
    {h2}
    {ul}
    </div>
)
root.render(container);