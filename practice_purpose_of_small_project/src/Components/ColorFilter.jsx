import React,{useState} from 'react'
import{useSearchParams} from 'react-router-dom'
import styles from '../Style/Filter.module.css'

const ColorFilter = ({name1,name2,name3 = null}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    // const initalGenreParams = searchParams.getAll('genre');
    const [category , setCategory] = useState( []);
    // const handleOnChange = (e) => {
    //     // console.log(e.target.name);
    // }
    const handleOnChange = (e) => {
        const option = e.target.value
        let newCategory = [...category]
  
        if(category.includes(option)) {
          newCategory.splice(newCategory.indexOf(option),1);
        } else {
          newCategory.push(option)
        }
        setCategory(newCategory)
    }
    console.log(category);
  return (
    <div>
         <div >
            <div >
                <input type="checkbox"  value={name1} onChange={handleOnChange}  defaultChecked={category.includes(name1)} />
                <span className={styles.spanBox}>{name1}</span>
            </div>

            <div >
                <input type="checkbox" value={name2} onChange={handleOnChange}  defaultChecked={category.includes(name2)}/>
                <span className={styles.spanBox}>{name2}</span>
            </div>

            <div >
               {name3 ?  <input type="checkbox"  value={name3}  onChange={handleOnChange}  defaultChecked={category.includes(name3)}/> : null}
                <span className={styles.spanBox}>{name3}</span>
            </div>
        </div>
    </div>
  )
}

export default ColorFilter