 const circle=document.getElementById('circle');

 const observer=new IntersectionObserver((items)=>{
    //console.log(items);
    items.forEach(item=>{
        if(item.isIntersecting){
            console.log(`${item.target} is visible`);
        }

        else{
            console.log(`${item.target} is not visible`);
        }
    })
 });

 observer.observe(circle);