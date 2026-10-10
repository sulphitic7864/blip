import {motion} from "framer-motion";


export default function FeatureSection(){


return(

<section className="
max-w-6xl mx-auto
space-y-32
px-6
py-20
">


{

[
{
title:"Upload images instantly",
desc:"Create workflows using simple AI commands.",
img:"/mobile.png"
},

{
title:"Advanced templates",
desc:"Build powerful apps without coding.",
img:"/dashboard.png"
}

].map((x,i)=>(


<div
key={i}
className="
grid md:grid-cols-2
gap-12
items-center
">


<motion.div
initial={{
opacity:0,
x:i%2?50:-50
}}
whileInView={{
opacity:1,
x:0
}}
>


<h2 className="
text-4xl
font-bold
">

{x.title}

</h2>


<p className="
mt-5
text-gray-600
">

{x.desc}

</p>


</motion.div>



<img
src={x.img}
className="
rounded-3xl
shadow-xl
"
/>



</div>


))


}



</section>

)

}