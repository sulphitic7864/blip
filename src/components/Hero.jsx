import {motion} from "framer-motion";


export default function Hero(){


return(

<section className="
max-w-6xl mx-auto
text-center
py-20
px-6
">


<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.7}}
>


<span className="
bg-orange-100
text-orange-600
px-4 py-2
rounded-full
text-sm
">

AI Powered Launcher

</span>



<h1 className="
text-5xl md:text-7xl
font-bold
leading-tight
mt-8
">


The simplest way to
<br/>

build your
<span className="text-orange-500">
 AI workflow
</span>


</h1>


<p className="
mt-6
max-w-xl
mx-auto
text-gray-600
">

Launch apps, manage accounts and automate
your workflow using intelligent AI tools.


</p>


<button className="
mt-8
bg-black
text-white
px-8 py-4
rounded-full
">


Get Started Free


</button>



</motion.div>


<motion.img

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

src="/hero.png"

className="
mt-16
mx-auto
rounded-xl
shadow-2xl
w-full
max-w-4xl
"

/>


</section>


)

}