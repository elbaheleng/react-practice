import './App.css'
import style from '../src/myStyle.module.css'
import Example from './Example'
import Random from './Random'
import Objectdestruct from './Objectdestruct'
import Classcompdestruct from './Classcompdestruct'
import Resgister from './Register'

function App() {
  //js code
  let name = 'Elba'
  let name2 = 'Helen'
   
  let name1
  const clickfun = () => {
    alert ('button clicked')
  }
  const clickfun2 = (emp) => {
    console.log(emp);
    
  }
  const dispname = (name1) => {
    n.innerHTML = name1 + ' is ' + n.innerHTML// directly changing DOM, not recommeneded
  }


  return (
    //output - html
    <>
      <h1> {name} is learning React</h1>
      <h3 id = "n">learning React</h3>

      <p style = {{ color : 'red', backgroundColor : 'yellow' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta nam quasi pariatur nemo vero fugit eius aspernatur velit, eos deserunt odio? Laboriosam aliquam illum eaque recusandae. Sunt, adipisci Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta nam quasi pariatur nemo vero fugit eius aspernatur velit, eos deserunt odio? Laboriosam aliquam illum eaque recusandae. Sunt, adipisci porro?</p>
      <p className={style.reactStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi excepturi culpa veniam architecto nesciunt inventore molestiae, perspiciatis error cum dignissimos animi rerum sapiente reiciendis repellat aut saepe quasi quisquam id.</p>
      <p className={style.cssStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi excepturi culpa veniam architecto nesciunt inventore molestiae, perspiciatis error cum dignissimos animi rerum sapiente reiciendis repellat aut saepe quasi quisquam id.</p>
      <button className={style.button} onClick={clickfun}>Get Alert</button>
      <button className={style.button} onClick={() => {clickfun2('Peter')}}>Get in console</button>
      <button className={style.button} onClick={() => {dispname('Elba')}}>Display name</button>

    <Example n1 = {name} n2 = {name2} n3 = {'George'} />
    <Objectdestruct n1 = {name} n2 = {name2} n3 = {'George'} />
    <Random n1 = {name} n2 = {name2} n3 = {'George'} />
    <Classcompdestruct n1 = {name} n2 = {name2} n3 = {'George'} />
    <Resgister/>
    </>
  )
}

export default App
