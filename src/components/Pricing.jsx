const plans=[
"Starter",
"Professional",
"Enterprise"
]


export default function Pricing(){


return(

<section className="
py-20
max-w-5xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-bold
text-center
">

Simple Pricing

</h2>



<div className="
grid md:grid-cols-3
gap-6
mt-12
">


{
plans.map((p)=>(


<div
className="
bg-white
rounded-3xl
p-8
border
">


<h3 className="font-bold text-xl">

{p}

</h3>


<p className="mt-4 text-gray-500">

Perfect plan for your workflow

</p>


<button
className="
mt-8
bg-black
text-white
rounded-full
px-6 py-3
">

Choose

</button>


</div>


))
}



</div>



</section>

)

}