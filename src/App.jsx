import { useEffect, useState } from 'react';
import { Reply } from './components/Reply';
import { SelectComponent } from './components/SelectComponent';
import './styles/style.scss';



function App() {
  const [height, setHeight] = useState();
  const [chest, setСhest] = useState();
  const [waist, setWaist] = useState();
  const [select, setSelect] =  useState('male');
  const [size, setSize] = useState("");

  const changeСhest = (target) => {
    setСhest(target.value);
  }
  const changeHeight = (target) => {
    setHeight(target.value);
  }
  const changeWaist = (target) => {
    setWaist(target.value);
  }
  
  function changeSelect(e){
    setSelect(e.value);
  }

  useEffect(() => {
    let array = Sizes[select];
    for (let index = 0; index < array.length; index++) {
      if (height <= array[index][1] && chest <= array[index][2] && waist <= array[index][3]) {
        setSize(array[index][0]);
        break;
      }
      if(index === array.length-1)  setSize(array[index][0]);
    }
  }, [chest,waist, height, select]);

const Sizes = {
  male: [
    ['S',176,92,80],
    ['M',176,98,86],
    ['L',182,104,92],
    ['XL',182,110,98],
    ['XXL',188,116,104]
  ],
  female: [
    ['XS',164,80,60],
    ['S',164,86,64],
    ['M',170,92,70],
    ['L',170,98,76],
    ['XL',176,104,82],
  ]
}



  return (
    <div className="App container">
      <form className=''>
        <div className="form__wrapper z-depth-4">
          <SelectComponent select={select} selectChange={changeSelect}></SelectComponent>
          <label htmlFor="height">
            Ваш рост:
            <input type="number"
              id='height'
              value={height}
              placeholder = "0"
              onChange={(e) => {
                changeHeight(e.target);
              }}
            />
          </label>
          <label htmlFor="chest">
           Обхват груди:
            <input type="number"
              id='chest'
              value={chest}
              placeholder = "0"
              onChange={(e) => {
                changeСhest(e.target);
              }}
            />
          </label>
          <label htmlFor="waist">
           Обхват талии:
            <input type="number"
              id='waist'
              value={waist}
              placeholder = "0"
              onChange={(e) => {
                changeWaist(e.target);
              }}
            />
          </label>
          {(height && chest && waist) && <Reply size={size}/>}
         
        </div>
      </form >
     
    </div >
  );
}

export default App;
