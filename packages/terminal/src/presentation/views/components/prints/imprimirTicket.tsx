// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from '@application/useCases/recetaTicket';

// class Example extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.componentRef = React.createRef();
//   }

//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />.
//             // Do NOT pass an `onClick` prop to the root node of the returned component as it will be overwritten.
//             return <button onClick={() => window.print()}>Print this out!</button>;
//           }}
//           content={() => this.componentRef.current}
//         />
//         <ComponentToPrint ref={this.componentRef} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Example />, document.getElementById('root'));
