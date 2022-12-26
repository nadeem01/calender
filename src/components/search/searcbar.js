import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa'
export default function SearchBar(props) {
    const [searchVal, setSearchVal] = React.useState('');
    
    const handleInput = (e) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }
    
    // const filteredProducts = props.products.filter((product) => {
    //   return product.includes(searchVal);
    // });
    
    return (
      <div className='container '>
        <div className='input-wrap border rounded'>
        {/* <i><AiOutlineFileSearch/></i> */}
        <AiOutlineSearch className='mr-4' />
          {/* <label 
            for="product-search" 
            id="input-label"
          >
            Product Search
          </label> */}
          <input 
            style={{border:'none'}}
            onChange={handleInput}
            value={searchVal}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search"
          />
        </div>
        {/* <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'><a href='#'>{product}</a></li>
            })}
          </ul>
        </div> */}
      </div>
    );
  }