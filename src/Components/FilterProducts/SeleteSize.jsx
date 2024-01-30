import React,{useState} from 'react';

function SeleteSize({products}) {
    const productSize = products[0].size ? products[0].size[0] : "";
    // const productsColor = products[0].color ? products[0].color[0] : ""
  
    const [size,setSize] = useState(productSize);
    // const [color,setColor] = useState(productsColor)
  //    console.log(size);
  return (
    <div className='pb-4'>
        {products.item.size ? (
            <div>
                <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Pick a size
                </label>

                <select
                    id="size"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                {products.item.size.map((item, index) => {
                    return (
                    <option key={index} value={item}>
                        {item}
                    </option>
                    );
                })}
                </select>
            </div>
                ):(
                <div>
                    <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Pick a size
                    </label>
                        <select
                            id="size"
                            name="size"
                            disabled={true}
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                        {products.item?.size?.map((item, index) => {
                            return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                            );
                        })}
                        </select>
                </div>
                )}
    </div>
  )
}

export default SeleteSize