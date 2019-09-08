import React from 'react';
import './sign.css';
 
class SingIn extends React.Component {
constructor(){
  super();
  this.state ={
    signEmail:'',
    signPass: ''
  }
}

  onEmailChange =(event)=>{
    this.setState({
      signEmail:event.target.value
    })
   }

  onPassChange =(event)=>{
    this.setState({
      signPass:event.target.value
    })
  }

  onSubmit = ()=>{
    fetch('https://tranquil-castle-39734.herokuapp.com/signin',{
      method:'POST',
      headers:{'Content-Type':'application/json' },
      body:JSON.stringify({
        email:this.state.signEmail,
        password:this.state.signPass
      })
    })
    .then(res => res.json())
    .then(user =>{
  if(user.id){
   this.props.loadUser(user);
  this.props.onRouteChange('home');
  }
  else{
   alert('email or password is wrong');
   }

    }).catch(console.log());

  }

  render(){
    const {onRouteChange} = this.props;
    return(
      
      <article className="br2 ba  dark-gray b--black-10 mv4 w-100 w-60-m w-60-l shadow-2 mw6 center">

      
      <main className="pa2   main black-80">
<div className="measure  ">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
       onChange={this.onEmailChange}
       />
    </div>
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
      onChange={this.onPassChange}
       />
    </div>
    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
  </fieldset>
  <div className="">
    <input  onClick={this.onSubmit}
     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in " />
  </div>
  <div className="lh-copy mt3">
    <a onClick={()=> onRouteChange('register')}
     href="#0" className="f6 link dim black db">Register</a>
    <a href="#0" className="f6 link dim black db">Forgot your password?</a>
  </div>
</div>
</main>

</article>

  )
  }

    

}


export default SingIn;