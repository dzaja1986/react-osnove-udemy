import React, {Component} from 'react';
import './App.css';
// za 1 import PropTypes from 'prop-types';

///// 1 const Person = ({ person: {img, name, age, info} }) => {

// console.log(info);
//   return (
//     <article>
//       <img src={img} alt="pesron"/>
//       <h4>name: {name}</h4>
//       <h4>age: {age}</h4>
//       <h4>info: {info || 'default info abou the person'}</h4>
//     </article>
//   );
// };
// Person.propTypes = {
//   person:PropTypes.shape({
//      img:PropTypes.string.isRequired,
//   name:PropTypes.string.isRequired,
//   age:PropTypes.number.isRequired,
//   info:PropTypes.string.isRequired
//   })
// };
// Person.defaultProps = {
//  person: {
//    info: 'default info about the person'
//  }
// }
// class PersonList extends Component{
//   state ={
//     people:[
//       {
//         id:1,
//         img:"https://randomuser.me/api/portraits/thumb/men/65.jpg",
//         name:"Milan",
//         age:32
//       },
//       {
//         id:2,
//         img:"https://randomuser.me/api/portraits/thumb/men/65.jpg",
//         name:"Luka",
//         age:5
//       }
//       ,
//       {
//         id:3,
//         img:"https://randomuser.me/api/portraits/thumb/men/65.jpg",
//         name:"Marina",
//         age:30,
//         info:"some info about marina"
//       }
//     ]
//   }
//   render() {
//     return <section>
//       {this.state.people.map((person) => (
//         <Person key={person.id} 
//        person = {person} />
//       ))}
//     </section>
//   }
// }

// class App extends Component {
//   render() {
//     return  <PersonList />
//   }
// ---1}

////// 2.class Form extends Component {
//   state ={
//     firstName:'',
//     lastName: '',
//     people: []
//   }
//   handleChange = event =>{
//     // console.log(event.target);
//   // console.log(event.target.name);
//   // console.log(event.target.value);
//   // if(event.target.name === 'firstName') {
//   //   const textValue = event.target.value;
 
//   //   this.setState({
//   //     firstName: textValue,
  
//   //   });
//   // }
  
// const value = event.target.value;

// this.setState({
//   [event.target.name] : value
// });
//   };

//   handleSubmit = (e) => {
//      e.preventDefault();
//      const firstName = this.state.firstName;
//      const lastName = this.state.lastName;
//      console.log(firstName, lastName);
//      if(firstName.length > 0 && lastName.length > 0) {
//        const person = `${firstName} ${lastName} `;
//        this.setState({
//          people:[...this.state.people, person],
//          firstName: '',
//          lastName: ''
//        })
//      }
//   }
//   render() {
//     return <section>
//       <article>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text"
//            name="firstName" 
//            value={this.state.firstName}
//            onChange={this.handleChange} />

//           <input type="text" name="lastName" 
//            value={this.state.lastName}
//            onChange={this.handleChange} />
//           <button type="submit">submit</button>
//         </form>
//       </article>
//       <article>
//         <h1>people</h1>
//         <div>{this.state.people}</div>
//       </article>
//     </section>
//   }
// }
// class App extends Component {
//   render() {
//     return <Form />
//   }
//----2 }


//// 3 class Form extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//   const name = this.refs.myName;
//   const nameValue = name.value;
  
//   const email = this.email.value;


//   const text = this.refs.myText;
//   const textValue = text.textContent;
//   text.style.color = "red";
//   console.log(nameValue, email, textValue);
  

//   }
//   render() {
//     return (<section>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref="myName" />
//         <input type="email" ref={(orange) => this.email = orange}/>
//         <button type="submit">submit</button>
//       </form>
//       <p ref="myText">Hello World</p>
//     </section>
//     );
//   }
// }
// class App extends Component {
//   render() {
//     return <Form />
//   }
// ---3}

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    console.log("called first:", this.state.count);
    this.setState({
      count:this.state.count + 1
    }, 
    () => console.log('called second :', this.state.count));
    // this.setState({
    //   count: this.state.count + 2
    // })
    console.log("called third:", this.state.count);
  }

  handleDecrease = () => {
    console.log("called first:", this.state.count);
    this.setState((state, props) => {
      return {count: state.count - 1 }
    }, () => console.log('called second :', this.state.count));
    // this.setState((state, props) => {
    //   return {count: state.count - 2 }
    // });
    console.log("called third :", this.state.count)
  
   
  }
  render() {
    return (
     <>
        <div style={{margin:"3rem", fontSize:"2rem"}}>
          <button type = "button" onClick={this.handleDecrease}>decrease</button>
          <span style={{margin:"1rem"}}>count: {this.state.count}</span>
          <button type = "button" onClick={this.handleIncrease}>increase</button>
        </div>
      </>
    )
  }
}

class App extends Component {
  render() {
    return <Counter amount="2" />
  }
}
export default App;