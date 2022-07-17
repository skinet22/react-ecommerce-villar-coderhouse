import { useState } from 'react'

const ItemCount = ({stock,onAdd,initial}) => {
    
    const [Count, setCount] = useState(initial)
    const onHandonChangeValue = (e) => {
        if(e.target.value<=stock){
            setCount(e.target.value);
        }else{
            setCount(stock);
        }
      
      }    

    return (
                    <div className="row">
                        <div className="col-lg-6">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number" onClick={() => (Count>1)&&setCount(Count-1)} data-type="minus" data-field="">
                                          <span className="bi bi-dash"></span>
                                          
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value={Count} onChange={onHandonChangeValue} min="1" max="100"/>
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                            <span className="bi bi-plus" onClick={() => (stock>Count)&&setCount(Count+1)}></span>
                                        </button>
                                    </span>
                                </div>
                                {Count<=stock ? <button className="btn btn-primary" onClick={()=>onAdd(Count)}>Agregar al carrito</button>: <button className="btn btn-primary" disabled>Agregar al carrito</button>}
                        </div>
                    </div>
    )
}
export default ItemCount
