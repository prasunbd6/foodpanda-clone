
const Delivery = () => {

  const cuisines=[
    {id:1,cname:"American"},
    {id:2,cname:"Asian"},
    {id:3,cname:"Bakery"},
    {id:4,cname:"Bangladeshi"},
    {id:5,cname:"Bengali"},
    {id:6,cname:"Beverage"},
    {id:7,cname:"Biryani"},
    {id:8,cname:"Breakfast"},
    {id:9,cname:"Burgers"},
    {id:10,cname:"Cafe"},
    {id:11,cname:"Cakes"},
    {id:12,cname:"Chicken"},
    {id:13,cname:"Chinese"},
    {id:14,cname:"Chotpoti & Fuchka"},
    {id:15,cname:"Curry"},
    {id:16,cname:"Dessert"},
    {id:17,cname:"Dumpling"},
    {id:18,cname:"Fast Food"},
    {id:19,cname:"Fish"},
    {id:20,cname:"Fried Chicken"},
    {id:21,cname:"Healthy"},
    {id:22,cname:"Ice Cream"},
    {id:23,cname:"Indian"},
    {id:24,cname:"Italian"},
    {id:25,cname:"Japanese"},
    {id:26,cname:"Juice Corner"},
    {id:27,cname:"Kashmiri"},
    {id:28,cname:"Kebab"},
    {id:29,cname:"Korean"},
    {id:30,cname:"Meat"},
    {id:31,cname:"Mediterranean"},
    {id:32,cname:"Mexican"},
    {id:33,cname:"Middle Eastern"},
    {id:34,cname:"Noodles"},
    {id:35,cname:"Pasta"},
    {id:36,cname:"Pizza"},
    {id:37,cname:"Rice Dishes"},
    {id:38,cname:"Sandwiches"},
    {id:39,cname:"Seafood"},
    {id:40,cname:"Shawarma"},
    {id:41,cname:"Snacks"},
    {id:42,cname:"Soups"},
    {id:43,cname:"Steak"},
    {id:44,cname:"Sushi"},
    {id:45,cname:"Sweets"},
    {id:46,cname:"Thai"},
    {id:47,cname:"Turkish"},
    {id:48,cname:"Vegetarian"},
    {id:49,cname:"Western"},
    {id:50,cname:"Wraps"},


  ]

  return (
    <>

<div className='flex flex-col justify-center items-center mt-36 pt-1 md:mt-28'>
    <p className='w-11/12 h-auto pt-1 bg-pink-50 text-center text-sm text-pink-700 md:text-lg md:py-2'>YUMPANDA : 25% off up to Tk. 100 off on orders over Tk 199 (Valid 1 time)</p>
</div>



<div className='h-auto flex flex-col justify-center items-center mt-0 gap-4'>


    <div className=' w-11/12 h-screen border-2  flex flex-wrap justify-center items-start md:justify-start md:items-start'>
      
      <div className='w-96 h-[840px] flex flex-col justify-start items-start px-4 overflow-y-scroll'>
        <p>Filters</p>
  
        {/*Sort by*/}
        <div className='w-full flex flex-wrap flex-col justify-start items-start'>
          <p>Sort by</p>
          <ul>
          <li>Relevance</li>
          <li>Fastest Delivery</li>
          <li>Distance</li>
        </ul>
        </div>

          {/*Quick Filters*/}
        <div className='w-full flex flex-wrap flex-col justify-start items-start'>
        <p>Quick filters</p>
        <ul>
        <li>Top restaurant button</li>
      </ul>
      </div>

       {/*Offers*/}
       <div className='w-full flex flex-wrap flex-col justify-start items-start'>
       <p>Offers</p>
       <ul>
       <li>Relevance</li>
       <li>Fastest Delivery</li>
       <li>Distance</li>
     </ul>
     </div>

      {/*Cuisines*/}
      <div className='w-full flex flex-wrap flex-col justify-start items-start'>
      <p>Cuisines</p>
      <ul>
      <li>Search bar</li>

      {
        cuisines.map(x=>{
          return(
            <>
            <li key={x.id}>{x.cname}</li>
            </>
          )
        })
      }
      
      
    
      </ul>
    </div>
        

      </div>

      
      
    </div>

    


    </div>
    </>
  )
}

export default Delivery
