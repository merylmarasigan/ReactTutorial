import {useState} from 'react';
const Home = () => {
    const [name, setName] = useState('Meryl');
    const [age,setAge] = useState(25);

    const changeName = () => {
        if(name === 'Meryl'){
            setName('Aba');
        }else{
            setName('Meryl')
        }

        setAge(age + 1)
    }



    return (  
        <div className='home'>
            <h2>Homepage</h2>
            <p className='name'>{name} is {age} years old</p>
            <button onClick={changeName}>Change name!</button>
        </div>
    );
}
 
export default Home;