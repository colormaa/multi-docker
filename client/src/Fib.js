import React, {useState} from 'react'
import axios from 'axios'
const Fib=()=>{
    const [seenIndexes, setSeenIndexes ]= useState([])
    const [values, setValues] = useState({})
    const [index, setIndex]= useState('');
    React.useEffect(()=>{
        fetchIndexes()
        fetchValues()
    },)
    const fetchValues=async()=>{
        const values1 = await axios.get('/api/values/current');
        
        setValues(values1.data)
    }
    const fetchIndexes =async()=>{
        const seenIndexes1 = await axios.get('/api/values/all');
        
        setSeenIndexes(seenIndexes1.data)
    }
    const renderSeenIndexes=()=>{
        return seenIndexes.map(({number})=> number).join(', ');
    }
    const renderValues=()=>{
        const entries = [];
        for(let key in values){
            entries.push(
                <div key = {key}>
                    For index {key} I calculated {values[key]}
                </div>
            )
        }
        return entries;
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        await axios.post('/api/values', {
            index: index
        });
        
        setIndex('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input  value={index} onChange={(e)=>setIndex(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <h3>Indexes I have seen</h3>
            {renderSeenIndexes()}
            <h3>calculated values:</h3>
            {renderValues()}
        </div>
    )
}

export default Fib;